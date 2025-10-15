import { defineField, defineType } from "sanity";

export default defineType({
    name: "service",
    title: "Services",
    type: "document",
    fields: [
        // 🏷️ Basic Info
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(3).error("Title is required"),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "price",
            title: "Base Price ($)",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),

        defineField({
            name: "description",
            title: "Short Description",
            type: "text",
            rows: 3,
        }),

        // 📁 Dynamic Category Reference
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            description: "Select which dropdown section this service belongs to",
            validation: (Rule) => Rule.required(),
        }),

        // 🖼️ Hero Image
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
        }),

        // 📋 Details list (for bullet points on the service page)
        defineField({
            name: "details",
            title: "Details List",
            type: "array",
            of: [{ type: "string" }],
        }),

        // ❓ FAQs
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "q", type: "string", title: "Question" }),
                        defineField({ name: "a", type: "text", title: "Answer" }),
                    ],
                },
            ],
        }),

        // 🌟 Testimonials
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "name", type: "string", title: "Customer Name" }),
                        defineField({ name: "text", type: "text", title: "Testimonial" }),
                        defineField({ name: "date", type: "date", title: "Date" }),
                        defineField({
                            name: "rating",
                            type: "number",
                            title: "Rating (1–5)",
                            validation: (Rule) => Rule.min(1).max(5),
                        }),
                    ],
                },
            ],
        }),

        // 🔗 Parent Service (for subservice nesting)
        defineField({
            name: "parentService",
            title: "Parent Service",
            type: "reference",
            to: [{ type: "service" }],
            description: "Select a parent service if this is a sub-service",
        }),

        // 🧩 Add-ons / Questions Section
        defineField({
            name: "questions",
            title: "Add-ons / Questions",
            type: "array",
            description: "Optional add-ons customers can select during checkout.",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "id",
                            title: "ID",
                            type: "string",
                            description: "Unique identifier (no spaces)",
                        }),
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description: "Full text displayed to the user",
                        }),
                        defineField({
                            name: "shortLabel",
                            title: "Short Label",
                            type: "string",
                            description: "Short name for order summary",
                        }),
                        defineField({
                            name: "extraCost",
                            title: "Extra Cost ($)",
                            type: "number",
                            description: "Additional price if selected",
                            validation: (Rule) => Rule.min(0),
                        }),
                    ],
                },
            ],
        }),
    ],
});
