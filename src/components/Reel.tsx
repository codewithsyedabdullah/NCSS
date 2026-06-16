export default function Reel() {
  return (
    <section className="bx-reel">
      <div className="bx-reel-inner">
        <video autoPlay muted loop playsInline>
          <source src="https://storage.googleapis.com/bx-site-cms/media/reel_desktop.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
