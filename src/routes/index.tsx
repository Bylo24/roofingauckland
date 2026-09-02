import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Award,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hammer,
  Home,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Wrench,
  X,
} from "lucide-react";
import roofProfile from "@/assets/roof-profile.jpg";
import guttering from "@/assets/guttering.jpg";
import roofRepair from "@/assets/roof-repair.jpg";
import { sendContactRequest } from "@/lib/contact.functions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Roofing Auckland | Auckland's #1 Roofing Company" },
      {
        name: "description",
        content:
          "Auckland roofing specialists for repairs, re-roofing, guttering and reliable workmanship across the region.",
      },
      {
        property: "og:title",
        content: "Auckland's #1 Roofing Company - Fix Your Roof Today",
      },
      {
        property: "og:description",
        content:
          "Trusted Auckland roofing specialists for repairs, re-roofing and guttering with reliable workmanship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PHONE = "+64 9 887 9029";
const PHONE_HREF = "tel:+6498879029";
const EMAIL = "quotes@roofingauckland.co.nz";

const services = [
  {
    title: "Roof repairs & maintenance",
    description:
      "Leak detection, weather-damaged repairs and practical fixes that protect the roofline and keep the property weather-safe.",
    bullets: [
      "Stop leaks fast",
      "Upfront pricing",
      "No hidden costs",
    ],
    image: roofRepair,
    alt: "Roofer repairing an Auckland roof leak",
  },
  {
    title: "Re-roofing & replacements",
    description:
      "Complete metal and tile roof replacements with clear scopes, tidy crews and honest pricing from day one.",
    bullets: [
      "Long-life roofing systems",
      "Clean, professional install",
      "Fixed-price quotes",
    ],
    image: roofProfile,
    alt: "Modern long-run metal roofing profile",
  },
  {
    title: "Guttering & spouting",
    description:
      "Downpipes, overflow upgrades and drainage fixes that protect your roofline, cladding and foundations.",
    bullets: [
      "Better drainage",
      "Waterflow protection",
      "Property-safe repairs",
    ],
    image: guttering,
    alt: "Residential guttering and downpipe installation",
  },
];

const trustBadges = [
  { label: "100% Licensed", icon: Award },
  { label: "100% Insured", icon: Shield },
  { label: "15-Year Guarantee", icon: CheckCircle },
  { label: "24/7 Response", icon: Clock },
];

const testimonials = [
  {
    name: "Cesar Gil",
    suburb: "Auckland",
    quote:
      "Excellent roofing job! Very professional, punctual, fair price and left everything clean and tidy. The finish quality is outstanding. Highly recommended!",
  },
  {
    name: "Brayden Leslie",
    suburb: "Auckland",
    quote:
      "Excellent service and communication. Tidy workmanship! Highly recommend.",
  },
  {
    name: "Ethan Lys",
    suburb: "Auckland",
    quote:
      "Awesome job from the team. Well managed, staffed and qualified. They had awesome communication and did the job swiftly even though I needed it done in a hurry. Highly recommend!",
  },
  {
    name: "Ryan Rajapakse",
    suburb: "Auckland",
    quote:
      "Great service from start to finish. The team was professional, reliable, and did a really good job with the roofing work. Communication was easy, the work was completed to a high standard, and everything was left tidy. Would definitely recommend them to anyone needing roofing work in Auckland.",
  },
  {
    name: "Simon Collins",
    suburb: "Auckland",
    quote:
      "Really great experience with Roofing Auckland. Quoted fast and got the job done to spec in the agreed time frame. We live in Chch so it was great having a team so trustworthy to sort our rental out. Would definitely recommend.",
  },
  {
    name: "Peter Champion",
    suburb: "Auckland",
    quote:
      "Very quick and efficient service from the team at Roofing Auckland. Answered all questions I had big and small, will definitely recommend them to any friends or family needing work done!",
  },
  {
    name: "Ricky Hall",
    suburb: "Auckland",
    quote:
      "Quick response and very competitive pricing for our roof repair. They diagnosed the leak immediately and had it fixed the next day. I would recommend these guys to anyone looking for roof repairs or reroofing.",
  },
  {
    name: "Josh Oliver",
    suburb: "Auckland",
    quote:
      "Great and professional service. Good team with a great attitude and would definitely recommend.",
  },
  {
    name: "Kyle",
    suburb: "Auckland",
    quote:
      "Great service and good communication, got the job done efficiently.",
  },
];

const proofPoints = [
  "5-star customer rating",
  "10-year workmanship guarantee",
  "Auckland-wide service",
  "Clear pricing and communication",
];

const processSteps = [
  {
    title: "Request your quote online (2 minutes).",
    text: "Tell us the issue, suburb and the roof problem. It takes less than two minutes.",
  },
  {
    title: "We call you within 2 hours to confirm your appointment.",
    text: "Speak to a roofing specialist quickly and lock in a time that works for you.",
  },
  {
    title: "Get your exact, fixed-price quote. No surprises.",
    text: "We’ll inspect the roof and give you a clear, fixed-price recommendation with no surprises.",
  },
];

const serviceAreas = [
  "Albany",
  "Birkenhead",
  "Browns Bay",
  "Devonport",
  "Glenfield",
  "Henderson",
  "Manukau",
  "Mt Eden",
  "Newmarket",
  "Northcote",
  "Papakura",
  "Parnell",
  "Takapuna",
  "Westgate",
  "All Auckland suburbs",
];

type LeadFormState = {
  name: string;
  phone: string;
  suburb: string;
  service: string;
};

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

function trackConversion(
  eventName: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  const trackingWindow = window as TrackingWindow;
  trackingWindow.dataLayer?.push({ event: eventName, ...params });
  trackingWindow.gtag?.("event", eventName, params);
  trackingWindow.fbq?.("trackCustom", eventName, params);
}

function Stars({ size = "size-4" }: { size?: string }) {
  return (
    <span
      className="inline-flex gap-0.5 text-slate-900"
      aria-label="5 star rating"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${size} fill-current`} />
      ))}
    </span>
  );
}

function LeadForm({ location }: { location: "hero" | "mid" | "popup" }) {
  const [form, setForm] = useState<LeadFormState>({
    name: "",
    phone: "",
    suburb: "",
    service: "Roof repair",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await sendContactRequest({
        data: {
          name: form.name,
          phone: form.phone,
          email: "",
          suburb: form.suburb,
          service: form.service,
          preferredTime: "ASAP",
          details: `Lead source: ${location} form`,
        },
      });

      trackConversion("generate_lead", {
        form_location: location,
        value: 1,
        currency: "NZD",
      });
      setStatus("sent");
      setForm({
        name: "",
        phone: "",
        suburb: "",
        service: "Roof repair",
      });
    } catch (error) {
      console.error("Contact form failed:", error);
      alert(
        `We couldn't send your request right now. Please call ${PHONE} instead.`,
      );
      setStatus("idle");
    }
  };

  if (status === "sent") {
    return (
      <div className="alert alert-success min-h-64 flex-col items-center justify-center rounded-2xl border-0 bg-success/10 px-5 py-8 text-center shadow-sm">
        <CheckCircle className="size-11 text-success" />
        <h3 className="mt-4 text-xl font-semibold text-base-content">
          Thank you, we'll call you shortly
        </h3>
        <p className="mt-2 max-w-sm text-sm text-base-content/70">
          A roofing specialist will confirm the problem, timing and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
      aria-label="Quote request form"
    >
      <div className="form-control">
        <label htmlFor={`${location}-name`} className="label pb-1.5">
          <span className="label-text font-semibold text-base-content">Full Name</span>
        </label>
        <input
          id={`${location}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="e.g. James Cook"
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({ ...current, name: event.target.value }))
          }
          className="input input-bordered h-11 w-full border-2 border-base-300 bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
        />
      </div>
      <div className="form-control">
        <label htmlFor={`${location}-phone`} className="label pb-1.5">
          <span className="label-text font-semibold text-base-content">Phone Number</span>
        </label>
        <input
          id={`${location}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          placeholder="021 000 0000"
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
          className="input input-bordered h-11 w-full border-2 border-base-300 bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="form-control">
          <label htmlFor={`${location}-suburb`} className="label pb-1.5">
            <span className="label-text font-semibold text-base-content">Suburb</span>
          </label>
          <input
            id={`${location}-suburb`}
            name="suburb"
            type="text"
            autoComplete="address-level2"
            required
            placeholder="Albany"
            value={form.suburb}
            onChange={(event) =>
              setForm((current) => ({ ...current, suburb: event.target.value }))
            }
            className="input input-bordered h-11 w-full border-2 border-base-300 bg-base-100 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
          />
        </div>
        <div className="form-control">
          <label htmlFor={`${location}-service`} className="label pb-1.5">
            <span className="label-text font-semibold text-base-content">Service Needed</span>
          </label>
          <select
            id={`${location}-service`}
            name="service"
            required
            value={form.service}
            onChange={(event) =>
              setForm((current) => ({ ...current, service: event.target.value }))
            }
            className="select select-bordered h-11 w-full border-2 border-base-300 bg-base-100 text-base-content focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
          >
            <option value="Roof repair">Roof repair</option>
            <option value="Re-roofing">Re-roofing</option>
            <option value="Leak detection">Leak detection</option>
            <option value="Guttering">Guttering</option>
            <option value="Storm damage">Storm damage</option>
            <option value="General roof inspection">General roof inspection</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-error btn-block h-12 min-h-12 rounded-xl text-base font-bold text-white"
      >
        {status === "sending" ? "Sending..." : "Send My Free Quote"}
      </button>
      <p className="text-center text-xs font-semibold text-base-content/70">
        Response within 2 hours
      </p>
      <p className="flex items-center justify-center gap-2 text-center text-xs text-base-content/70">
        <Shield className="size-3.5" />
        We'll never share your details.
      </p>
    </form>
  );
}

function ReviewWidget() {
  return (
    <a
      href="#reviews"
      className="badge badge-md h-auto gap-2.5 rounded-full border border-base-300 bg-base-100 px-3 py-1.5 shadow-sm"
      aria-label="Read our 21 Google reviews"
    >
      <Stars />
      <span className="text-sm font-semibold text-base-content">5.0/5 average</span>
      <span className="text-sm text-base-content/70">21 reviews</span>
    </a>
  );
}

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="card bg-base-100 p-4 shadow-sm ring-1 ring-base-300 sm:p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <Stars />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() =>
              setActive(
                (index) =>
                  (index - 1 + testimonials.length) % testimonials.length,
              )
            }
            className="btn btn-sm btn-circle btn-ghost border border-base-300 bg-base-100 text-base-content"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setActive((index) => (index + 1) % testimonials.length)
            }
            className="btn btn-sm btn-circle btn-ghost border border-base-300 bg-base-100 text-base-content"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        key={current.name}
        className="mt-5 animate-[fadeIn_0.3s_ease-out]"
        aria-live="polite"
      >
        <blockquote className="text-lg font-medium leading-relaxed text-base-content sm:text-xl">
          “{current.quote}”
        </blockquote>
        <div className="mt-6 border-t border-base-300 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-base-content/70 sm:text-sm">
            {current.name}
          </p>
          <p className="mt-1 text-sm text-base-content/60">{current.suburb} homeowner</p>
        </div>
      </div>

      <div className="mt-6 flex gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${
              active === index ? "w-8 bg-neutral" : "w-2.5 bg-base-300"
            }`}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      name: "Roofing Auckland",
      telephone: PHONE,
      email: EMAIL,
      areaServed: "Auckland, New Zealand",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
      },
      openingHours: "Mo-Su 00:00-23:59",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "200",
      },
      review: testimonials.map((testimonial) => ({
        "@type": "Review",
        author: { "@type": "Person", name: testimonial.name },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: testimonial.quote,
      })),
    }),
    [],
  );

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-body">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.__conversionPlaceholders = {
              ga4: "Replace with Google Analytics 4 ID",
              facebookPixel: "Replace with Facebook Pixel ID",
              heatmap: "Replace with Hotjar or Crazy Egg script"
            };
          `,
        }}
      />


      <nav className="navbar sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 sm:px-6">
          <a
            href="#"
            className="shrink-0 font-sans text-[clamp(1rem,2.1vw,1.5rem)] font-black uppercase leading-none tracking-[-0.07em] text-base-content"
          >
            Roofing <span className="text-base-content/70">Auckland</span>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold tracking-[0.02em] text-base-content/70 transition hover:text-base-content"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center md:flex">
            <a
              href={PHONE_HREF}
              onClick={() =>
                trackConversion("phone_click", { location: "header" })
              }
              className="btn btn-neutral btn-sm h-11 min-h-11 rounded-xl px-4 text-sm font-bold"
            >
              <Phone className="size-4" />
              {PHONE}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="btn btn-ghost btn-square md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-base-300 bg-base-100 px-4 py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-base-content/80 hover:bg-base-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                onClick={() =>
                  trackConversion("phone_click", { location: "mobile_menu" })
                }
                className="btn btn-neutral mt-2 h-12 min-h-12 w-full rounded-xl font-bold"
              >
                <Phone className="size-4" />
                Call now
              </a>
            </div>
          </div>
        )}
      </nav>

      <header className="relative isolate overflow-hidden bg-neutral text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.squarespace-cdn.com/content/v1/60bd630a91bc094626cd3ea9/b645a081-0bf4-457c-9ee5-cc67afb32166/Residential+New+Roof+in+Black+%7C+Whangarei+%7C+Top+Cat+Roofing+%7C+Compressed.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/60 to-slate-900/35" />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-3 py-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:py-10">
          <div className="order-1 lg:order-1">
            <h1
              className="max-w-3xl text-[clamp(2rem,4vw,3.6rem)] font-black leading-[0.96] tracking-[-0.06em] text-white"
              style={{
                textShadow:
                  "0 1px 0 rgba(15, 23, 42, 0.2), 0 4px 18px rgba(15, 23, 42, 0.2)",
              }}
            >
              Roofing Auckland. Fast, Guaranteed, and Fully Insured.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              Auckland&apos;s highest-rated roofing team. We provide upfront pricing,
              a 15-year workmanship guarantee, and 24/7 emergency response.
            </p>
            <div className="mt-5 lg:hidden">
              <div className="card border border-base-200 bg-white p-4 shadow-[0_18px_32px_rgba(15,23,42,0.16)]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/60">
                  Roof assessment
                </p>
                <h2 className="mt-2 text-xl font-black text-base-content">
                  Get Your Free Quote Now
                </h2>
                <div className="mt-4">
                  <LeadForm location="hero" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {proofPoints.map((point) => (
                <span
                  key={point}
                  className="badge badge-outline badge-sm border-white/20 bg-white/5 text-[11px] text-slate-100 sm:text-xs"
                >
                  <CheckCircle className="size-3.5 text-white" />
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={PHONE_HREF}
                onClick={() =>
                  trackConversion("phone_click", { location: "hero" })
                }
                className="btn btn-outline h-12 min-h-12 w-full rounded-xl border-white/20 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white/10 sm:w-auto sm:text-base"
              >
                <Phone className="size-4" />
                Call now
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-slate-200" />
                Auckland-wide roofers
              </span>
              <span className="inline-flex items-center gap-2">
                <Home className="size-4 text-slate-200" />
                Trusted roofing specialists
              </span>
            </div>
          </div>

          <div
            id="quote"
            className="card order-2 scroll-mt-24 border border-base-200 bg-white p-4 shadow-[0_20px_40px_rgba(15,23,42,0.16)] sm:p-5 lg:order-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-base-content/60 sm:text-sm">
              Roof assessment
            </p>
            <h2 className="mt-2 text-2xl font-black text-base-content">
              Get Your Free Quote Now
            </h2>
            <p className="mt-2 text-sm text-base-content/70">
              No-obligation quote. Tell us the problem and we’ll get back to you
              fast with the next step.
            </p>
            <div className="mt-4">
              <LeadForm location="hero" />
            </div>
          </div>
        </div>
      </header>

      <section id="reviews" className="border-b border-base-300 bg-base-100 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <ReviewWidget />
            <div className="text-sm font-medium text-base-content/70">
              Rated 5.0 stars from 21 Google reviews
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex justify-center">
            <a
              href="#quote"
              className="btn btn-primary h-12 min-h-12 rounded-xl px-7 text-sm font-bold shadow-sm"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-base-300 bg-base-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-3 sm:px-6 md:grid-cols-4">
          {trustBadges.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100 px-2 py-2 text-center"
            >
              <Icon className="size-4 shrink-0 text-base-content/80" />
              <span className="text-[10.5px] font-bold text-base-content sm:text-xs">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="border-b border-base-300 bg-base-100 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <ReviewWidget />
              <h2 className="mt-3 text-xl font-bold text-base-content sm:text-2xl">
                Proven track record.
              </h2>
              <p className="mt-2 text-sm leading-6 text-base-content/70 sm:text-base">
                Homeowners come to us for responsive communication, tidy workmanship and the kind of service that leads to repeat work and referrals.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <main>
        <section id="services" className="bg-base-100 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/70">
                Roofing services
              </p>
              <h2 className="mt-3 text-2xl font-bold text-base-content sm:text-3xl">
                Fix the problem before it gets worse.
              </h2>
              <p className="mt-4 text-base text-base-content/70 sm:text-lg">
                Whether you need a quick leak repair or a full roof replacement,
                we keep the process simple: inspect, advise, repair.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card overflow-hidden bg-base-100 shadow-sm ring-1 ring-base-300 transition hover:shadow-md"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-base-content sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-base-content/70">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-base-content/80">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-4 inline-flex font-bold text-base-content hover:text-base-content/70"
                    >
                      Get pricing
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-base-200 py-10 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-base-content/70">
                How it works
              </p>
              <h2 className="mt-3 text-xl font-bold text-base-content sm:text-2xl">
                Straightforward process. Clear communication.
              </h2>
              <p className="mt-3 text-sm text-base-content/70 sm:text-base">
                We make it easy to move from concern to completion without the
                usual roofing confusion.
              </p>
              <div className="mt-5 space-y-3">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="card flex gap-4 bg-base-100 p-4 shadow-sm"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-base-200 font-bold text-base-content">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-base-content">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-base-content/70">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-neutral p-5 text-white shadow-xl sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Why homeowners choose us
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-slate-300" />
                  Reliable response for leaks, storm damage and roof repairs.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-slate-300" />
                  No vague pricing or surprise extras after the work begins.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-slate-300" />
                  Clean, respectful crews who respect your property and schedule.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-slate-300" />
                  Workmanship backed by a 10-year guarantee.
                </li>
              </ul>
              <a
                href="#quote"
                className="btn btn-primary mt-5 h-11 min-h-11 rounded-xl font-bold"
              >
                Request a quote
              </a>
            </div>
          </div>
        </section>

        <section className="bg-neutral py-8 text-white sm:py-10">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Fast response. Quality workmanship.
              </p>
              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Stop worrying about leaks. Get your fixed-price quote today.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
                We help Auckland homeowners understand the issue, plan the work
                and move forward with a roof that’s been properly assessed.
              </p>
            </div>
            <div className="card bg-base-100 p-3 text-base-content shadow-xl sm:p-4">
              <LeadForm location="mid" />
            </div>
          </div>
        </section>

        <section className="bg-base-100 py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="card bg-base-200 p-3 shadow-sm sm:p-4">
                <Wrench className="size-6 text-base-content" />
                <h3 className="mt-3 text-base font-bold">Fast call-backs</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/70">
                  We respond quickly, confirm the issue and help you decide the
                  next best step without delays.
                </p>
              </div>
              <div className="card bg-base-200 p-3 shadow-sm sm:p-4">
                <Mail className="size-6 text-base-content" />
                <h3 className="mt-3 text-base font-bold">Clear updates</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/70">
                  You’ll know what’s happening, what’s being repaired and when
                  the team will arrive.
                </p>
              </div>
              <div className="card bg-base-200 p-3 shadow-sm sm:p-4">
                <MessageCircle className="size-6 text-base-content" />
                <h3 className="mt-3 text-base font-bold">Friendly service</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/70">
                  We keep the process straightforward and respectful from first
                  call to final inspection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-base-300 bg-base-100 p-2 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={PHONE_HREF}
            className="btn btn-neutral h-12 min-h-12 rounded-xl font-bold"
          >
            <Phone className="size-4" />
            Click to Call
          </a>
          <a
            href="#quote"
            className="btn btn-error h-12 min-h-12 rounded-xl font-bold text-white"
          >
            Get Free Quote
          </a>
        </div>
      </div>

      <footer
        id="contact"
        className="bg-neutral pb-28 pt-16 text-slate-300 md:pb-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-sans text-xl font-bold uppercase tracking-tight text-white">
                Roofing <span className="text-slate-300">Auckland</span>
              </p>
              <p className="mt-4 max-w-md text-sm leading-6">
                Licensed, insured Auckland roofers helping homeowners with roof
                repairs, re-roofing, guttering and preventative maintenance.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <a
                  href={PHONE_HREF}
                  onClick={() =>
                    trackConversion("phone_click", { location: "footer" })
                  }
                  className="inline-flex items-center gap-2 font-bold text-white hover:text-slate-300"
                >
                  <Phone className="size-4" />
                  {PHONE}
                </a>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4" />
                  Open 24/7 for emergency roofing
                </span>
                <span className="inline-flex items-center gap-2">
                  <Home className="size-4" />
                  Auckland wide service
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Service areas
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {trustBadges.map(({ label }) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-white"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Roofing Auckland. Built for fast
            response, clear communication and dependable service.
          </div>
        </div>
      </footer>

      <a
        href={PHONE_HREF}
        onClick={() =>
          trackConversion("phone_click", { location: "sticky_mobile" })
        }
        className="fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-neutral px-5 text-base font-bold text-white shadow-2xl shadow-neutral/20 md:hidden"
      >
        <Phone className="size-5" />
        Call now
      </a>

      <div className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-base-300 bg-base-100/95 px-6 py-3 backdrop-blur md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-5">
          <span className="text-sm font-semibold text-base-content/70">
            Auckland roofing specialists
          </span>
          <a
            href="#quote"
            className="btn btn-neutral btn-sm rounded-lg px-5 py-2.5 text-sm font-bold"
          >
            Request a quote
          </a>
          <a
            href={PHONE_HREF}
            onClick={() =>
              trackConversion("phone_click", { location: "sticky_desktop" })
            }
            className="btn btn-outline btn-sm rounded-lg px-5 py-2.5 text-sm font-bold"
          >
            <Phone className="size-4" />
            {PHONE}
          </a>
        </div>
      </div>

    </div>
  );
}
