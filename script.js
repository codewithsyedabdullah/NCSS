// ─── 1. Console tabs + typewriter ───
(function consoleTabs() {
  const tabs = document.querySelectorAll('.console-tab');
  const panes = {
    cli: document.getElementById('pane-cli'),
    api: document.getElementById('pane-api'),
    console: document.getElementById('pane-console'),
  };

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(panes).forEach(p => p && p.classList.remove('active'));
      const pane = panes[tab.dataset.pane];
      if (pane) {
        pane.classList.add('active');
        typeInPane(pane);
      }
    });
  });

  // Typewriter
  const typewriterQueues = new Map();

  function typeInPane(pane) {
    const el = pane.querySelector('[data-typed]');
    if (!el) return;
    if (typewriterQueues.get(el)?.running) return;

    const text = el.dataset.typed;
    el.textContent = '';
    let i = 0;
    const state = { running: true, timer: null };
    typewriterQueues.set(el, state);

    const cursorSpan = pane.querySelector('.cursor');

    function tick() {
      if (!state.running) return;
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        state.timer = setTimeout(tick, 42);
      } else {
        state.running = false;
        if (cursorSpan) cursorSpan.style.display = 'none';
      }
    }

    // Clear previous partial text and restart
    if (state.timer) clearTimeout(state.timer);
    if (cursorSpan) cursorSpan.style.display = '';
    tick();
  }

  // Initial type on active pane
  const activePane = document.querySelector('.console-pane.active');
  if (activePane) typeInPane(activePane);
})();

// ─── 3. Accordion scroll-driven ───
(function accordionScroll() {
  const section = document.getElementById('platform');
  const stack = document.getElementById('accordionStack');
  const cards = stack ? stack.querySelectorAll('.accordion-card') : [];
  const tabs = document.querySelectorAll('.acc-tab');
  if (!section || !stack || cards.length === 0) return;

  const collapsedDesktop = 84;
  const collapsedMobile = 96;
  const totalCards = cards.length;

  function updateAccordion() {
    const stackHeight = stack.offsetHeight;
    if (stackHeight === 0) return;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const sh = section.offsetHeight;
    const scrollable = sh - vh;
    const progress = Math.max(0, Math.min(1, scrollable > 0 ? (-rect.top) / scrollable : 0));

    const collapsed = window.innerWidth <= 820 ? collapsedMobile : collapsedDesktop;
    const segment = 1 / totalCards;
    const activeIndex = Math.min(totalCards - 1, Math.floor(progress / segment));
    const activeP = Math.max(0, Math.min(1, (progress - activeIndex * segment) / segment));

    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === activeIndex);
    });

    cards.forEach((card, i) => {
      const oh = card.offsetHeight;
      const hc = oh > 0 ? (collapsed / oh) * 100 : 0;
      const maxClip = 100 - hc;

      let y, clipBottom, z;

      if (i < activeIndex) {
        y = i * collapsed;
        clipBottom = maxClip;
        z = 100 + (totalCards - i);
      } else if (i === activeIndex) {
        const startY = stackHeight + collapsed;
        const endY = activeIndex * collapsed;
        y = startY + (endY - startY) * activeP;
        clipBottom = maxClip * activeP;
        z = 200;
      } else {
        y = stackHeight + collapsed;
        clipBottom = 0;
        z = 10;
      }

      card.style.setProperty('--card-y', y + 'px');
      card.style.setProperty('--card-clip-top', '0%');
      card.style.setProperty('--card-clip-bottom', clipBottom + '%');
      card.style.zIndex = z;
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.dataset.index, 10);
      if (isNaN(idx)) return;
      const rect = section.getBoundingClientRect();
      const sh = section.scrollHeight;
      const vh = window.innerHeight;
      const scrollable = sh - vh;
      const segment = 1 / totalCards;
      const targetRatio = idx * segment;
      const targetScroll = window.scrollY + rect.top + scrollable * targetRatio;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
  });

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateAccordion();
        ticking = false;
      });
      ticking = true;
    }
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateAccordion, 80);
  });
  setTimeout(updateAccordion, 100);
})();

// ─── 4. Pricing bars morph ───
(function pricingBars() {
  const section = document.getElementById('pricing');
  const bars = document.querySelectorAll('.pricing-bar');
  if (!section || bars.length === 0) return;

  function updateBars() {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));

    bars.forEach((bar, i) => {
      const morph = Math.sin(progress * 2 * Math.PI + i * 0.72) * 34 +
                    Math.cos(progress * Math.PI + i * 0.34) * 14;
      bar.style.setProperty('--bar-morph', morph + 'px');
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateBars();
        ticking = false;
      });
      ticking = true;
    }
  });

  setTimeout(updateBars, 100);
})();

// ─── 5. Operations cube explode ───
(function cubeExplode() {
  const shell = document.getElementById('cubeShell');
  if (!shell) return;

  function toggleExplode() {
    shell.classList.toggle('is-exploded');
  }

  shell.addEventListener('click', toggleExplode);
  shell.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExplode();
    }
  });
})();
