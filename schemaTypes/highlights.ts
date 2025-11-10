import { defineField, defineType } from "sanity";

export default defineType({
    name: "highlight",
    title: "Highlights",
    type: "document",
    fields: [
        defineField({
            name: "icon",
            title: "Icon (emoji or short text)",
            type: "string",
            description: "Example: ⚡ 🤝 💳",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(2).error("Title is required."),
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
