import { defineField, defineType } from "sanity";

// City landing pages (Lote 2 migration, Nov 2026).
//
// One document per city page (30 total: 29 city pages + the Miami hub).
// The website renders every city page from a single template + these
// documents, in English and Spanish. Content that is identical across
// cities (goal paragraph, common problems, highlights cards, steps,
// shared FAQs, CTAs, stats) lives in the template as locale maps — it is
// NOT duplicated here. Only what genuinely varies per city is stored:
// hero copy, intro, area paragraph, local FAQs, gallery and meta.
//
// Fidelity notes (the files are the truth, quirks included):
// - areaSegments stores the area paragraph verbatim as text/link
//   segments, so hand-edited paragraphs (Aventura's custom structure,
//   Hollywood's ", FL", Cutler Bay's "nearby 33177") survive exactly.
// - localFaqs stores the 2 local FAQs verbatim (housing type + ZIPs);
//   some ZIP answers list more ZIPs than the Service schema does.
// - faqOverrides stores shared-FAQ questions/answers that differ for
//   one city (Hollywood's ", FL" in questions 0, 4, 5, 8 and answer 8).
// - highlightsVariant: "" (standard cards), "linked-titles" (Davie,
//   Cutler Bay: card titles link to the services, no cross-link
//   sentence), "short-links" (Aventura: shorter cross-link phrases).
// - faqsOverride (hub only): the Miami hub has its own 8 FAQs, so it
//   bypasses the shared + local FAQ composition entirely.
// - The hub's area paragraph is NOT stored: the template renders it
//   from the full ordered city list, so the hub can never drift from
//   the cities it lists.

const faqObject = {
  type: "object",
  fields: [
    defineField({ name: "q", type: "string", title: "Question" }),
    defineField({ name: "a", type: "text", title: "Answer", rows: 4 }),
  ],
};

const areaSegmentObject = {
  type: "object",
  description:
    "One piece of the area paragraph. Either plain text, or a link (fill linkText + linkHref, leave text empty).",
  fields: [
    defineField({ name: "text", type: "string", title: "Text" }),
    defineField({ name: "linkText", type: "string", title: "Link text" }),
    defineField({
      name: "linkHref",
      type: "string",
      title: "Link href",
      description:
        "City links use the English path (/sprinkler-repair-{city}); the template routes them to the Spanish twin on /es/* pages. Hub links use /locations/miami or /locations/fort-lauderdale.",
    }),
  ],
};

