import {
  Bath,
  CalendarRange,
  CircleParking,
  DoorOpen,
  Droplets,
  ShieldCheck,
  Speaker,
  Sparkles,
  Trees,
  Tv,
  UtensilsCrossed,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const PHONE_DISPLAY = "0814 083 3504";
export const PHONE_TEL = "+2348140833504";
export const WHATSAPP = "2348140833504";

export const ADDRESS_LINES = [
  "3b Kabiru Apena, One Day Avenue",
  "Igando Isuti Road, One Day Avenue Bus Stop",
  "Igando, Lagos State",
];

export const ADDRESS_TEXT = ADDRESS_LINES.join(", ");

export const suites = [
  {
    id: "1 Bedroom",
    name: "1 Bedroom",
    fit: "One guest or a couple",
    summary: "A private en-suite apartment with its own lounge and kitchen.",
    points: ["En-suite bedroom", "Lounge and kitchen", "Netflix and a speaker"],
  },
  {
    id: "2 Bedroom",
    name: "2 Bedroom",
    fit: "Family or friends",
    summary: "Two en-suite rooms sharing the lounge, kitchen, and compound.",
    points: ["Two en-suite bedrooms", "Shared lounge and kitchen", "Room for a longer stay"],
  },
] as const;

export type SuiteId = (typeof suites)[number]["id"];

export const amenities: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Zap, title: "24/7 power", detail: "Light stays on" },
  { icon: ShieldCheck, title: "Security / CCTV", detail: "Compound is watched" },
  { icon: Droplets, title: "Good water", detail: "Running water in the house" },
  { icon: Tv, title: "Netflix", detail: "Ready in the apartment" },
  { icon: Speaker, title: "Speaker", detail: "In the apartment" },
  { icon: UtensilsCrossed, title: "Kitchen & gas", detail: "Cook if you want to" },
  { icon: Wifi, title: "5G Wi-Fi", detail: "For work and streaming" },
  { icon: Bath, title: "En-suite rooms", detail: "Private bath in each room" },
  { icon: Sparkles, title: "Housekeeper", detail: "The place is looked after" },
  { icon: CircleParking, title: "Dedicated parking", detail: "A space in the compound" },
  { icon: DoorOpen, title: "Balcony", detail: "A little air of your own" },
  { icon: Trees, title: "Private sit-out", detail: "Quiet space in the compound" },
];

export const stays = [
  {
    icon: CalendarRange,
    title: "Daily",
    detail: "A night, a weekend, or a short stop in Lagos.",
  },
  {
    icon: CalendarRange,
    title: "Weekly",
    detail: "Work trips, family visits, and a few quiet days.",
  },
  {
    icon: CalendarRange,
    title: "Monthly",
    detail: "A longer base in Igando, with housekeeping included.",
  },
];

export const photos = [
  {
    src: "/photos/lounge-room.jpg",
    alt: "Lounge at BDREAM HOME with marble floor, hanging chair, and blue ceiling light",
    caption: "The lounge",
    frame: "aspect-lounge",
  },
  {
    src: "/photos/bedroom.jpg",
    alt: "Bedroom with a pink upholstered headboard, dark curtains, and striped bedding",
    caption: "A bedroom",
    frame: "aspect-portrait",
  },
  {
    src: "/photos/compound.jpg",
    alt: "Night view of the BDREAM HOME compound, sit-out, and the house lit in green",
    caption: "The compound",
    frame: "aspect-lounge",
  },
  {
    src: "/photos/celebration.jpg",
    alt: "Apartment dressed with balloons and a happy birthday wall for a celebration",
    caption: "Dressed for a celebration",
    frame: "aspect-portrait",
  },
] as const;
