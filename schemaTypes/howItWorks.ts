import { defineField, defineType } from "sanity";

export default defineType({
    name: "howItWorks",
    title: "How It Works Steps",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(3).error("Title is required."),
        }),
        defineField({
            name: "desc",
            title: "Description",
            type: "text",
            rows: 2,
            validation: (Rule) => Rule.required().min(5),
        }),
        defineField({
            name: "order",
            title: "Step Number",
            type: "number",
            description: "Controls the display order of steps",
            initialValue: 1,
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
