import { Battery, CalendarCheck, Car, Clock, Cog, Disc3, Droplets, Gauge, Handshake, Mail, MapPin, Search, ShieldCheck, Star, Thermometer, Wrench, Zap } from "lucide-react";

const COMPANY = "Hoshi Motors";
const MAPS_QUERY = "Hoshi Motors, 2907 55th St Unit 1, Boulder, CO 80301";

export default {
  COMPANY,
  ABBR: "hm",
  NOUN: "shop",
  PHONE: "3034496632",
  PHONE_DISPLAY: "(303) 449-6632",
  EMAIL: "star@hoshimotors.net",
  ADDRESS: "2907 55th St, Unit 1",
  CITY: "Boulder, CO 80301",
  MAPS_QUERY,
  FOUNDED: null,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing on 2026-10-17; confirm before launch.
  FALLBACK_RATING: { rating: 4.9, userRatingCount: 305 },
  END_DATE: "2026-11-24T23:59:59-07:00",

  BRAND: { name: "Hoshi Motors", sub: "AUTOMOTIVE SERVICES · BOULDER", icon: Star },
  ANNOUNCE: "Honda · Acura · Toyota · Subaru specialists in Boulder · Mon–Fri 7:30 am – 5:00 pm",

  HOURS: [
    ["Monday – Friday", "7:30 am – 5:00 pm"],
    ["Saturday & Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 7:30 am – 5:00 pm",

  HERO: {
    eyebrow: "HONDA · ACURA · TOYOTA · SUBARU · BOULDER",
    title: ["Honest repair for the Japanese cars ", "Boulder drives."],
    text: "Hoshi Motors keeps Hondas, Acuras, Toyotas and Subarus running for the long haul. We give you a straight answer about what your car needs now and what can wait, so you can plan for repairs instead of being surprised by them.",
    cta: "Request an Appointment",
    badgeKicker: "★★★★★",
    badgeBig: "4.9",
    badgeSmall: "Google rating",
    card: [
      { icon: Clock, title: "Mon–Fri 7:30 am – 5:00 pm", text: "Closed weekends" },
      { icon: MapPin, title: "2907 55th St, Unit 1", text: "Between Pearl St and Valmont" },
      { icon: Mail, title: "star@hoshimotors.net", text: "Or call (303) 449-6632" },
    ],
  },

  STATS: (rating) => [
    [rating ? `${rating.rating.toFixed(1)} ★` : "5 ★", "Google rating"],
    [rating ? rating.userRatingCount.toLocaleString() : "300+", "Google reviews"],
    ["4", "Japanese makes"],
    ["15+ yrs", "Serving Boulder"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Everything your car needs, ", "explained plainly."],
    text: "Maintenance and repair for Honda, Acura, Toyota and Subaru, done right the first time.",
    cta: "Request this service",
    items: [
      { title: "Scheduled Maintenance", desc: "Factory-interval service to keep your warranty and your car healthy.", icon: CalendarCheck },
      { title: "Diagnostics", desc: "Check-engine lights and odd noises traced to the real cause.", icon: Search },
      { title: "Brakes", desc: "Pads, rotors, calipers and fluid service.", icon: Disc3 },
      { title: "Engine & Timing", desc: "Timing belts, head gaskets and engine repair.", icon: Cog },
      { title: "Oil & Fluids", desc: "Oil changes and coolant, transmission and brake fluid service.", icon: Droplets },
      { title: "Heating & A/C", desc: "Climate control diagnosis and repair.", icon: Thermometer },
      { title: "Electrical & Battery", desc: "Batteries, starters, alternators and wiring faults.", icon: Battery },
      { title: "Suspension & Steering", desc: "Struts, shocks, CV axles and steering components.", icon: Gauge },
    ],
  },

  FEATURE: {
    id: "makes",
    nav: "Makes",
    eyebrow: "THE MAKES WE KNOW",
    title: ["Four makes. ", "Known inside out."],
    text: "Focusing on a short list means we know each one's maintenance schedule, common failures and the fix that lasts.",
    cards: [
      { name: "Honda & Acura", icon: Car, lead: "Built to run for decades.", items: ["Timing belt and valve adjustments", "VTC and transmission service", "Factory maintenance schedules"] },
      { name: "Toyota", icon: Car, lead: "Reliable, and we keep it that way.", items: ["Scheduled maintenance", "Hybrid-friendly service", "Brakes and suspension"] },
      { name: "Subaru", icon: Car, lead: "Colorado's favorite all-wheel drive.", items: ["Head gaskets and timing", "AWD and CV service", "Winter-ready inspections"] },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["Straightforward, ", "start to finish."],
    text: "No surprises, just honest advice so you can plan ahead.",
    steps: [
      ["Request a time", "Book online, call or email. We'll confirm a drop-off slot."],
      ["Inspect and explain", "We tell you what needs attention now and what can wait."],
      ["Repair with approval", "Nothing gets done without your OK on the estimate."],
      ["Plan ahead", "You leave knowing what's coming up next for your car."],
    ],
  },

  ABOUT: {
    nav: "About",
    eyebrow: "HOSHI MEANS STAR",
    title: ["Long-term relationships, ", "not one-time repairs."],
    text: [
      "Hoshi Motors has served Boulder drivers for more than 15 years from our shop on 55th Street, between Pearl and Valmont. Our goal is to build long-term relationships with our customers, with a straightforward, honest approach that lets you plan for repairs.",
    ],
    badge: ["4.9", "Stars on Google"],
    tiles: [
      { label: "Honda", icon: Car },
      { label: "Acura", icon: Car },
      { label: "Toyota", icon: Car },
      { label: "Subaru", icon: Car },
    ],
    credentials: [
      { title: "Japanese-car specialists", desc: "Honda, Acura, Toyota and Subaru." },
      { title: "Honest estimates", desc: "What's urgent, what can wait, and why." },
      { title: "Plan-ahead advice", desc: "Know what's due before it becomes a breakdown." },
      { title: "Local and independent", desc: "A Boulder shop that knows its customers by name." },
    ],
  },

  REVIEWS: {
    title: ["Boulder drivers ", "rate us 4.9 stars."],
    text: "Read what customers say about Hoshi Motors on Google.",
    quoteSource: "",
    quotes: [],
  },

  BOOK: {
    nav: "Book Service",
    eyebrow: "REQUEST AN APPOINTMENT",
    title: ["Tell us about your car. ", "We'll take it from there."],
    text: "Send a request and we'll confirm a drop-off time and give you an estimate.",
    points: ["Open Mon–Fri 7:30 am – 5:00 pm", "Honda, Acura, Toyota and Subaru", "Estimates before any work"],
    submit: "Request Appointment",
    note: "We'll confirm by phone or email. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Scheduled Maintenance", "Diagnostics", "Brakes", "Engine & Timing", "Oil & Fluids", "Heating & A/C", "Electrical & Battery", "Suspension & Steering"] }, { name: "date", label: "Preferred day", type: "date" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Symptoms, warning lights, service due…" },
    ],
  },

  VISIT: {
    nav: "Visit",
    eyebrow: "VISIT THE SHOP",
    title: ["55th Street, ", "between Pearl and Valmont."],
    areas: "Serving Boulder and the surrounding area.",
  },

  FOOTER_BLURB: "Independent Honda, Acura, Toyota and Subaru repair in Boulder. Honest, straightforward service for 15+ years.",
  SOCIAL_LINKS: [
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
