export const siteCopy = {
  name: "Away We Go",
  domain: "awaywegoapp.com",
  supportEmail: "support@awaywegoapp.com",
  footerNote: "Made for wanderers.",
  shortDescription: "Turn your travels into a book.",
  longDescription:
    "Collect the places, photos, and little details that make a trip yours, then shape them into a keepsake you can hold onto after you get home.",
  hero: {
    eyebrow: "Travel journal app",
    badgeLine: "YOUR TRIP · YOUR BOOK · SHIPPED",
    lead: "From first pin to final page, Away We Go turns your camera roll into a printed story worth keeping.",
    note: "Visual signup only for now. Real waitlist signup is coming next.",
  },
  waitlist: {
    placeholder: "Email address",
    buttonLabel: "Join the waitlist",
    success: "Thanks. You are on the list for first access.",
  },
  navLinks: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/support", label: "Support" },
  ],
  journeyCards: [
    {
      step: "01",
      route: "CAPTURE",
      title: "Pin the trip while it is still happening",
      body: "Keep the stops, tiny details, and favorite photos together before the good parts get buried in your camera roll.",
      stamp: "Boarding Pass",
    },
    {
      step: "02",
      route: "SHAPE",
      title: "Lay it out like a real keepsake",
      body: "Turn scattered moments into a story with structure, rhythm, and the photos you actually want to revisit.",
      stamp: "First Draft",
    },
    {
      step: "03",
      route: "SHIP",
      title: "Hold the trip long after you land",
      body: "When the story feels right, turn it into a printed book that survives the scroll and earns shelf space.",
      stamp: "Ready to Mail",
    },
  ],
  collage: {
    eyebrow: "Postcard proof",
    title: "A trip should feel bigger than a folder of screenshots.",
    body: "The public site keeps the scrapbook tone from the landing page, but the product story stays grounded: gather the trip, edit the story, and keep something real when the flight home is over.",
    ctaLabel: "Jump to the list",
  },
  legal: {
    privacyIntro:
      "We keep the information needed to run Away We Go, support your account, and deliver the product experience you choose to use.",
    termsIntro:
      "Away We Go is consumer software for preserving travel memories and turning them into keepsakes, and these terms set the ground rules for using it.",
    supportIntro:
      "If you need help with Away We Go, send a note and we will reply as soon as we can.",
  },
} as const;
