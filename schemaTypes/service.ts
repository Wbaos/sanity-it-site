import { defineField, defineType } from "sanity";

export default defineType({
    name: "service",
    title: "Services",
    type: "document",

    fieldsets: [
        {
            name: "status",
            title: "Service Status",
            options: { collapsible: false },
        },
    ],

    fields: [
        //
        // FEATURE FLAGS
        //
        defineField({
            name: "enabled",
            title: "Enabled",
            type: "boolean",
            initialValue: true,
            description:
                "Toggle this to enable or disable this service on the website.",
            options: { layout: "switch" },
            fieldset: "status",
        }),

        defineField({
            name: "popular",
            title: "Mark as Popular",
            type: "boolean",
            initialValue: false,
            description: "Enable to feature this service on the homepage.",
            options: { layout: "switch" },
            fieldset: "status",
        }),

        //
        // BASIC INFO
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
        // ICON
        //
        defineField({
            name: "icon",
            title: "Service Icon",
            type: "image",
            description: "Upload an icon or small image for this service.",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: "string",
                    description: "Alternative text for accessibility and SEO",
                }),
            ],
        }),

        //
        // CATEGORY RELATION
        //
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
            description: "Select which main section this service belongs to.",
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
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: "string",
                    description:
                        "Alternative text for accessibility and SEO.",
                    validation: (Rule) =>
                        Rule.required().error(
                            "Alt text helps with accessibility and SEO."
                        ),
                }),
            ],
        }),

        //
        // DETAILS
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

        //
        // PARENT SERVICE (for nested hierarchy)
        //
        defineField({
            name: "parentService",
            title: "Parent Service",
            type: "reference",
            to: [{ type: "service" }],
            description:
                "If this is a sub-service, select its parent service (e.g., 'Computers'). Leave empty for top-level services.",
        }),

        //
        // ADD-ONS / QUESTIONS
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
                    title: "Question",
                    fields: [
                        defineField({
                            name: "id",
                            title: "ID",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "label",
                            title: "Label (Displayed to User)",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({ name: "shortLabel", title: "Short Label", type: "string" }),

                        defineField({
                            name: "type",
                            title: "Question Type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Checkbox (Add-on)", value: "checkbox" },
                                    { title: "Select (Dropdown)", value: "select" },
                                    { title: "Text Input", value: "text" },
                                ],
                                layout: "radio",
                            },
                            initialValue: "checkbox",
                            validation: (Rule) => Rule.required(),
                        }),

                        defineField({
                            name: "extraCost",
                            title: "Extra Cost ($)",
                            type: "number",
                            validation: (Rule) => Rule.min(0),
                            hidden: ({ parent }) => parent?.type !== "checkbox",
                        }),

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

                        defineField({
                            name: "allowOther",
                            title: "Allow 'Other' Option",
                            type: "boolean",
                            initialValue: false,
                            hidden: ({ parent }) => parent?.type !== "select",
                        }),

                        defineField({
                            name: "dependsOn",
                            title: "Depends On (Parent Question ID)",
                            type: "string",
                            description:
                                "Show this question only when another question has a specific answer (use the parent's ID).",
                            hidden: ({ parent }) => parent?.type !== "select",
                        }),

                        defineField({
                            name: "optionsByParent",
                            title: "Conditional Options (Dynamic Dropdown)",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        defineField({
                                            name: "parentValue",
                                            title: "Parent Value",
                                            type: "string",
                                        }),
                                        defineField({
                                            name: "options",
                                            title: "Options to display when parentValue is selected",
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
                                        }),
                                    ],
                                },
                            ],
                            hidden: ({ parent }) => parent?.type !== "select",
                        }),

                        defineField({
                            name: "placeholder",
                            title: "Placeholder (for text input)",
                            type: "string",
                            hidden: ({ parent }) => parent?.type !== "text",
                        }),
                    ],

                    preview: {
                        select: {
                            title: "label",
                            subtitle: "type",
                        },
                        prepare({ title, subtitle }) {
                            const typeLabel =
                                subtitle === "checkbox"
                                    ? "Checkbox Add-on"
                                    : subtitle === "select"
                                        ? "Select Dropdown"
                                        : "Text Input";
                            return {
                                title: title || "Untitled Question",
                                subtitle: typeLabel,
                            };
                        },
                    },
                },
            ],
            options: { sortable: true },
        }),
    ],

    //
    // PREVIEW
    //
    preview: {
        select: {
            title: "title",
            categoryTitle: "category.title",
            parentTitle: "parentService.title",
            media: "icon",
            price: "price",
            enabled: "enabled",
        },
        prepare({ title, categoryTitle, parentTitle, media, price, enabled }) {
            const subtitle = parentTitle
                ? `↳ ${parentTitle} (${categoryTitle})`
                : categoryTitle || "No category";
            return {
                title: `${title} — $${price || 0}`,
                subtitle: enabled ? `✅ ${subtitle}` : `🚫 ${subtitle}`,
                media,
            };
        },
    },
});
