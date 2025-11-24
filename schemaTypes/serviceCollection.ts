// serviceCollection.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceCollection",
  title: "Service Collection",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Collection Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Collection Description",
      type: "text",
    }),

    defineField({
      name: "services",
      title: "Services in this Collection",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    }),
  ],

  preview: {
    select: { title: "title" },
  },
});
