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

    //
    // PRICE CONTROL
    //
    defineField({
      name: "showPrice",
      title: "Show Price",
      type: "boolean",
      initialValue: true,
      description: "Turn off if this service should not display its price.",
      options: { layout: "switch" },
    }),

    defineField({
      name: "price",
      title: "Base Price ($)",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
    name: "rating",
    title: "Average Rating",
    type: "number",
    description: "Average customer rating (1–5 stars).",
    validation: (Rule) => Rule.min(0).max(5),
    initialValue: 4.9,
    }),

    defineField({
    name: "reviewsCount",
    title: "Total Reviews",
    type: "number",
    description: "Total number of reviews for this service.",
    initialValue: 0,
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),

    //
    // SERVICE MODE
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
    // CATEGORY
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
          description: "Alternative text for accessibility and SEO.",
          validation: (Rule) =>
            Rule.required().error(
              "Alt text helps with accessibility and SEO."
            ),
        }),
      ],
    }),

    //
    // DETAILS LIST
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
    // PARENT SERVICE
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
              validation: (Rule) =>
                Rule.required()
                  .regex(/^[a-z0-9_-]+$/, {
                    name: "id-format",
                    invert: false,
                  })
                  .error(
                    "Use only lowercase letters, numbers, hyphens, or underscores"
                  ),
            }),

            defineField({
              name: "label",
              title: "Label (Displayed to User)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "shortLabel",
              title: "Short Label",
              type: "string",
            }),

            defineField({
              name: "helpText",
              title: "Helper Text (shown under field)",
              type: "string",
              description:
                "Shown below the question label in the booking form.",
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
              title: "Conditional Options (Dynamic Dropdown)",
              type: "array",
              hidden: ({ parent }) =>
                !["select", "multi-select"].includes(parent?.type),
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "parentValue",
                      type: "string",
                    }),
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
                              validation: (Rule) =>
                                Rule.required(),
                            }),
                            defineField({
                              name: "extraCost",
                              type: "number",
                              validation: (Rule) =>
                                Rule.min(0),
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
                  : subtitle === "multi-select"
                  ? "Multi-Select"
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
