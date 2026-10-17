import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Battery, CalendarCheck, CheckCircle2, Clock, Cog, Disc3, Droplets, Gauge, Mail, MapPin,
  Menu, Phone, Search, Thermometer, X,
} from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";

// -----------------------------------------------------------------------------
// CONTENT. Facts come from Hoshi Motors' current site (hoshimotors.net),
// checked 2026-10-17. That site is one short page with no logo or photos, so
// the crest and star motif here are drawn from the name: hoshi means "star".
// -----------------------------------------------------------------------------

const COMPANY = "Hoshi Motors";
const ABBR = "hm";
const PHONE = "3034496632";
const PHONE_DISPLAY = "(303) 449-6632";
const EMAIL = "star@hoshimotors.net";
const ADDRESS = "2907 55th St, Unit 1";
const CITY = "Boulder, CO 80301";
const MAPS_QUERY = "Hoshi Motors, 2907 55th St Unit 1, Boulder, CO 80301";
const GOOGLE_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const END_DATE = "2026-11-24T23:59:59-07:00";

const HOURS = [
  ["Monday – Friday", "7:30 am – 5:00 pm"],
  ["Saturday & Sunday", "Closed"],
];

// The four makes named on the current site, placed as a constellation.
const MAKES = [
  { name: "Honda", x: 18, y: 30, line: "Everyday Civics, Accords, CR-Vs and Pilots, kept on schedule." },
  { name: "Acura", x: 46, y: 16, line: "The same engineering as Honda, with the premium details looked after." },
  { name: "Toyota", x: 74, y: 40, line: "Corollas to Tacomas, built to last and maintained to match." },
  { name: "Subaru", x: 40, y: 62, line: "Colorado's all-wheel drive. Its name is the Japanese word for the Pleiades." },
];

const SERVICES = [
  { title: "Scheduled maintenance", desc: "Factory-interval service so nothing sneaks up on you.", icon: CalendarCheck },
  { title: "Diagnostics", desc: "Check-engine lights and odd noises traced to the real cause.", icon: Search },
  { title: "Brakes", desc: "Pads, rotors, calipers and fluid.", icon: Disc3 },
  { title: "Engine & timing", desc: "Timing belts, gaskets and engine repair.", icon: Cog },
  { title: "Oil & fluids", desc: "Oil, coolant, transmission and brake fluid service.", icon: Droplets },
  { title: "Heating & A/C", desc: "Climate control diagnosis and repair.", icon: Thermometer },
  { title: "Electrical & battery", desc: "Batteries, starters, alternators and wiring.", icon: Battery },
  { title: "Suspension & steering", desc: "Struts, shocks, CV axles and steering parts.", icon: Gauge },
];
const NUMERALS = ["一", "二", "三", "四", "五", "六", "七", "八"];
const SERVICE_OPTIONS = ["Not sure / diagnosis", ...SERVICES.map((s) => s.title)];

// Illustrates the "honest estimates so you can plan for repairs" promise. Sample items only.
const PLAN = [
  { when: "Now", kanji: "今", note: "Safety items and anything that will cause damage if it waits.", items: ["Front brake pads at 2 mm", "Coolant leak at the water pump"] },
  { when: "Soon", kanji: "次", note: "Worth budgeting for in the next few months.", items: ["Rear tires near the wear bars", "Timing belt due at 105k"] },
  { when: "Later", kanji: "後", note: "On the horizon. We'll remind you when it's time.", items: ["Spark plugs at the next interval", "Struts showing early wear"] },
];

const NAV = [["Makes", "#makes"], ["Plan ahead", "#plan"], ["Services", "#services"], ["Visit", "#visit"]];

// -----------------------------------------------------------------------------
// MOTIFS
// -----------------------------------------------------------------------------

const STAR = "M50 6l12.9 30.6 33.1 2.7-25.2 21.7 7.7 32.4L50 76.2 21.5 93.4l7.7-32.4L4 39.3l33.1-2.7z";

