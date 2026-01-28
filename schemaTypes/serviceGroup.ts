import { defineType, defineField } from "sanity";

export default defineType({
  name: "serviceGroup",
  title: "Service Group",
  type: "document",

  fields: [
        // PROMO BOX
        defineField({
          name: "promo",
          title: "Promo Box",
          type: "object",
          fields: [
            defineField({
              name: "enabled",
              title: "Enable Promo Box",
              type: "boolean",
              initialValue: false,
            }),
            defineField({ name: "title", title: "Promo Title", type: "string" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
            defineField({
              name: "items",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "icon",
              title: "Promo Icon",
              type: "image",
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            }),
          ],
        }),
    defineField({
      name: "title",
      title: "Group Title",
      type: "string",
      description: "Text users click (e.g. TV Mounting, TV Support)",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Which category this group belongs to",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Group Description",
      type: "text",
      rows: 3,
      description: "Optional text shown under the group title",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category.title",
    },
    prepare({ title, category }) {
      return {
        title,
        subtitle: category ? `Category: ${category}` : "No category",
      };
    },
  },
});
