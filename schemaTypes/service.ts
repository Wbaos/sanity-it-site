import { defineField, defineType } from "sanity";

export default defineType({
    name: "service",
    title: "Services",
    type: "document",
    fields: [
        //
        //  BASIC INFO
        //
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) =>
                Rule.required().min(3).error("Title is required"),
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

        //
        // FEATURE FLAGS
        //
        defineField({
            name: "popular",
            title: "Mark as Popular",
            type: "boolean",
            initialValue: false,
            description: "Enable to feature this service on the homepage",
        }),

        defineField({
            name: "icon",
            title: "Icon (emoji or short text)",
            type: "string",
            description: "Example: 💻 📱 🛠️",
        }),

        //
        // CATEGORY RELATION
        //
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            description:
                "Select which dropdown section this service belongs to",
            validation: (Rule) => Rule.required(),
        }),

        //
        // HERO IMAGE
        //
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
        }),

        //
        // DETAILS (bullets)
        //
        defineField({
            name: "details",
            title: "Details List",
            type: "array",
            of: [{ type: "string" }],
        }),

        //
        // FAQs
        //
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

        //
        // TESTIMONIALS
        //
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "name",
                            type: "string",
                            title: "Customer Name",
                        }),
                        defineField({
                            name: "text",
                            type: "text",
                            title: "Testimonial",
                        }),
                        defineField({
                            name: "date",
                            type: "date",
                            title: "Date",
                        }),
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

        //
        // PARENT SERVICE (for nesting)
        //
        defineField({
            name: "parentService",
            title: "Parent Service",
            type: "reference",
            to: [{ type: "service" }],
            description:
                "Select a parent service if this is a sub-service",
        }),

        //
        // ADD-ONS / QUESTIONS (dynamic options)
        //
        defineField({
            name: "questions",
            title: "Add-ons / Questions",
            type: "array",
            description:
                "Optional add-ons, selectors, or text fields customers can fill during checkout.",
            of: [
                {
                    type: "object",
                    fields: [
                        //
                        // Core identifiers
                        //
                        defineField({
                            name: "id",
                            title: "ID",
                            type: "string",
                            description: "Unique identifier (no spaces)",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                            description: "Full text displayed to the user",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "shortLabel",
                            title: "Short Label",
                            type: "string",
                            description: "Short name for order summary",
                        }),

                        //
                        // Question type
                        //
                        defineField({
                            name: "type",
                            title: "Question Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Checkbox", value: "checkbox" },
                                    { title: "Select", value: "select" },
                                    { title: "Text Input", value: "text" },
                                ],
                            },
                            initialValue: "checkbox",
                            validation: (Rule) => Rule.required(),
                        }),

                        //
                        // For "checkbox" type
                        //
                        defineField({
                            name: "extraCost",
                            title: "Extra Cost ($)",
                            type: "number",
                            description: "Additional price if selected (checkbox only)",
                            validation: (Rule) => Rule.min(0),
                            hidden: ({ parent }) => parent?.type !== "checkbox",
                        }),

                        //
                        // For "select" type
                        //
                        defineField({
                            name: "options",
                            title: "Select Options",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        defineField({
                                            name: "label",
                                            title: "Option Label",
                                            type: "string",
                                            validation: (Rule) => Rule.required(),
                                        }),
                                        defineField({
                                            name: "extraCost",
                                            title: "Extra Cost ($)",
                                            type: "number",
                                            validation: (Rule) => Rule.min(0),
                                        }),
                                    ],
                                },
                            ],
                            hidden: ({ parent }) => parent?.type !== "select",
                        }),

                        //
                        // For "text" type
                        //
                        defineField({
                            name: "placeholder",
                            title: "Placeholder (for text input)",
                            type: "string",
                            hidden: ({ parent }) => parent?.type !== "text",
                        }),
                    ],
                },
            ],
        }),
    ],
});
