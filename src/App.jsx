import React, { useEffect, useState } from "react";
import "./App.css";

const solutions = [
  {
    number: "01",
    title: "Website Company Profile",
    description:
      "Website profesional untuk membangun kredibilitas, memperkuat branding, dan memperluas kehadiran bisnis Anda di dunia digital.",
    icon: "◈",
  },
  {
    number: "02",
    title: "AttendanceSmart",
    description:
      "Solusi digital untuk membantu perusahaan mengelola kehadiran dan absensi karyawan secara lebih mudah, terstruktur, dan efisien.",
    icon: "◉",
  },
  {
    number: "03",
    title: "Aplikasi UMKM",
    description:
      "Solusi aplikasi yang membantu pelaku UMKM mengelola aktivitas bisnis secara lebih terstruktur dan meningkatkan efisiensi operasional.",
    icon: "◆",
  },
  {
    number: "04",
    title: "Iklan AI & Konten Promosi",
    description:
      "Membantu bisnis membuat materi promosi berbasis AI untuk memperkenalkan produk, layanan, perusahaan, dan brand secara lebih menarik dan profesional.",
    icon: "✦",
  },
];

const strengths = [
  [
    "01",
    "Berorientasi Bisnis",
    "Kami membangun solusi berdasarkan kebutuhan dan proses bisnis, bukan sekadar teknologi.",
  ],
  [
    "02",
    "Teknologi Modern",
    "Menggunakan teknologi yang relevan untuk menghasilkan aplikasi yang cepat, aman, dan mudah dikembangkan.",
  ],
  [
    "03",
    "Scalable",
    "Arsitektur dirancang agar solusi dapat berkembang mengikuti pertumbuhan bisnis Anda.",
  ],
  [
    "04",
    "Pendampingan",
    "Kami membangun hubungan jangka panjang melalui dukungan dan pengembangan berkelanjutan.",
  ],
];

const process = [
  [
    "01",
    "Pahami",
    "Memahami kebutuhan, tujuan, dan tantangan bisnis Anda.",
  ],
  [
    "02",
    "Rancang",
    "Menyusun konsep dan pengalaman pengguna yang tepat.",
  ],
  [
    "03",
    "Bangun",
    "Mengembangkan solusi dengan standar kualitas dan keamanan.",
  ],
  [
    "04",
    "Kembangkan",
    "Mendampingi implementasi dan pengembangan selanjutnya.",
  ],
];

const heroSlides = [
  {
    image: "/hero/01-website-company-profile.png",
    alt: "Website Company Profile QAVENTA62 pada perangkat desktop dan mobile",
    label: "WEBSITE",
    title: "Company Profile",
    icon: "◈",
    meta: "DIGITAL PRESENCE",
    code: "{ website: ready }",
  },
  {
    image: "/hero/02-attendancesmart.png",
    alt: "AttendanceSmart QAVENTA62 untuk absensi mobile dengan GPS dan geofence",
    label: "ATTENDANCESMART",
    title: "Smart Attendance",
    icon: "◉",
    meta: "GPS • FACE • FINGERPRINT",
    code: "{ attendance: smart }",
  },
  {
    image: "/hero/03-aplikasi-umkm.png",
    alt: "Aplikasi UMKM QAVENTA62 untuk mendukung operasional bisnis",
    label: "UMKM",
    title: "Business Solution",
    icon: "◆",
    meta: "SALES • STOCK • REPORT",
    code: "{ business: grow }",
  },
  {
    image: "/hero/04-iklan-ai.png",
    alt: "Iklan AI dan konten promosi QAVENTA62 untuk kebutuhan pemasaran bisnis",
    label: "AI ADS",
    title: "AI Content & Promotion",
    icon: "✦",
    meta: "CONTENT • CAMPAIGN • CREATIVE",
    code: "{ ai: creative }",
  },
];

