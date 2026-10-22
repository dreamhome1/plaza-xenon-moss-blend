import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowRight, S as Bath, _ as CircleParking, a as Tv, b as Check, c as Speaker, d as Phone, f as MessageCircle, g as DoorOpen, h as Droplets, i as UtensilsCrossed, l as Sparkles, m as MapPin, n as X, p as Menu, r as Wifi, s as Trees, t as Zap, u as ShieldCheck, v as ChevronRight, x as CalendarRange, y as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ce8U_l7z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Monogram({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7 18.2 20 8l13 10.2V33H7V18.2Z",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16.5 33V23h7v10",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M17.4 15.6h2.2c1.35 0 2.15.62 2.15 1.52 0 .72-.45 1.25-1.18 1.42.9.18 1.52.8 1.52 1.62 0 1.08-.9 1.8-2.45 1.8H17.4v-6.36Zm1.35 1.08v1.62h.82c.62 0 .98-.26.98-.8s-.36-.82-.98-.82h-.82Zm0 2.7v1.8h1c.72 0 1.08-.28 1.08-.9s-.36-.9-1.08-.9h-1Z",
				fill: "currentColor"
			})
		]
	});
}
function BrandLockup({ tone = "ink", className }) {
	const cream = tone === "cream";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-11 shrink-0 place-items-center rounded-sm", cream ? "bg-on-forest text-gold-2" : "bg-forest text-gold-2"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monogram, { className: "size-7" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block font-sans text-sm font-semibold tracking-brand", cream ? "text-on-forest" : "text-ink"),
				children: "BDREAM"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 block font-sans text-xs font-medium tracking-brand", cream ? "text-gold-2" : "text-gold"),
				children: "HOME"
			})]
		})]
	});
}
var PHONE_DISPLAY = "0814 083 3504";
var PHONE_TEL = "+2348140833504";
var WHATSAPP = "2348140833504";
var ADDRESS_LINES = [
	"3b Kabiru Apena, One Day Avenue",
	"Igando Isuti Road, One Day Avenue Bus Stop",
	"Igando, Lagos State"
];
var ADDRESS_TEXT = ADDRESS_LINES.join(", ");
var suites = [{
	id: "1 Bedroom",
	name: "1 Bedroom",
	fit: "One guest or a couple",
	summary: "A private en-suite apartment with its own lounge and kitchen.",
	points: [
		"En-suite bedroom",
		"Lounge and kitchen",
		"Netflix and a speaker"
	]
}, {
	id: "2 Bedroom",
	name: "2 Bedroom",
	fit: "Family or friends",
	summary: "Two en-suite rooms sharing the lounge, kitchen, and compound.",
	points: [
		"Two en-suite bedrooms",
		"Shared lounge and kitchen",
		"Room for a longer stay"
	]
}];
var amenities = [
	{
		icon: Zap,
		title: "24/7 power",
		detail: "Light stays on"
	},
	{
		icon: ShieldCheck,
		title: "Security / CCTV",
		detail: "Compound is watched"
	},
	{
		icon: Droplets,
		title: "Good water",
		detail: "Running water in the house"
	},
	{
		icon: Tv,
		title: "Netflix",
		detail: "Ready in the apartment"
	},
	{
		icon: Speaker,
		title: "Speaker",
		detail: "In the apartment"
	},
	{
		icon: UtensilsCrossed,
		title: "Kitchen & gas",
		detail: "Cook if you want to"
	},
	{
		icon: Wifi,
		title: "5G Wi-Fi",
		detail: "For work and streaming"
	},
	{
		icon: Bath,
		title: "En-suite rooms",
		detail: "Private bath in each room"
	},
	{
		icon: Sparkles,
		title: "Housekeeper",
		detail: "The place is looked after"
	},
	{
		icon: CircleParking,
		title: "Dedicated parking",
		detail: "A space in the compound"
	},
	{
		icon: DoorOpen,
		title: "Balcony",
		detail: "A little air of your own"
	},
	{
		icon: Trees,
		title: "Private sit-out",
		detail: "Quiet space in the compound"
	}
];
var stays = [
	{
		icon: CalendarRange,
		title: "Daily",
		detail: "A night, a weekend, or a short stop in Lagos."
	},
	{
		icon: CalendarRange,
		title: "Weekly",
		detail: "Work trips, family visits, and a few quiet days."
	},
	{
		icon: CalendarRange,
		title: "Monthly",
		detail: "A longer base in Igando, with housekeeping included."
	}
];
var photos = [
	{
		src: "/photos/lounge-room.jpg",
		alt: "Lounge at BDREAM HOME with marble floor, hanging chair, and blue ceiling light",
		caption: "The lounge",
		frame: "aspect-lounge"
	},
	{
		src: "/photos/bedroom.jpg",
		alt: "Bedroom with a pink upholstered headboard, dark curtains, and striped bedding",
		caption: "A bedroom",
		frame: "aspect-portrait"
	},
	{
		src: "/photos/compound.jpg",
		alt: "Night view of the BDREAM HOME compound, sit-out, and the house lit in green",
		caption: "The compound",
		frame: "aspect-lounge"
	},
	{
		src: "/photos/celebration.jpg",
		alt: "Apartment dressed with balloons and a happy birthday wall for a celebration",
		caption: "Dressed for a celebration",
		frame: "aspect-portrait"
	}
];
var NAV = [
	{
		href: "#suites",
		label: "Suites"
	},
	{
		href: "#gallery",
		label: "Gallery"
	},
	{
		href: "#amenities",
		label: "Amenities"
	},
	{
		href: "#visit",
		label: "Location"
	}
];
var emptyForm = (suite) => ({
	name: "",
	phone: "",
	suite,
	checkIn: "",
	checkOut: "",
	guests: "2",
	note: ""
});
function HomePage() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [suite, setSuite] = (0, import_react.useState)("2 Bedroom");
	const [form, setForm] = (0, import_react.useState)(() => emptyForm("2 Bedroom"));
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [photo, setPhoto] = (0, import_react.useState)(null);
	const [today, setToday] = (0, import_react.useState)("");
	const formId = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		const month = String(now.getMonth() + 1).padStart(2, "0");
		const day = String(now.getDate()).padStart(2, "0");
		setToday(`${now.getFullYear()}-${month}-${day}`);
	}, []);
	(0, import_react.useEffect)(() => {
		if (photo === null && !menuOpen) return;
		const onKey = (event) => {
			if (event.key === "Escape") {
				setPhoto(null);
				setMenuOpen(false);
			}
			if (photo === null) return;
			if (event.key === "ArrowRight") setPhoto((index) => index === null ? index : (index + 1) % photos.length);
			if (event.key === "ArrowLeft") setPhoto((index) => index === null ? index : (index - 1 + photos.length) % photos.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [photo, menuOpen]);
	function chooseSuite(next) {
		setSuite(next);
		setForm((current) => ({
			...current,
			suite: next
		}));
		document.getElementById("enquire")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	function update(key, value) {
		setForm((current) => ({
			...current,
			[key]: value
		}));
		setErrors((current) => ({
			...current,
			[key]: void 0
		}));
		setSent(false);
	}
	function submit(event) {
		event.preventDefault();
		const next = {};
		if (form.name.trim().length < 2) next.name = "Add your name.";
		if (form.phone.trim().length < 7) next.phone = "Add a phone number we can reach.";
		if (!form.checkIn) next.checkIn = "Choose a check-in date.";
		if (!form.checkOut) next.checkOut = "Choose a check-out date.";
		if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) next.checkOut = "Check-out should be after check-in.";
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
			form.note.trim() ? `Note: ${form.note.trim()}` : ""
		].filter(Boolean).join("\n");
		window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
		setSent(true);
	}
	async function copyAddress() {
		try {
			await navigator.clipboard.writeText(ADDRESS_TEXT);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							"aria-label": "BDREAM HOME, home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							"aria-label": "Primary",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "text-sm font-medium text-muted hover:text-ink",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#enquire",
								className: "hidden h-11 items-center rounded-md bg-forest px-4 text-sm font-medium text-on-forest hover:bg-forest-2 md:inline-flex",
								children: "Enquire"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "grid size-11 place-items-center rounded-md text-ink md:hidden",
								"aria-expanded": menuOpen,
								"aria-controls": "mobile-menu",
								onClick: () => setMenuOpen((open) => !open),
								children: [menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Menu"
								})]
							})]
						})
					]
				}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "mobile-menu",
					className: "border-t border-line bg-cream px-5 py-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "grid gap-1",
						"aria-label": "Mobile",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "flex h-11 items-center text-base font-medium",
							onClick: () => setMenuOpen(false),
							children: item.label
						}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#enquire",
							className: "mt-2 flex h-11 items-center justify-center rounded-md bg-forest text-sm font-medium text-on-forest",
							onClick: () => setMenuOpen(false),
							children: "Enquire"
						})]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "top",
						className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-12 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-brand text-gold",
									children: "SERVICE APARTMENT · LAGOS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-hero leading-none text-ink",
									children: "More than a stay, a home."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-lg text-muted",
									children: "Private 1- and 2-bedroom shortlets in Igando. Power, security, and a quiet compound — for a night, a week, or a month."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#enquire",
										className: "inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2",
										children: ["Check dates", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${PHONE_TEL}`,
										className: "inline-flex h-12 items-center gap-2 rounded-md bg-cream px-5 text-sm font-medium text-ink shadow-card hover:shadow-card-hover",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), PHONE_DISPLAY]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6",
									children: [
										["2", "Apartment sizes"],
										["24/7", "Power & security"],
										["3", "Ways to stay"]
									].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-3xl leading-none",
										children: value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-2 text-sm text-muted",
										children: label
									})] }, label))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "md:col-span-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "block w-full overflow-hidden rounded-xl shadow-card",
								onClick: () => setPhoto(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photos[0].src,
									alt: photos[0].alt,
									className: "aspect-lounge w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-3 flex items-center justify-between text-sm text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: photos[0].caption }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Igando, Lagos" })]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-forest text-on-forest",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-14 md:py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-section italic leading-tight",
								children: "“Your comfort is our standard.”"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm tracking-brand text-on-forest/80",
								children: "BDREAM HOME · IGANDO"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "suites",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-brand text-gold",
									children: "THE APARTMENTS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-section leading-none",
									children: "Two suites. Same house."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted",
									children: "Rates are confirmed on WhatsApp for your exact dates, before you travel. Nothing is charged from this page."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-2",
							children: suites.map((item) => {
								const active = suite === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: cn("lift flex flex-col rounded-xl bg-cream p-6 shadow-card md:p-8", active && "shadow-card-hover"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-gold",
											children: item.fit
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-4xl leading-none",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-muted",
											children: item.summary
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 grid gap-2 text-sm",
											children: item.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-forest" }), point]
											}, point))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => chooseSuite(item.id),
											className: "mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2",
											children: ["Request this suite", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									]
								}, item.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "gallery",
						className: "scroll-mt-20 bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 md:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-brand text-gold",
									children: "THE HOUSE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-section leading-none",
									children: "A look inside"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden max-w-xs text-sm text-muted md:block",
									children: "Lounge, bedroom, the compound at night, and a room set for a birthday."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-3 sm:grid-cols-2",
								children: photos.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "group overflow-hidden rounded-lg text-left shadow-card",
									onClick: () => setPhoto(index),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.src,
										alt: item.alt,
										className: cn("w-full object-cover", item.frame)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center justify-between bg-cream px-4 py-3 text-sm",
										children: [item.caption, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-faint",
											children: "View"
										})]
									})]
								}, item.src))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "amenities",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16 md:py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-brand text-gold",
								children: "INCLUDED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-lg font-display text-section leading-none",
								children: "What is already in the apartment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
								children: amenities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-lg bg-cream p-4 shadow-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: "size-5 text-forest",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-medium",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted",
											children: item.detail
										})
									]
								}, item.title))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3",
							children: stays.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl leading-none",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xs text-muted",
								children: item.detail
							})] }, item.title))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "visit",
						className: "scroll-mt-20 mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-brand text-gold",
								children: "FIND THE HOUSE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-section leading-none",
								children: "Igando, One Day Avenue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
								className: "mt-6 text-lg not-italic leading-relaxed",
								children: ADDRESS_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: line
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS_TEXT)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), "Open in Maps"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: copyAddress,
									className: "inline-flex h-12 items-center rounded-md bg-cream px-5 text-sm font-medium shadow-card",
									children: copied ? "Address copied" : "Copy address"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-md text-sm text-muted",
								children: "Ask the driver for One Day Avenue Bus Stop on Igando Isuti Road. The house is 3b Kabiru Apena."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Map of BDREAM HOME, One Day Avenue, Igando",
							src: `https://maps.google.com/maps?q=${encodeURIComponent("One Day Avenue Igando Lagos")}&z=15&output=embed`,
							className: "h-80 w-full rounded-xl border-0 shadow-card",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "enquire",
						className: "scroll-mt-20 bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-brand text-gold",
										children: "BOOK A STAY"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-display text-section leading-none",
										children: "Send your dates"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-muted",
										children: "WhatsApp opens with your message to BDREAM HOME. We reply with availability and the rate for those nights."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
										className: "mt-8 grid gap-4 text-sm",
										children: [
											"Tell us the suite, dates, and how many guests.",
											"We confirm the apartment is free and send the rate.",
											"You arrive at One Day Avenue Bus Stop."
										].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-2xl leading-none text-gold",
												children: index + 1
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "pt-1 text-muted",
												children: step
											})]
										}, step))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 text-sm text-muted",
										children: "Hosted by Adeluola Oladipupo, CEO. RN 7276960."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: submit,
								className: "rounded-xl bg-paper p-5 shadow-card md:col-span-7 md:p-8",
								noValidate: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-name`,
												label: "Full name",
												error: errors.name,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: `${formId}-name`,
													name: "name",
													autoComplete: "name",
													value: form.name,
													onChange: (event) => update("name", event.target.value),
													className: inputClass
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-phone`,
												label: "Phone",
												error: errors.phone,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: `${formId}-phone`,
													name: "phone",
													type: "tel",
													autoComplete: "tel",
													inputMode: "tel",
													value: form.phone,
													onChange: (event) => update("phone", event.target.value),
													className: inputClass
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-suite`,
												label: "Apartment",
												error: errors.suite,
												className: "sm:col-span-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													id: `${formId}-suite`,
													name: "suite",
													value: form.suite,
													onChange: (event) => {
														const value = event.target.value;
														update("suite", value);
														if (value === "1 Bedroom" || value === "2 Bedroom") setSuite(value);
													},
													className: inputClass,
													children: [suites.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
														value: item.id,
														children: [item.name, " apartment"]
													}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Not sure",
														children: "Not sure yet"
													})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-in`,
												label: "Check-in",
												error: errors.checkIn,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: `${formId}-in`,
													name: "checkIn",
													type: "date",
													min: today || void 0,
													value: form.checkIn,
													onChange: (event) => update("checkIn", event.target.value),
													className: inputClass
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-out`,
												label: "Check-out",
												error: errors.checkOut,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: `${formId}-out`,
													name: "checkOut",
													type: "date",
													min: form.checkIn || today || void 0,
													value: form.checkOut,
													onChange: (event) => update("checkOut", event.target.value),
													className: inputClass
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-guests`,
												label: "Guests",
												error: errors.guests,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													id: `${formId}-guests`,
													name: "guests",
													type: "number",
													min: 1,
													max: 8,
													inputMode: "numeric",
													value: form.guests,
													onChange: (event) => update("guests", event.target.value),
													className: inputClass
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												id: `${formId}-note`,
												label: "Note",
												error: errors.note,
												className: "sm:col-span-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													id: `${formId}-note`,
													name: "note",
													rows: 3,
													value: form.note,
													onChange: (event) => update("note", event.target.value),
													placeholder: "Arrival time, a celebration, or anything we should know",
													className: cn(inputClass, "h-auto resize-y py-3")
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											className: "inline-flex h-12 items-center gap-2 rounded-md bg-forest px-5 text-sm font-medium text-on-forest hover:bg-forest-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Send on WhatsApp"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:${PHONE_TEL}`,
											className: "inline-flex h-12 items-center text-sm font-medium text-forest",
											children: ["Or call ", PHONE_DISPLAY]
										})]
									}),
									sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 text-sm text-forest",
										role: "status",
										children: [
											"WhatsApp should open with your enquiry. If it does not, call ",
											PHONE_DISPLAY,
											"."
										]
									}) : null
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line pb-24 md:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLockup, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted",
						children: "Comfort. Security. A home away from home."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: PHONE_DISPLAY }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "RN 7276960"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "Igando, Lagos"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper p-3 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE_TEL}`,
					className: "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cream text-sm font-medium shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Call"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#enquire",
					className: "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest text-sm font-medium text-on-forest",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), "Enquire"]
				})]
			}),
			photo !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": photos[photo].caption,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "absolute top-4 right-4 grid size-11 place-items-center rounded-md bg-cream text-ink",
						onClick: () => setPhoto(null),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Close photo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "absolute left-3 grid size-11 place-items-center rounded-md bg-cream text-ink md:left-6",
						onClick: () => setPhoto((index) => index === null ? index : (index - 1 + photos.length) % photos.length),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Previous photo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "max-h-full max-w-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photos[photo].src,
							alt: photos[photo].alt,
							className: "max-h-[80vh] w-auto max-w-full object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-3 text-center text-sm text-on-forest",
							children: photos[photo].caption
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "absolute right-3 grid size-11 place-items-center rounded-md bg-cream text-ink md:right-6",
						onClick: () => setPhoto((index) => index === null ? index : (index + 1) % photos.length),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Next photo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
					})
				]
			}) : null
		]
	});
}
var inputClass = "h-12 w-full rounded-md border border-line bg-cream px-3 text-base text-ink outline-none focus:border-forest";
function Field({ id, label, error, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: cn("grid gap-1.5 text-sm font-medium", className),
		children: [
			label,
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-normal text-ink",
				children: error
			}) : null
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
