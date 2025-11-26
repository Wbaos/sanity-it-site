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
    // ------------------------------------------------------------------
    // TOP-LEVEL FLAG: Is this a sub-service?
    // ------------------------------------------------------------------
    defineField({
      name: "isSubservice",
      title: "Is Sub-Service?",
      type: "boolean",
      initialValue: false,
      description:
        "Enable if this service belongs under a parent service and has its own pricing.",
    }),

    //
    // FEATURE FLAGS
    //
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
      description: "Toggle this to enable or disable this service on the website.",
      options: { layout: "switch" },
      fieldset: "status",
    }),

    defineField({
      name: "popular",
      title: "Mark as Popular",
      type: "boolean",
      initialValue: false,
      description: "Feature this service on the homepage.",
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

    //
    // PRICE CONTROL (Only for sub-services)
    //
    defineField({
      name: "showPrice",
      title: "Show Price",
      type: "boolean",
      initialValue: true,
      description: "Show or hide the price.",
      options: { layout: "switch" },
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    defineField({
      name: "price",
      title: "Base Price ($)",
      type: "number",
      validation: (Rule) => Rule.min(0),
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    defineField({
      name: "rating",
      title: "Average Rating",
      type: "number",
      description: "Average customer rating (1–5 stars).",
      validation: (Rule) => Rule.min(0).max(5),
      initialValue: 4.9,
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    defineField({
      name: "reviewsCount",
      title: "Total Reviews",
      type: "number",
      description: "Total number of reviews.",
      initialValue: 0,
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    //
    // DESCRIPTION
    //
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    //
    // SERVICE MODE (Only visible for sub-services)
    //
    defineField({
      name: "mode",
      title: "Service Mode",
      type: "string",
      description: "Where this service is performed.",
      options: {
        list: [
          { title: "In-Home", value: "in-home" },
          { title: "Online", value: "online" },
          { title: "Online + In-Home", value: "both" },
        ],
        layout: "radio",
      },
      initialValue: "in-home",

      //  Hide this field when NOT a sub-service
      hidden: ({ document }) => document?.isSubservice === false,
    }),
    //
    // ICONhidden: ({ parent }) => parent?.isSubservice
    //
    defineField({
      name: "icon",
      title: "Service Icon",
      type: "image",
      description: "Upload an icon or small image.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Accessibility and SEO.",
        }),
      ],
    }),

    //
    // CATEGORY (Top-level items only)
    //
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Which category this service belongs to.",
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
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    //
    // PROMO BOX (sub-services only)
    //
    defineField({
      name: "promo",
      title: "Promo Box",
      type: "object",
      hidden: ({ parent }) => !parent?.isSubservice,
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
          name: "buttonText",
          title: "Button Text",
          type: "string",
          initialValue: "Book Now",
        }),
        defineField({
          name: "icon",
          title: "Promo Icon",
          type: "image",
          fields: [{ name: "alt", type: "string", title: "Alt text" }],
        }),
      ],
    }),

    //
    // DETAILS (sub-services only)
    //
    defineField({
      name: "details",
      title: "What is Included",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    //
    // FAQs (sub-services only)
    //
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      hidden: ({ parent }) => !parent?.isSubservice,
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
    // TESTIMONIALS (sub-services only)
    //
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      hidden: ({ parent }) => !parent?.isSubservice,
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
    // PARENT SERVICE (only for sub-services)
    //
    defineField({
      name: "parentService",
      title: "Parent Service",
      type: "reference",
      to: [{ type: "service" }],
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Installation", value: "installation" },
          { title: "Support", value: "support" },
        ],
        layout: "radio",
      },
      hidden: ({ parent }) => !parent?.isSubservice,
    }),

    //
    // ADD-ONS / QUESTIONS (sub-services only)
    //
    defineField({
      name: "questions",
      title: "Add-ons / Questions",
      type: "array",
      hidden: ({ parent }) => !parent?.isSubservice,
      description: "Optional add-ons or selections during checkout.",
      of: [
        {
          type: "object",
          title: "Question",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (Rule) =>
                Rule.required()
                  .regex(/^[a-z0-9_-]+$/)
                  .error("Use lowercase letters, numbers, hyphens, or underscores."),
            }),

            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({ name: "shortLabel", title: "Short Label", type: "string" }),

            defineField({
              name: "helpText",
              title: "Helper Text",
              type: "string",
            }),

            defineField({
              name: "required",
              title: "Required Field?",
              type: "boolean",
              initialValue: false,
            }),

            defineField({
              name: "type",
              title: "Question Type",
              type: "string",
              options: {
                list: [
                  { title: "Checkbox (Add-on)", value: "checkbox" },
                  { title: "Select (Dropdown)", value: "select" },
                  { title: "Multi-Select", value: "multi-select" },
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
              hidden: ({ parent }) =>
                !["select", "multi-select"].includes(parent?.type),
            }),

            defineField({
              name: "allowOther",
              title: "Allow 'Other' Option",
              type: "boolean",
              initialValue: false,
              hidden: ({ parent }) =>
                !["select", "multi-select"].includes(parent?.type),
            }),

            defineField({
              name: "dependsOn",
              title: "Depends On (Parent Question ID)",
              type: "string",
              hidden: ({ parent }) =>
                !["select", "multi-select"].includes(parent?.type),
            }),

            defineField({
              name: "optionsByParent",
              title: "Conditional Options",
              type: "array",
              hidden: ({ parent }) =>
                !["select", "multi-select"].includes(parent?.type),
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "parentValue", type: "string" }),
                    defineField({
                      name: "options",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          fields: [
                            defineField({
                              name: "label",
                              type: "string",
                              validation: (Rule) => Rule.required(),
                            }),
                            defineField({
                              name: "extraCost",
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
            }),

            defineField({
              name: "placeholder",
              title: "Placeholder",
              type: "string",
              hidden: ({ parent }) => parent?.type !== "text",
            }),
          ],

          preview: {
            select: { title: "label", subtitle: "type" },
            prepare({ title, subtitle }) {
              const typeLabel =
                subtitle === "checkbox"
                  ? "Checkbox Add-on"
                  : subtitle === "select"
                  ? "Select Dropdown"
                  : subtitle === "multi-select"
                  ? "Multi-Select"
                  : "Text Input";
              return { title: title || "Untitled Question", subtitle: typeLabel };
            },
          },
        },
      ],
      options: { sortable: true },
    }),
  ],

  // ----------------------------------------------------------------------
  // PREVIEW
  // ----------------------------------------------------------------------
  preview: {
    select: {
      title: "title",
      categoryTitle: "category.title",
      parentTitle: "parentService.title",
      media: "icon",
      price: "price",
      enabled: "enabled",
      isSubservice: "isSubservice",
    },
    prepare({ title, categoryTitle, parentTitle, media, price, enabled, isSubservice }) {
      const subtitle = isSubservice
        ? `↳ ${parentTitle || "Sub-Service"}`
        : categoryTitle || "Main Service";

      return {
        title: isSubservice ? `${title} — $${price || 0}` : title,
        subtitle: enabled ? `✅ ${subtitle}` : `🚫 ${subtitle}`,
        media,
      };
    },
  },
});
