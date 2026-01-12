import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    // TITLE
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).error("Category title is required."),
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
      validation: (Rule) => Rule.required().error("A slug is required for this category."),
    }),
    // DESCRIPTION
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief summary of what kind of services belong to this category.",
    }),
    // TAGLINE
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short promotional phrase (e.g. 'Eliminate dead zones and maximize your speed').",
      validation: (Rule) => Rule.max(120).warning("Keep tagline concise."),
    }),
    // JOBS COMPLETED
    defineField({
      name: "jobsCompleted",
      title: "Jobs Completed",
      type: "object",
      fields: [
        { name: "value", type: "string", title: "Value", description: "E.g., '18,000+'" },
        { name: "icon", type: "image", title: "Icon", options: { hotspot: true } },
      ],
    }),
    // CUSTOMER RATING
    defineField({
      name: "customerRating",
      title: "Customer Rating",
      type: "object",
      fields: [
        { name: "value", type: "number", title: "Value", description: "E.g., 4.9" },
        { name: "icon", type: "image", title: "Icon", options: { hotspot: true } },
      ],
    }),
    // YEARS EXPERIENCE
    defineField({
      name: "yearsExperience",
      title: "Years of Experience",
      type: "object",
      fields: [
        { name: "value", type: "string", title: "Value", description: "E.g., '11+ yrs'" },
        { name: "icon", type: "image", title: "Icon", options: { hotspot: true } },
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
            { name: "icon", type: "image", title: "Icon", options: { hotspot: true } },
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
          validation: (Rule) => Rule.required().error("Alt text required for accessibility"),
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