export default defineType({
  name: "city",
  title: "City Page",
  type: "document",

  fields: [
    // IDENTIFICATION
    defineField({
      name: "name",
      title: "City Name",
      type: "string",
      description: "e.g. Surfside, Fort Lauderdale, Miami (hub).",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      description:
        "City part of the English URL. The page lives at /sprinkler-repair-{slug}.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "esSlug",
      title: "Spanish URL Segment",
      type: "string",
      description:
        "Full Spanish URL segment, e.g. reparacion-de-sprinklers-surfside. The page lives at /es/{esSlug}.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "isHub",
      title: "Is Hub Page",
      type: "boolean",
      description: "Only the Miami hub page is a hub. Hub pages render their area paragraph from the city list.",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Canonical order across sitemap, hub list, footer and schema (0 = Sunrise … 29 = Cutler Bay; Miami hub = 23).",
    }),

    // GEOGRAPHY
    defineField({
      name: "county",
      title: "County",
      type: "string",
      description:
        "Broward or Miami-Dade (used in hero, subtitles and shared FAQs). The hub uses 'both'.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "hubSlug",
      title: "Hub Location Page",
      type: "string",
      description: "miami or fort-lauderdale — the /locations/ page this city belongs to.",
    }),

    defineField({
      name: "hubLabel",
      title: "Hub Label",
      type: "string",
      description: "Miami or Fort Lauderdale — display label of the hub page.",
    }),

    defineField({
      name: "zipCodes",
      title: "ZIP Codes (Service Schema)",
      type: "array",
      of: [{ type: "string" }],
      description: "ZIPs in the Service schema areaServed postalCode.",
    }),

    defineField({
      name: "sisters",
      title: "Nearby Cities (Sisters)",
      type: "array",
      description:
        "Cities linked in the area paragraph and listed in the 'nearby areas' FAQ, in display order.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "City name" }),
            defineField({
              name: "slug",
              type: "string",
              title: "City slug",
              description: "City part of the URL, e.g. weston (page: /sprinkler-repair-weston).",
            }),
          ],
        },
      ],
    }),

    // HERO + INTRO (ENGLISH)
    defineField({ name: "heroTitle1", title: "Hero Title Line 1", type: "string" }),
    defineField({ name: "heroTitle2", title: "Hero Title Line 2", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "string" }),
    defineField({ name: "heroBadge", title: "Hero Badge", type: "string" }),

    defineField({
      name: "seoIntroTitle",
      title: "SEO Intro Heading (H2)",
      type: "string",
    }),

    defineField({
      name: "introP1",
      title: "Intro Paragraph",
      type: "text",
      rows: 4,
      description: "First paragraph of the seo-intro section, verbatim.",
    }),

    defineField({
      name: "areaSegments",
      title: "Area Paragraph Segments",
      type: "array",
      description:
        "The 'We serve all of…' paragraph as ordered segments. Not used for the hub (rendered from the city list).",
      of: [areaSegmentObject],
    }),

    // FAQs (ENGLISH)
    defineField({
      name: "localFaqs",
      title: "Local FAQs",
      type: "array",
      description:
        "The 2 local FAQs, verbatim and in order: (1) housing type (condos / lots / HOA), (2) ZIP codes.",
      of: [faqObject],
    }),

    defineField({
      name: "faqOverrides",
      title: "Shared FAQ Overrides",
      type: "array",
      description:
        "Only for cities where a shared FAQ question/answer differs (Hollywood's ', FL'). Index = position in the standard 9-FAQ list (0-8); leave answer empty when only the question differs.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "index", type: "number", title: "FAQ index" }),
            defineField({ name: "q", type: "string", title: "Question" }),
            defineField({ name: "a", type: "text", title: "Answer", rows: 4 }),
          ],
        },
      ],
    }),

    defineField({
      name: "faqsOverride",
      title: "Full FAQ Override (Hub Only)",
      type: "array",
      description:
        "When set, the template uses exactly these FAQs instead of shared + local. Only the Miami hub uses it (8 FAQs).",
      of: [faqObject],
    }),

    // HIGHLIGHTS VARIANT
    defineField({
      name: "highlightsVariant",
      title: "Highlights Card Variant",
      type: "string",
      description:
        "Empty = standard cards. 'linked-titles' = card titles link to services (Davie, Cutler Bay). 'short-links' = shorter cross-link phrases (Aventura).",
    }),

    // GALLERY
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      description:
        "Our Work gallery. Generic cities share the 4 generic images; Aventura, Cutler Bay, Davie and Fort Lauderdale use their real job photos (never reuse a real photo on another city).",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({ name: "altEs", title: "Alt text (Spanish)", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
            defineField({ name: "captionEs", title: "Caption (Spanish)", type: "string" }),
          ],
        },
      ],
      options: { sortable: true },
    }),

    // META (ENGLISH)
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters so Google does not cut it off."),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.max(160).warning("Keep under 160 characters so Google does not cut it off."),
    }),

    //
    // SPANISH (ES) — counterparts of the fields rendered by the city
    // template. When an ES field is empty, the website falls back to the
    // English field. Shared blocks (goal, common problems, cards, steps,
    // shared FAQs) live as locale maps in the template, not here.
    //
    defineField({ name: "heroTitle1Es", title: "Hero Title Line 1 (Spanish)", type: "string" }),
    defineField({ name: "heroTitle2Es", title: "Hero Title Line 2 (Spanish)", type: "string" }),
    defineField({ name: "heroSubtitleEs", title: "Hero Subtitle (Spanish)", type: "string" }),
    defineField({ name: "heroBadgeEs", title: "Hero Badge (Spanish)", type: "string" }),

    defineField({
      name: "seoIntroTitleEs",
      title: "SEO Intro Heading (Spanish)",
      type: "string",
    }),

    defineField({
      name: "introP1Es",
      title: "Intro Paragraph (Spanish)",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "areaSegmentsEs",
      title: "Area Paragraph Segments (Spanish)",
      type: "array",
      description: "Same segment count and hrefs as areaSegments, texts translated.",
      of: [areaSegmentObject],
    }),

    defineField({
      name: "localFaqsEs",
      title: "Local FAQs (Spanish)",
      type: "array",
      of: [faqObject],
    }),

    defineField({
      name: "faqOverridesEs",
      title: "Shared FAQ Overrides (Spanish)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "index", type: "number", title: "FAQ index" }),
            defineField({ name: "q", type: "string", title: "Question" }),
            defineField({ name: "a", type: "text", title: "Answer", rows: 4 }),
          ],
        },
      ],
    }),

    defineField({
      name: "faqsOverrideEs",
      title: "Full FAQ Override (Spanish, Hub Only)",
      type: "array",
      of: [faqObject],
    }),

    defineField({
      name: "metaTitleEs",
      title: "Meta Title (Spanish)",
      type: "string",
      validation: (Rule) =>
        Rule.max(60).warning("Keep under 60 characters so Google does not cut it off."),
    }),

    defineField({
      name: "metaDescriptionEs",
      title: "Meta Description (Spanish)",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.max(160).warning("Keep under 160 characters so Google does not cut it off."),
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
    },
  },
});
