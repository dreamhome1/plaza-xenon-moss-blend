import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { BrandLockup } from "@/components/mark";
import {
  ADDRESS_LINES,
  ADDRESS_TEXT,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
  amenities,
  photos,
  stays,
  suites,
  type SuiteId,
} from "@/lib/content";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#suites", label: "Suites" },
  { href: "#gallery", label: "Gallery" },
  { href: "#amenities", label: "Amenities" },
  { href: "#visit", label: "Location" },
];

type FormState = {
  name: string;
  phone: string;
  suite: SuiteId | "Not sure";
  checkIn: string;
  checkOut: string;
  guests: string;
  note: string;
};

const emptyForm = (suite: SuiteId | "Not sure"): FormState => ({
  name: "",
  phone: "",
  suite,
  checkIn: "",
  checkOut: "",
  guests: "2",
  note: "",
});

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [suite, setSuite] = useState<SuiteId>("2 Bedroom");
  const [form, setForm] = useState<FormState>(() => emptyForm("2 Bedroom"));
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [photo, setPhoto] = useState<number | null>(null);
  const [today, setToday] = useState("");
  const formId = useId();

  useEffect(() => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    setToday(`${now.getFullYear()}-${month}-${day}`);
  }, []);

  useEffect(() => {
    if (photo === null && !menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPhoto(null);
        setMenuOpen(false);
      }
      if (photo === null) return;
      if (event.key === "ArrowRight") setPhoto((index) => (index === null ? index : (index + 1) % photos.length));
      if (event.key === "ArrowLeft") {
        setPhoto((index) => (index === null ? index : (index - 1 + photos.length) % photos.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [photo, menuOpen]);

  function chooseSuite(next: SuiteId) {
    setSuite(next);
    setForm((current) => ({ ...current, suite: next }));
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Add your name.";
    if (form.phone.trim().length < 7) next.phone = "Add a phone number we can reach.";
    if (!form.checkIn) next.checkIn = "Choose a check-in date.";
    if (!form.checkOut) next.checkOut = "Choose a check-out date.";
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      next.checkOut = "Check-out should be after check-in.";
    }
    const guests = Number(form.guests);
    if (!Number.isFinite(guests) || guests < 1) next.guests = "Add at least one guest.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "Hello BDREAM HOME,",
      `I would like to enquire about the ${form.suite} apartment.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      form.note.trim() ? `Note: ${form.note.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(ADDRESS_TEXT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" aria-label="BDREAM HOME, home">
            <BrandLockup />
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-muted hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#enquire"
              className="hidden h-11 items-center rounded-md bg-forest px-4 text-sm font-medium text-on-forest hover:bg-forest-2 md:inline-flex"
            >
              Enquire
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-md text-ink md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div id="mobile-menu" className="border-t border-line bg-cream px-5 py-4 md:hidden">
            <nav className="grid gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex h-11 items-center text-base font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#enquire"
                className="mt-2 flex h-11 items-center justify-center rounded-md bg-forest text-sm font-medium text-on-forest"
                onClick={() => setMenuOpen(false)}
              >
                Enquire
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main id="content">
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="text-xs font-medium tracking-brand text-gold">SERVICE APARTMENT · LAGOS</p>
            <h1 className="mt-4 font-display text-hero leading-none text-ink">More than a stay, a home.</h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Private 1- and 2-bedroom shortlets in Igando. Power, security, and a quiet compound — for a night, a week, or a month.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquire"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2"
              >
                Check dates
                <ArrowRight className="size-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex h-12 items-center gap-2 rounded-md bg-cream px-5 text-sm font-medium text-ink shadow-card hover:shadow-card-hover"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {[
                ["2", "Apartment sizes"],
                ["24/7", "Power & security"],
                ["3", "Ways to stay"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl leading-none">{value}</dt>
                  <dd className="mt-2 text-sm text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="md:col-span-6">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-xl shadow-card"
              onClick={() => setPhoto(0)}
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="aspect-lounge w-full object-cover"
              />
            </button>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>{photos[0].caption}</span>
              <span>Igando, Lagos</span>
            </figcaption>
          </figure>
        </section>

        <section className="bg-forest text-on-forest">
          <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
            <p className="font-display text-section italic leading-tight">“Your comfort is our standard.”</p>
            <p className="mt-4 text-sm tracking-brand text-on-forest/80">BDREAM HOME · IGANDO</p>
          </div>
        </section>

        <section id="suites" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-brand text-gold">THE APARTMENTS</p>
            <h2 className="mt-3 font-display text-section leading-none">Two suites. Same house.</h2>
            <p className="mt-4 text-muted">
              Rates are confirmed on WhatsApp for your exact dates, before you travel. Nothing is charged from this page.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {suites.map((item) => {
              const active = suite === item.id;
              return (
                <article
                  key={item.id}
                  className={cn(
                    "lift flex flex-col rounded-xl bg-cream p-6 shadow-card md:p-8",
                    active && "shadow-card-hover",
                  )}
                >
                  <p className="text-sm font-medium text-gold">{item.fit}</p>
                  <h3 className="mt-3 font-display text-4xl leading-none">{item.name}</h3>
                  <p className="mt-3 text-muted">{item.summary}</p>
                  <ul className="mt-6 grid gap-2 text-sm">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check className="size-4 shrink-0 text-forest" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => chooseSuite(item.id)}
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2"
                  >
                    Request this suite
                    <ArrowRight className="size-4" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section id="gallery" className="scroll-mt-20 bg-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium tracking-brand text-gold">THE HOUSE</p>
                <h2 className="mt-3 font-display text-section leading-none">A look inside</h2>
              </div>
              <p className="hidden max-w-xs text-sm text-muted md:block">
                Lounge, bedroom, the compound at night, and a room set for a birthday.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {photos.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className="group overflow-hidden rounded-lg text-left shadow-card"
                  onClick={() => setPhoto(index)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={cn("w-full object-cover", item.frame)}
                  />
                  <span className="flex items-center justify-between bg-cream px-4 py-3 text-sm">
                    {item.caption}
                    <span className="text-faint">View</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="text-xs font-medium tracking-brand text-gold">INCLUDED</p>
          <h2 className="mt-3 max-w-lg font-display text-section leading-none">What is already in the apartment</h2>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {amenities.map((item) => (
              <li key={item.title} className="rounded-lg bg-cream p-4 shadow-card">
                <item.icon className="size-5 text-forest" aria-hidden="true" />
                <p className="mt-4 font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
            {stays.map((item) => (
              <div key={item.title}>
                <p className="font-display text-3xl leading-none">{item.title}</p>
                <p className="mt-3 max-w-xs text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="scroll-mt-20 mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-xs font-medium tracking-brand text-gold">FIND THE HOUSE</p>
            <h2 className="mt-3 font-display text-section leading-none">Igando, One Day Avenue</h2>
            <address className="mt-6 text-lg not-italic leading-relaxed">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS_TEXT)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2"
              >
                <MapPin className="size-4" />
                Open in Maps
              </a>
              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex h-12 items-center rounded-md bg-cream px-5 text-sm font-medium shadow-card"
              >
                {copied ? "Address copied" : "Copy address"}
              </button>
            </div>
            <p className="mt-8 max-w-md text-sm text-muted">
              Ask the driver for One Day Avenue Bus Stop on Igando Isuti Road. The house is 3b Kabiru Apena.
            </p>
          </div>
          <iframe
            title="Map of BDREAM HOME, One Day Avenue, Igando"
            src={`https://maps.google.com/maps?q=${encodeURIComponent("One Day Avenue Igando Lagos")}&z=15&output=embed`}
            className="h-80 w-full rounded-xl border-0 shadow-card"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section id="enquire" className="scroll-mt-20 bg-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-20">
            <div className="md:col-span-5">
              <p className="text-xs font-medium tracking-brand text-gold">BOOK A STAY</p>
              <h2 className="mt-3 font-display text-section leading-none">Send your dates</h2>
              <p className="mt-4 text-muted">
                WhatsApp opens with your message to BDREAM HOME. We reply with availability and the rate for those nights.
              </p>
              <ol className="mt-8 grid gap-4 text-sm">
                {[
                  "Tell us the suite, dates, and how many guests.",
                  "We confirm the apartment is free and send the rate.",
                  "You arrive at One Day Avenue Bus Stop.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-display text-2xl leading-none text-gold">{index + 1}</span>
                    <span className="pt-1 text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted">
                Hosted by Adeluola Oladipupo, CEO. RN 7276960.
              </p>
            </div>
            <form onSubmit={submit} className="rounded-xl bg-paper p-5 shadow-card md:col-span-7 md:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id={`${formId}-name`} label="Full name" error={errors.name}>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field id={`${formId}-phone`} label="Phone" error={errors.phone}>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field id={`${formId}-suite`} label="Apartment" error={errors.suite} className="sm:col-span-2">
                  <select
                    id={`${formId}-suite`}
                    name="suite"
                    value={form.suite}
                    onChange={(event) => {
                      const value = event.target.value as FormState["suite"];
                      update("suite", value);
                      if (value === "1 Bedroom" || value === "2 Bedroom") setSuite(value);
                    }}
                    className={inputClass}
                  >
                    {suites.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} apartment
                      </option>
                    ))}
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </Field>
                <Field id={`${formId}-in`} label="Check-in" error={errors.checkIn}>
                  <input
                    id={`${formId}-in`}
                    name="checkIn"
                    type="date"
                    min={today || undefined}
                    value={form.checkIn}
                    onChange={(event) => update("checkIn", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field id={`${formId}-out`} label="Check-out" error={errors.checkOut}>
                  <input
                    id={`${formId}-out`}
                    name="checkOut"
                    type="date"
                    min={form.checkIn || today || undefined}
                    value={form.checkOut}
                    onChange={(event) => update("checkOut", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field id={`${formId}-guests`} label="Guests" error={errors.guests}>
                  <input
                    id={`${formId}-guests`}
                    name="guests"
                    type="number"
                    min={1}
                    max={8}
                    inputMode="numeric"
                    value={form.guests}
                    onChange={(event) => update("guests", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field id={`${formId}-note`} label="Note" error={errors.note} className="sm:col-span-2">
                  <textarea
                    id={`${formId}-note`}
                    name="note"
                    rows={3}
                    value={form.note}
                    onChange={(event) => update("note", event.target.value)}
                    placeholder="Arrival time, a celebration, or anything we should know"
                    className={cn(inputClass, "h-auto resize-y py-3")}
                  />
                </Field>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2"
                >
                  <MessageCircle className="size-4" />
                  Send on WhatsApp
                </button>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex h-12 items-center text-sm font-medium text-forest">
                  Or call {PHONE_DISPLAY}
                </a>
              </div>
              {sent ? (
                <p className="mt-4 text-sm text-forest" role="status">
                  WhatsApp should open with your enquiry. If it does not, call {PHONE_DISPLAY}.
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-line pb-24 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandLockup />
            <p className="mt-4 max-w-sm text-sm text-muted">Comfort. Security. A home away from home.</p>
          </div>
          <div className="text-sm text-muted">
            <p>{PHONE_DISPLAY}</p>
            <p className="mt-1">RN 7276960</p>
            <p className="mt-1">Igando, Lagos</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper p-3 md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cream text-sm font-medium shadow-card"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href="#enquire"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest text-sm font-medium text-on-forest"
        >
          <MessageCircle className="size-4" />
          Enquire
        </a>
      </div>

      {photo !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label={photos[photo].caption}>
          <button type="button" className="absolute top-4 right-4 grid size-11 place-items-center rounded-md bg-cream text-ink" onClick={() => setPhoto(null)}>
            <X className="size-5" />
            <span className="sr-only">Close photo</span>
          </button>
          <button
            type="button"
            className="absolute left-3 grid size-11 place-items-center rounded-md bg-cream text-ink md:left-6"
            onClick={() => setPhoto((index) => (index === null ? index : (index - 1 + photos.length) % photos.length))}
          >
            <span className="sr-only">Previous photo</span>
            <ChevronLeft className="size-5" />
          </button>
          <figure className="max-h-full max-w-4xl">
            <img src={photos[photo].src} alt={photos[photo].alt} className="max-h-[80vh] w-auto max-w-full object-contain" />
            <figcaption className="mt-3 text-center text-sm text-on-forest">{photos[photo].caption}</figcaption>
          </figure>
          <button
            type="button"
            className="absolute right-3 grid size-11 place-items-center rounded-md bg-cream text-ink md:right-6"
            onClick={() => setPhoto((index) => (index === null ? index : (index + 1) % photos.length))}
          >
            <span className="sr-only">Next photo</span>
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

const inputClass =
  "h-12 w-full rounded-md border border-line bg-cream px-3 text-base text-ink outline-none focus:border-forest";

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className={cn("grid gap-1.5 text-sm font-medium", className)}>
      {label}
      {children}
      {error ? <span className="font-normal text-ink">{error}</span> : null}
    </label>
  );
}
