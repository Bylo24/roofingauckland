import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone, Shield, Clock, MapPin, Wrench, Droplets, Home, CheckCircle, Star } from "lucide-react";
import roofProfile from "@/assets/roof-profile.jpg";
import guttering from "@/assets/guttering.jpg";
import roofRepair from "@/assets/roof-repair.jpg";
import { GoogleReviews } from "@/components/GoogleReviews";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Roofing Auckland | 24/7 Emergency Roofing & Re-Roofing" },
      {
        name: "description",
        content:
          "Roofing Auckland provides 24/7 emergency roofing, leak repairs, re-roofing, guttering and spouting across all of Auckland. Call +64 9 887 9029.",
      },
      {
        property: "og:title",
        content: "Roofing Auckland | 24/7 Emergency Roofing & Re-Roofing",
      },
      {
        property: "og:description",
        content:
          "24/7 emergency roofing, leak repairs, re-roofing and guttering across Auckland. Qualified, insured, local.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PHONE = "+64 9 887 9029";
const PHONE_HREF = "tel:+6498879029";

const services = [
  {
    title: "Re-Roofing",
    description:
      "Full replacement for tile or metal roofs with modern long-run steel solutions built to last.",
    image: roofProfile,
    alt: "Close-up of a modern corrugated metal roof",
  },
  {
    title: "Guttering & Spouting",
    description:
      "Custom-fit continuous spouting and downpipe systems to protect your foundation and cladding.",
    image: guttering,
    alt: "Clean modern guttering and downpipe on a residential home",
  },
  {
    title: "Emergency Repairs",
    description:
      "Immediate leak detection and temporary tarping for storm damage protection, 24/7.",
    image: roofRepair,
    alt: "Professional roofer repairing a roof leak",
  },
];

const commonJobs = [
  "Emergency roofing",
  "Leak repairs",
  "Re-roofing",
  "Guttering & spouting",
  "Roof painting",
  "Flashing repairs",
];

const serviceAreas = [
  "Albany",
  "Bayview",
  "Beach Haven",
  "Belmont",
  "Birkdale",
  "Birkenhead",
  "Browns Bay",
  "Campbells Bay",
  "Castor Bay",
  "Devonport",
  "Forrest Hill",
  "Glenfield",
  "Greenhithe",
  "Hauraki",
  "Hillcrest",
  "Long Bay",
  "Mairangi Bay",
  "Milford",
  "Northcote",
  "Northcross",
  "Pinehill",
  "Rothesay Bay",
  "Rosedale",
  "Sunnynook",
  "Takapuna",
  "Torbay",
  "Totara Vale",
  "Unsworth Heights",
  "Wairau Valley",
  "Windsor Park",
];

function Index() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    service: "Emergency roofing",
    preferredTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/samuelhowell247@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            email: form.email,
            suburb: form.suburb,
            service: form.service,
            preferredTime: form.preferredTime,
            details: form.message,
            _subject: `New service request — ${form.service}`,
            _template: "table",
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`FormSubmit responded with ${response.status}`);
      }

      const json = (await response.json()) as { success?: boolean };
      if (json.success === false) {
        throw new Error("FormSubmit rejected the request");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        service: "Emergency roofing",
        preferredTime: "",
        message: "",
      });
    } catch (error) {
      console.error("FormSubmit error:", error);
      alert("We couldn't send your request right now. Please call +64 9 887 9029 instead.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Sticky Mobile Call CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md md:hidden">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-primary py-4 px-6 rounded-xl text-primary-foreground font-semibold shadow-xl ring-2 ring-primary/20 transition-transform active:scale-95"
          aria-label="Emergency call"
        >
          <Phone className="size-4 shrink-0" />
          Call {PHONE}
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-sans font-semibold tracking-tight text-lg uppercase">
            Roofing <span className="text-primary">Auckland</span>
          </span>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-sm font-medium text-muted-foreground">
              Qualified & Insured
            </span>
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              aria-label="Call Roofing Auckland"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full uppercase tracking-wider">
                24/7 Auckland Wide Service
              </span>
              <h1 className="font-sans text-4xl md:text-6xl font-semibold leading-tight text-balance max-w-[20ch]">
                Weatherproof your home with Auckland’s roofing specialists
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-[48ch]">
                From urgent leak repairs to full long-run metal re-roofing. We
                provide upfront pricing and dependable craftsmanship for local
                homeowners.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center bg-primary text-primary-foreground py-3 pr-5 pl-4 rounded-lg text-sm font-semibold ring-1 ring-primary transition-all hover:bg-clay-light"
              >
                <Phone className="size-4 shrink-0 mr-2" />
                Call {PHONE}
              </a>
              <a
                href="#request"
                className="inline-flex items-center bg-secondary text-secondary-foreground py-3 pr-5 pl-4 rounded-lg text-sm font-semibold ring-1 ring-border transition-all hover:bg-secondary/80"
              >
                Request Service
              </a>
            </div>

            <a
              href="#reviews"
              className="inline-flex items-center gap-3 text-sm hover:text-primary transition-colors"
            >
              <span className="flex gap-0.5 text-primary" aria-label="Five star reviews">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </span>
              <span>
                <strong className="font-semibold">Trusted by Auckland homeowners</strong>
                <span className="text-muted-foreground"> · Read our customer reviews</span>
              </span>
            </a>

            <div className="flex gap-8 border-t border-border pt-8">
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-primary mt-0.5" />
                <div>
                  <p className="text-2xl font-semibold font-sans">24/7</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Emergency response
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="size-5 text-primary mt-0.5" />
                <div>
                  <p className="text-2xl font-semibold font-sans">15yr</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Workmanship warranty
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Request Form */}
          <div
            id="request"
            className="bg-card p-6 rounded-2xl ring-1 ring-border shadow-sm scroll-mt-24"
          >
            <h2 className="font-sans text-xl font-semibold mb-1">
              Quick Request
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Leave your details and we will call you back within 2 hours.
            </p>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                <CheckCircle className="size-10 text-primary" />
                <p className="font-semibold font-sans">Request received</p>
                <p className="text-sm text-muted-foreground">
                  We will call you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. James Cook"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="021 000 0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Email <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. james@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Suburb
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Takapuna"
                    value={form.suburb}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, suburb: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    What do you need?
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, service: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  >
                    <option>Emergency roofing</option>
                    <option>Leak repair</option>
                    <option>Re-roofing</option>
                    <option>Guttering & spouting</option>
                    <option>Roof painting</option>
                    <option>Other (describe below)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Best time to call <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span>
                  </label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, preferredTime: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  >
                    <option value="">Any time</option>
                    <option>Morning (8am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Evening (5pm–8pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 md:mb-1">
                    Message
                  </label>
                  <textarea
                    placeholder="e.g. Leak in lounge ceiling after heavy rain"
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full bg-background ring-1 ring-input rounded-lg px-4 py-3 md:py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 md:py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-clay-light"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </header>

      {/* Trust / Common Jobs */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-sans font-semibold mb-1">Qualified & Insured</h3>
                <p className="text-sm text-muted-foreground">
                  Licensed roofing practitioners with full public liability cover.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Droplets className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-sans font-semibold mb-1">Upfront Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  No hidden costs. Clear quotes before any work begins.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-sans font-semibold mb-1">Local Auckland</h3>
                <p className="text-sm text-muted-foreground">
                  North Shore based. We know Auckland roofs and Auckland weather.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-2xl font-semibold mb-6">Common jobs</h2>
            <div className="flex flex-wrap gap-3">
              {commonJobs.map((job) => (
                <span
                  key={job}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full text-sm font-medium ring-1 ring-border"
                >
                  <Wrench className="size-3.5 text-primary" />
                  {job}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-semibold text-balance mb-4">
              Specialist Services
            </h2>
            <p className="text-muted-foreground max-w-[48ch] text-pretty">
              From routine maintenance to complex structural repairs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card p-6 rounded-2xl ring-1 ring-border hover:shadow-md transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover rounded-xl bg-muted mb-6"
                />
                <h3 className="font-sans font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Customer feedback
              </p>
              <h2 className="font-sans text-3xl font-semibold text-balance">
                Reliable work, recommended locally
              </h2>
              <p className="mt-3 max-w-[52ch] text-muted-foreground">
                See why Auckland homeowners choose us for clear communication, tidy work, and dependable repairs.
              </p>
            </div>
            <a
              href="#request"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-clay-light"
            >
              Request a quote
            </a>
          </div>
          <div className="bg-card rounded-2xl ring-1 ring-border p-6 md:p-8">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* Service Areas Footer */}
      <footer className="py-24 bg-foreground text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <span className="font-sans font-semibold tracking-tight text-lg uppercase text-background">
                Roofing <span className="text-primary">Auckland</span>
              </span>
              <p className="text-sm max-w-[30ch]">
                Licensed roofing practitioners serving all of Auckland with 24/7
                emergency response.
              </p>
              <div className="space-y-2">
                <a
                  href={PHONE_HREF}
                  className="text-sm font-semibold text-background flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="size-4" />
                  {PHONE}
                </a>
                <p className="text-sm flex items-center gap-2">
                  <Home className="size-4" />
                  All of Auckland
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-background text-sm font-semibold uppercase tracking-widest mb-8">
                Service Areas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-xs">
                {serviceAreas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-background/10 text-[10px] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Roofing Auckland. Licensed Building
            Practitioner. Qualified & insured.
          </div>
        </div>
      </footer>

      {/* Desktop sticky call bar */}
      <div className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border py-3 px-6 items-center justify-center gap-6">
        <span className="text-sm font-medium text-muted-foreground">
          24/7 emergency roofing
        </span>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-clay-light transition-colors"
          aria-label="Call Roofing Auckland"
        >
          <Phone className="size-4" />
          Call {PHONE}
        </a>
      </div>
    </div>
  );
}
