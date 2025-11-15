import { defineType, defineField } from "sanity";

export default defineType({
  name: "review",
  title: "Reviews",
  type: "document",

  fields: [
    defineField({
      name: "userName",
      title: "User Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "serviceSlug",
      title: "Service Slug",
      type: "string",
      description: "Slug of the related service (used for linking reviews to services).",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),

    defineField({
      name: "title",
      title: "Review Title",
      type: "string",
      description: "Short headline summarizing the review.",
    }),

    defineField({
      name: "comment",
      title: "Comment",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "media",
      title: "Photo or Video",
      type: "file",
      options: {
        accept: "image/*,video/*",
        storeOriginalFilename: true,
      },
    }),

    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: "userName",
      subtitle: "title",
      media: "media",
    },
  },
});