function Crest({ size = 52, className = "" }) {
  return (
    <svg className={`crest ${className}`} width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="var(--ai)" />
      <circle cx="60" cy="60" r="49" fill="none" stroke="var(--kin)" strokeWidth="3" />
      <circle cx="60" cy="60" r="43" fill="none" stroke="var(--kin)" strokeWidth="1" strokeDasharray="2 5" />
      <g transform="translate(22 21) scale(.76)"><path d={STAR} fill="var(--shu)" /></g>
    </svg>
  );
}

function Seal({ children = "星", className = "" }) {
  return <span className={`seal ${className}`} aria-hidden="true">{children}</span>;
}

function Seigaiha({ id }) {
  return (
    <svg className="seigaiha" aria-hidden="true">
      <defs>
        <pattern id={id} width="56" height="28" patternUnits="userSpaceOnUse">
          {[[0, 0], [56, 0], [28, 14], [0, 28], [56, 28]].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              {[27, 21, 15, 9].map((r) => <circle key={r} cx={cx} cy={cy} r={r} fill="var(--wave-bg)" stroke="currentColor" strokeWidth="1.4" />)}
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function Constellation() {
  const pairs = [[0, 1], [1, 2], [0, 3], [3, 2]];
  const pleiades = [[20, 70], [23, 73], [18, 75], [25, 68], [21, 78], [16, 71]];
  return (
    <div className="sky">
      <Seigaiha id="sky-waves" />
      <svg className="sky-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {pairs.map(([a, b]) => <line key={`${a}${b}`} x1={MAKES[a].x} y1={MAKES[a].y} x2={MAKES[b].x} y2={MAKES[b].y} />)}
      </svg>
      {pleiades.map(([x, y], i) => <i key={i} className="dust" style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * .4}s` }} />)}
      {MAKES.map((m, i) => (
        <a key={m.name} href="#makes" className="sky-star" style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${i * .7}s` }}>
          <svg viewBox="0 0 100 100" aria-hidden="true"><path d={STAR} /></svg>
          <span>{m.name}</span>
        </a>
      ))}
      <div className="sky-caption"><Seal />Four makes, one sky</div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label={`${COMPANY} home`}>
          <Crest size={50} />
          <span className="brand-word"><strong>Hoshi Motors</strong><small>星 · Boulder, Colorado</small></span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-book" href="#book" onClick={() => setOpen(false)}>Book a visit</a>
        </nav>
        <a className="header-phone" href={`tel:${PHONE}`}><Phone size={17} />{PHONE_DISPLAY}</a>
        <a className="btn btn-shu header-cta" href="#book">Book a visit</a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

function Hero({ rating }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Honda · Acura · Toyota · Subaru</span>
          <h1>Honest repair for the Japanese cars <em>Boulder drives.</em></h1>
          <p>We keep Hondas, Acuras, Toyotas and Subarus running for the long haul, and we tell you plainly what your car needs now and what can wait, so you can plan for repairs instead of being surprised by them.</p>
          <div className="hero-actions">
            <a className="btn btn-shu" href="#book">Book a visit <ArrowRight size={18} /></a>
            <a className="btn btn-ink" href={`tel:${PHONE}`}><Phone size={17} /> {PHONE_DISPLAY}</a>
          </div>
          <ul className="hero-facts">
            <li><Clock size={16} /> Mon–Fri 7:30 am – 5:00 pm</li>
            <li><MapPin size={16} /> 55th St, between Pearl and Valmont</li>
            {rating && <li><span className="gold">★ {rating.rating.toFixed(1)}</span> from {rating.userRatingCount.toLocaleString()} Google reviews</li>}
          </ul>
        </div>
        <Constellation />
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story">
      <Seigaiha id="story-waves" />
      <div className="wrap story-inner">
        <div className="story-glyph" aria-hidden="true">星</div>
        <div>
          <span className="eyebrow light">Hoshi means star</span>
          <h2>Long-term relationships, <em>not one-time repairs.</em></h2>
          <p>Our goal is to build long-term relationships with our customers. That means a straightforward, honest approach: you hear what your car needs, why, and what it costs before we touch it, so you can plan ahead.</p>
          <p className="story-mail">Even our inbox is a star: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </div>
    </section>
  );
}

