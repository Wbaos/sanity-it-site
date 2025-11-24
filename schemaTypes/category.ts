import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",

  fields: [
    //
    // TITLE
    //
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(2).error("Category title is required."),
    }),

    //
    // SLUG
    //
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

    //
    // DESCRIPTION
    //
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description:
        "Brief summary of what kind of services belong to this category.",
    }),

    //
    // ICON
    //
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
