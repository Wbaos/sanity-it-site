import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      title: "Signup Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "source",
      title: "Signup Source",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
});