function Makes() {
  return (
    <section className="section makes" id="makes">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">The makes we know</span>
          <h2>Four makes. <em>Known inside out.</em></h2>
          <p>Focusing on a short list means we know each one's maintenance schedule, its common trouble spots and the fix that lasts.</p>
        </div>
        <div className="noren-row">
          {MAKES.map((m, i) => (
            <article className="noren" key={m.name}>
              <div className="noren-cloth">
                <svg viewBox="0 0 100 100" aria-hidden="true"><path d={STAR} /></svg>
                <h3>{m.name}</h3>
                <span className="noren-num">{NUMERALS[i]}</span>
              </div>
              <p>{m.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plan() {
  return (
    <section className="section plan" id="plan">
      <div className="wrap plan-inner">
        <div className="plan-copy">
          <span className="eyebrow">Plan ahead</span>
          <h2>Know what's coming <em>before it breaks.</em></h2>
          <p>Every inspection ends with a plain estimate sorted by urgency. Nothing gets done without your OK, and you leave knowing what to budget for next.</p>
          <ol className="steps">
            <li><b>Request a time.</b> Book online, call or email and we'll confirm a drop-off.</li>
            <li><b>We inspect and explain.</b> What needs attention now, and what can wait.</li>
            <li><b>You approve.</b> Work starts only after you say yes to the estimate.</li>
          </ol>
        </div>
        <div className="estimate" aria-label="Example estimate">
          <div className="estimate-head">
            <div><small>Example estimate</small><strong>2014 Subaru Outback · 98,400 mi</strong></div>
            <Seal className="seal-sm">承</Seal>
          </div>
          {PLAN.map((p) => (
            <div className={`estimate-row row-${p.when.toLowerCase()}`} key={p.when}>
              <span className="estimate-kanji" aria-hidden="true">{p.kanji}</span>
              <div>
                <h3>{p.when}</h3>
                <p>{p.note}</p>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>
          ))}
          <p className="estimate-foot">Sample items for illustration. Your estimate is written for your car.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">What we handle</span>
          <h2>Everything your car needs, <em>explained plainly.</em></h2>
        </div>
        <div className="service-list">
          {SERVICES.map(({ title, desc, icon: Icon }, i) => (
            <a className="service" key={title} href="#book" data-service={title}>
              <span className="service-num" aria-hidden="true">{NUMERALS[i]}</span>
              <Icon size={22} className="service-icon" />
              <span className="service-text"><h3>{title}</h3><p>{desc}</p></span>
              <ArrowRight size={18} className="service-go" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const blank = { name: "", phone: "", email: "", vehicle: "", service: "", date: "", notes: "", website: "" };
  const [form, setForm] = useState(blank);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const pick = (event) => {
      const link = event.target.closest?.("a[data-service]");
      if (link) setForm((prev) => ({ ...prev, service: link.dataset.service }));
    };
    document.addEventListener("click", pick);
    return () => document.removeEventListener("click", pick);
  }, []);

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || "Something went wrong.");
      setStatus(result.demo ? "demo" : "sent");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  if (status === "sent" || status === "demo") {
    return (
      <div className="form done">
        <CheckCircle2 size={44} />
        <h3>{status === "demo" ? "This is where Hoshi gets your request." : "Request received."}</h3>
        <p>{status === "demo"
          ? "In this concept preview, requests aren't sent anywhere. On the live site they'd arrive at star@hoshimotors.net with everything needed to call you back."
          : `Thanks, ${form.name.split(" ")[0]}. We'll be in touch to confirm your time.`}</p>
        <button type="button" className="btn btn-ink" onClick={() => setStatus("idle")}>Back to the form</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label>Name *<input value={form.name} onChange={update("name")} required maxLength={160} autoComplete="name" /></label>
        <label>Phone *<input type="tel" value={form.phone} onChange={update("phone")} required maxLength={40} autoComplete="tel" /></label>
      </div>
      <div className="form-row">
        <label>Email<input type="email" value={form.email} onChange={update("email")} maxLength={254} autoComplete="email" /></label>
        <label>Vehicle<input value={form.vehicle} onChange={update("vehicle")} maxLength={160} placeholder="Year, make, model" /></label>
      </div>
      <div className="form-row">
        <label>Service<select value={form.service} onChange={update("service")}><option value="">Choose a service…</option>{SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label>Preferred day<input type="date" value={form.date} onChange={update("date")} /></label>
      </div>
      <label>What's going on?<textarea rows={4} maxLength={3000} value={form.notes} onChange={update("notes")} placeholder="Symptoms, warning lights, service due…" /></label>
      <div className="interest-honeypot" aria-hidden="true"><label>Website<input type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} /></label></div>
      {message && <p className="form-error" role="alert">{message}</p>}
      <button type="submit" className="btn btn-shu full" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request appointment"} <ArrowUpRight size={18} /></button>
      <p className="form-note">We'll confirm by phone or email. Need it sooner? Call <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>.</p>
    </form>
  );
}

function Book() {
  return (
    <section className="section book" id="book">
      <div className="wrap book-inner">
        <div className="book-copy">
          <span className="eyebrow">Request an appointment</span>
          <h2>Tell us about your car. <em>We'll take it from there.</em></h2>
          <p>Send a request and we'll confirm a drop-off time. You'll get an estimate before any work starts.</p>
          <div className="book-contact">
            <a href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL}</a>
          </div>
          <div className="hours-card">
            <Seal className="seal-sm">時</Seal>
            {HOURS.map(([d, h]) => <div key={d}><span>{d}</span><b>{h}</b></div>)}
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

function Visit({ rating }) {
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`;
  return (
    <section className="section visit" id="visit">
      <div className="wrap visit-inner">
        <div className="map"><iframe title={`Map to ${COMPANY}`} src={embed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="visit-copy">
          <span className="eyebrow">Visit the shop</span>
          <h2>55th Street, <em>between Pearl and Valmont.</em></h2>
          <p className="visit-address"><MapPin size={19} /><span>{ADDRESS}<br />{CITY}</span></p>
          <div className="visit-actions">
            <a className="btn btn-ink" href={directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={17} /></a>
            <a className="btn btn-line" href={rating?.googleMapsUri || GOOGLE_URL} target="_blank" rel="noopener noreferrer">
              {rating ? `★ ${rating.rating.toFixed(1)} · Google reviews` : "Find us on Google"} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Seigaiha id="foot-waves" />
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Crest size={64} />
          <div>
            <strong>Hoshi Motors</strong>
            <p>Independent Honda, Acura, Toyota and Subaru repair in Boulder.</p>
          </div>
        </div>
        <div className="footer-cols">
          <div><h4>Shop</h4>{NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}<a href="#book">Book a visit</a></div>
          <div><h4>Contact</h4><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{ADDRESS}</span><span>{CITY}</span></div>
          <div><h4>Hours</h4>{HOURS.map(([d, h]) => <span key={d}>{d}<br /><b>{h}</b></span>)}</div>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Hoshi Motors. Independent design concept, not an official company website.</span>
        <StudioCredit />
      </div>
    </footer>
  );
}

export default function App() {
  const [rating, setRating] = useState(null);

  // A rating shows only when live Google data is configured (GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID).
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/google-reviews", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (typeof d?.rating === "number" && typeof d?.userRatingCount === "number") setRating(d); })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <>
      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
      <Header />
      <main>
        <Hero rating={rating} />
        <Story />
        <Makes />
        <Plan />
        <Services />
        <Book />
        <Visit rating={rating} />
      </main>
      <Footer />
    </>
  );
}
