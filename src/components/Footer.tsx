export default function Footer() {
  return (
    <section className="bx-footer">
      <div className="bx-footer-bg" />

      <div className="flex flex-col items-center justify-center h-full px-8 sm:px-16">
        <div className="text-center">
          <p className="bx-footer-title">Reach Out</p>
          <a
            href="mailto:info@ncss.edu.pk"
            className="bx-footer-email inline-block mt-4"
          >
            info@ncss.edu.pk
          </a>
        </div>
      </div>

      <div className="bx-footer-bottom">
        <div className="bx-footer-copy">
          NCSS. All rights reserved.
        </div>
        <div className="bx-footer-links">
          <a href="#" className="bx-footer-link">
            IG
            <span className="bx-arrow" />
          </a>
          <a href="#" className="bx-footer-link">
            X
            <span className="bx-arrow" />
          </a>
          <a href="#" className="bx-footer-link">
            LI
            <span className="bx-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
