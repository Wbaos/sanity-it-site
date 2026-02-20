import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    // SEO Title for Search Engines
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Meta title for search engines (e.g., 'TV Mounting & Setup in Miami & Fort Lauderdale | CallTechCare').",
      validation: (Rule) =>
        Rule.max(60).warning(
          "Keep SEO title under ~60 characters for best display in search results."
        ),
    }),

    // SEO Meta Description
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "Meta description for search results (keep under ~155 characters). Appears below the title in Google results.",
      validation: (Rule) =>
        Rule.max(155).warning(
          "Keep meta descriptions concise for search engine visibility."
        ),
    }),

    // TITLE
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(2).error("Category title is required."),
    }),

    // SLUG
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("A slug is required for this category."),
    }),

    // DESCRIPTION
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description:
        "Brief summary of what kinds of services belong to this category.",
    }),

    // TAGLINE
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description:
        "Short promotional phrase (e.g. 'Clean, secure TV installations with a perfect viewing angle').",
      validation: (Rule) =>
        Rule.max(120).warning("Keep tagline concise."),
    }),

    // JOBS COMPLETED
    defineField({
      name: "jobsCompleted",
      title: "Jobs Completed",
      type: "object",
      fields: [
        {
          name: "value",
          type: "string",
          title: "Value",
          description: "E.g., '18,000+'",
        },
        {
          name: "icon",
          type: "image",
          title: "Icon",
          options: { hotspot: true },
        },
      ],
    }),

    // CUSTOMER RATING
    defineField({
      name: "customerRating",
      title: "Customer Rating",
      type: "object",
      fields: [
        {
          name: "value",
          type: "number",
          title: "Value",
          description: "E.g., 4.9",
        },
        {
          name: "icon",
          type: "image",
          title: "Icon",
          options: { hotspot: true },
        },
      ],
    }),

    // YEARS EXPERIENCE
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "object",
      fields: [
        {
          name: "value",
          type: "string",
          title: "Value",
          description: "E.g., '11+ yrs'",
        },
        {
          name: "icon",
          type: "image",
          title: "Icon",
          options: { hotspot: true },
        },
      ],
    }),

    // ABOUT THIS SERVICE
    defineField({
      name: "about",
      title: "About This Service",
      type: "text",
      rows: 4,
    }),

    // WHAT'S INCLUDED (FEATURES)
    defineField({
      name: "features",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    }),

    // BADGES
    defineField({
      name: "badges",
      title: "Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "string", title: "Description" },
            {
              name: "icon",
              type: "image",
              title: "Icon",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    // FAQ SECTION
    defineField({
      name: "faqs",
      title: "Frequently Asked Questions",
      type: "array",
      description: "Add common customer questions and answers for SEO and rich results.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    // WHY CHOOSE US
    defineField({
      name: "whyChoose",
      title: "Why Choose CallTechCare?",
      type: "array",
      description: "Key trust and differentiator points.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    // ICON
    defineField({
      name: "icon",
      title: "Category Icon",
      type: "image",
      description: "Upload a small SVG/PNG icon for this category.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) =>
            Rule.required().error("Alt text required for accessibility"),
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "icon",
    },
  },
});