const heroEffects = ["fade", "zoom", "slide-left", "slide-right", "blur"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroEffect, setHeroEffect] = useState("fade");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroIndex((current) => {
        let next = Math.floor(Math.random() * heroSlides.length);
        while (next === current) {
          next = Math.floor(Math.random() * heroSlides.length);
        }
        return next;
      });

      const nextEffect = heroEffects[Math.floor(Math.random() * heroEffects.length)];
      setHeroEffect(nextEffect);
    }, 5600);

    return () => window.clearInterval(interval);
  }, []);

  const heroSlide = heroSlides[heroIndex];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* =========================
          NAVBAR
      ========================== */}
      <header className="navbar">
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
            aria-label="Beranda"
          >
            <span className="brand-mark">S</span>

            <span>
              QAVENTA<span>62</span>
            </span>
          </button>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu"
          >
            <i></i>
            <i></i>
            <i></i>
          </button>

          <nav
            className={
              menuOpen
                ? "nav-links open"
                : "nav-links"
            }
          >
            <button onClick={() => scrollTo("home")}>
              Beranda
            </button>

            <button onClick={() => scrollTo("about")}>
              Tentang Kami
            </button>

            <button onClick={() => scrollTo("solutions")}>
              Solusi
            </button>

            <button onClick={() => scrollTo("vision")}>
              Visi & Misi
            </button>

            <button
              className="nav-cta"
              onClick={() => scrollTo("contact")}
            >
              Hubungi Kami <span>↗</span>
            </button>
          </nav>

        </div>
      </header>


      <main>

        {/* =========================
            HERO
        ========================== */}
        <section
          id="home"
          className="hero section"
        >

          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="hero-grid"></div>

          <div className="container hero-content">

            {/* LEFT CONTENT */}
            <div className="hero-copy">

              <div className="eyebrow">
                <span></span>
                SOLUSI PERANGKAT LUNAK
              </div>

              <h1>
                Membangun Teknologi,
                <em>
                  Mengembangkan Bisnis.
                </em>
              </h1>

              <p>
                Kami membantu perusahaan dan pelaku usaha
                membangun solusi perangkat lunak yang praktis,
                modern, dan sesuai dengan kebutuhan bisnis.
              </p>

              <div className="hero-actions">

                <button
                  className="primary-btn"
                  onClick={() => scrollTo("solutions")}
                >
                  Lihat Solusi Kami
                  <span>↗</span>
                </button>

                <button
                  className="text-btn"
                  onClick={() => scrollTo("contact")}
                >
                  Konsultasikan Kebutuhan
                  <span>→</span>
                </button>

              </div>

              <div className="hero-note">
                <span className="pulse-dot"></span>

                Dari ide menjadi solusi digital yang nyata.
              </div>

            </div>


            {/* =========================
                HERO CAROUSEL
            ========================== */}
            <div className="hero-visual" aria-hidden="true">

              <div className={`hero-image-wrapper hero-transition-${heroEffect}`}>
                <div className="hero-image-layer">
                  <img
                    key={`${heroSlide.image}-${heroIndex}`}
                    src={heroSlide.image}
                    alt={heroSlide.alt}
                    className="hero-team-image"
                  />
                  <div className="hero-image-overlay"></div>
                </div>
              </div>

              <div className="hero-carousel-card hero-carousel-card-top">
                <span className="float-icon">{heroSlide.icon}</span>
                <div>
                  <small>{heroSlide.label}</small>
                  <b>{heroSlide.title}</b>
                </div>
              </div>

              <div className="hero-carousel-card hero-carousel-card-bottom">
                <span className="hero-status-dot"></span>
                <div>
                  <small>QAVENTA62 SOLUTION</small>
                  <b>{heroSlide.meta}</b>
                </div>
              </div>

              <div className="code-pill">{heroSlide.code}</div>

              <div className="hero-carousel-progress">
                <span className="hero-carousel-count">0{heroIndex + 1} / 0{heroSlides.length}</span>
                <div className="hero-carousel-dots">
                  {heroSlides.map((slide, index) => (
                    <span
                      key={slide.image}
                      className={`hero-carousel-dot ${index === heroIndex ? "active" : ""}`}
                    ></span>
                  ))}
                </div>
              </div>

            </div>

          </div>


          <div className="scroll-hint">
            SCROLL UNTUK MENJELAJAHI
            <span>↓</span>
          </div>

        </section>


        {/* =========================
            ABOUT
        ========================== */}
        <section
          id="about"
          className="section about"
        >

          <div className="container two-col">

            <div className="section-label">
              01 — TENTANG KAMI
            </div>

            <div className="about-content">

              <h2>
                Teknologi yang tepat untuk{" "}
                <span>
                  kebutuhan bisnis Anda.
                </span>
              </h2>

              <p className="lead">
                Kami menyediakan jasa pengembangan
                perangkat lunak untuk membantu bisnis
                beradaptasi dengan perkembangan teknologi.
              </p>

              <p>
                Mulai dari website company profile, aplikasi
                bisnis, hingga materi promosi berbasis AI,
                kami membangun solusi yang dirancang
                berdasarkan kebutuhan nyata dan dapat berkembang
                mengikuti bisnis Anda.
              </p>

              <div className="stats">

                <div>
                  <strong>01</strong>

                  <span>
                    Fokus pada
                    <br />
                    kebutuhan bisnis
                  </span>
                </div>

                <div>
                  <strong>∞</strong>

                  <span>
                    Solusi yang
                    <br />
                    dapat berkembang
                  </span>
                </div>

                <div>
                  <strong>24/7</strong>

                  <span>
                    Siap mendukung
                    <br />
                    transformasi digital
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            SOLUTIONS
        ========================== */}
        <section
          id="solutions"
          className="section solutions"
        >

          <div className="container">

            <div className="section-heading">

              <div className="section-label">
                02 — SOLUSI KAMI
              </div>

              <h2>
                Solusi digital yang{" "}
                <span>
                  siap digunakan.
                </span>
              </h2>

              <p>
                Produk dan layanan yang kami kembangkan
                untuk menjawab kebutuhan bisnis di dunia digital.
              </p>

            </div>


            <div className="solution-grid">

              {solutions.map((item) => (

                <article
                  className="solution-card"
                  key={item.number}
                >

                  <div className="solution-number">
                    {item.number}
                  </div>

                  <div className="solution-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <button
                    onClick={() =>
                      scrollTo("contact")
                    }
                  >
                    Pelajari lebih lanjut
                    <span>↗</span>
                  </button>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            STRENGTHS
        ========================== */}
        <section className="section strengths">

          <div className="container">

            <div className="strength-head">

              <div className="section-label">
                03 — KENAPA KAMI
              </div>

              <h2>
                Bukan sekadar membuat software.
                <br />

                <span>
                  Kami menyelesaikan masalah.
                </span>
              </h2>

            </div>


            <div className="strength-grid">

              {strengths.map(
                ([num, title, text]) => (

                  <div
                    className="strength-item"
                    key={num}
                  >

                    <span className="strength-num">
                      {num}
                    </span>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =========================
            PROCESS
        ========================== */}
        <section className="section process">

          <div className="container">

            <div className="section-heading centered">

              <div className="section-label">
                04 — CARA KAMI BEKERJA
              </div>

              <h2>
                Proses sederhana,
                <br />

                <span>
                  hasil yang terarah.
                </span>
              </h2>

            </div>


            <div className="process-grid">

              {process.map(
                ([num, title, text]) => (

                  <div
                    className="process-item"
                    key={num}
                  >

                    <div className="process-circle">
                      {num}
                    </div>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* =========================
            VISION & MISSION
        ========================== */}
        <section
          id="vision"
          className="section vision"
        >

          <div className="vision-glow"></div>

          <div className="container vision-inner">

            <div className="section-label">
              05 — VISI & MISI
            </div>

            <div className="vision-main">

              <div>

                <span className="big-label">
                  VISI
                </span>

                <h2>
                  Menjadi mitra teknologi terpercaya
                  dalam membantu bisnis membangun{" "}
                  <span>
                    masa depan digital.
                  </span>
                </h2>

              </div>


              <div className="mission">

                <span className="big-label">
                  MISI
                </span>

                <ul>

                  <li>
                    <b>01</b>

                    <span>
                      Menghadirkan solusi yang tepat guna
                      dan memberikan nilai nyata bagi bisnis.
                    </span>
                  </li>

                  <li>
                    <b>02</b>

                    <span>
                      Mengembangkan teknologi inovatif
                      untuk meningkatkan efisiensi dan produktivitas.
                    </span>
                  </li>

                  <li>
                    <b>03</b>

                    <span>
                      Membangun sistem yang andal, aman,
                      dan mampu berkembang bersama bisnis.
                    </span>
                  </li>

                  <li>
                    <b>04</b>

                    <span>
                      Membangun hubungan jangka panjang
                      sebagai partner teknologi yang dapat dipercaya.
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CONTACT
        ========================== */}
        <section
          id="contact"
          className="section contact"
        >

          <div className="container contact-box">

            <div className="contact-decoration">
              +
            </div>

            <div className="section-label">
              06 — MULAI BERSAMA KAMI
            </div>

            <h2>
              Punya kebutuhan
              <br />

              <span>
                software?
              </span>
            </h2>

            <p>
              Ceritakan kebutuhan bisnis Anda.
              Mari kita ubah ide dan masalah menjadi
              solusi digital yang nyata.
            </p>

            <a
              className="primary-btn contact-btn"
              href="https://wa.me/628388000025?text=Halo%20QAVENTA62%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20software."
              target="_blank"
              rel="noopener noreferrer"
            >
              Diskusikan Proyek Anda
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================== */}
      <footer>

        <div className="container footer-main">

          <div>

            <button
              className="brand footer-brand"
              onClick={() => scrollTo("home")}
            >

              <span className="brand-mark">
                S
              </span>

              <span>
                QAVENTA<span>62</span>
              </span>

            </button>

            <p>
              Membangun Teknologi,
              <br />
              Mengembangkan Bisnis.
            </p>

          </div>


          <div className="footer-links">

            <div>

              <small>
                NAVIGASI
              </small>

              <button
                onClick={() => scrollTo("about")}
              >
                Tentang Kami
              </button>

              <button
                onClick={() => scrollTo("solutions")}
              >
                Solusi
              </button>

              <button
                onClick={() => scrollTo("vision")}
              >
                Visi & Misi
              </button>

            </div>


            <div>

              <small>
                KONTAK
              </small>

              <a href="mailto:info@qaventa62.id">
                info@qaventa62.id
              </a>

              <span>
                Indonesia
              </span>

            </div>

          </div>

        </div>


        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} QAVENTA62.
            All rights reserved.
          </span>

          <span>
            Solusi Perangkat Lunak untuk Bisnis.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;