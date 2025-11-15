import { defineField, defineType } from "sanity";

export default defineType({
  name: "highlight",
  title: "Highlights",
  type: "document",

  fields: [
    defineField({
      name: "iconSvg",
      title: "Icon (SVG Upload)",
      type: "file",
      description: "Upload an SVG file for this highlight icon.",
      options: {
        accept: "image/svg+xml",
      },
      validation: (Rule) => Rule.required().error("SVG icon is required."),
    }),

    defineField({
      name: "color",
      title: "Icon Background Color",
      type: "string",
      description:
        "Hex color for icon background. Example: #FACC15 (yellow), #3B82F6 (blue), #10B981 (green).",
      validation: (Rule) =>
        Rule.required().error("Background color is required."),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(2).error("Title is required."),
    }),

    defineField({
      name: "desc",
      title: "Description",
      type: "text",
      rows: 2,
      validation: (Rule) =>
        Rule.required().min(5).error("Description is required."),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls display order",
      initialValue: 0,
    }),
  ],

  orderings: [
    {
      title: "Order Ascending",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
