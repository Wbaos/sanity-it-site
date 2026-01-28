import { defineField, defineType } from "sanity";
import TooltipField from "../components/TooltipField";

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
      options: { layout: "switch" },
    }),

    defineField({
      name: "price",
      title: "Base Price ($)",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    }),

    defineField({
      name: "rating",
      title: "Average Rating",
      type: "number",
      description:
        "This value represents the total average score customers have given this service.",
      tooltip:
        "Calculated as total review score ÷ number of reviews...",
      validation: (Rule: any) => Rule.min(0).max(5).precision(2),
      components: { field: TooltipField }
    } as any),

    defineField({
      name: "reviewsCount",
      title: "Total Reviews",
      type: "number",
      description: "Total number of reviews.",
      initialValue: 0,
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
    defineField({
      name: "navDescription",
      title: "Nav / Group Description",
      type: "string",
      description: "Very short description shown in the service group view.",
      validation: (Rule) =>
        Rule.max(60).warning("Keep this very short (40–60 characters max)."),
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
    }),
    //
    // ICONhidden: ({ parent }) => parent?.isSubservice
    //
    defineField({
      name: "icon",
      title: "Service Icon",
      type: "image",
      description:
        "Upload a simple 500×500px SVG icon that clearly represents this service.",
      tooltip: "This svg will get displayed in the most popular services section.",
      options: { hotspot: true },
      components: { field: TooltipField },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "A short description of what the icon represents.",
          tooltip: "Use a brief description such as 'Wi-Fi icon'.",
          components: { field: TooltipField }
        }
      ],
    } as any),

    //
    // CATEGORY (Top-level items only)
    //
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Which category this service belongs to.",
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: "group",
      title: "Service Group",
      type: "reference",
      to: [{ type: "serviceGroup" }],
      description: "Which group this service belongs to (e.g. TV Mounting, TV Support).",
      validation: (Rule: any) => Rule.required(),
    }),

    //
    // HERO IMAGE
    //
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      description: "Large header image shown at the top of the service page.",
      tooltip: "Use a high-quality photo (1600px+). Avoid text inside the image for best readability.",
      options: { hotspot: true },
      components: { field: TooltipField },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Short description of what appears in the hero image.",
          tooltip: "Good for SEO and screen readers. Example: 'Technician installing smart camera'.",
          validation: (Rule: any) => Rule.required(),
          components: { field: TooltipField }
        } as any)
      ],
    } as any),


    //
    // DETAILS (sub-services only)
    //
    defineField({
      name: "details",
      title: "What is Included",
      type: "array",
      of: [{ type: "string" }],
    }),

    //
    // FAQs (sub-services only)
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
    // TESTIMONIALS (sub-services only)
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
              validation: (Rule: any) => Rule.min(1).max(5),
            }),
          ],
        },
      ],
    }),

    // Removed parentService field

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
    }),

    //
    // ADD-ONS / QUESTIONS (sub-services only)
    //
    defineField({
      name: "questions",
      title: "Add-ons / Questions",
      type: "array",
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
              validation: (Rule: any) =>
                Rule.required()
                  .regex(/^[a-z0-9_-]+$/)
                  .error("Use lowercase letters, numbers, hyphens, or underscores."),
            }),

            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule: any) => Rule.required(),
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
              validation: (Rule: any) => Rule.required(),
            }),

            defineField({
              name: "extraCost",
              title: "Extra Cost ($)",
              type: "number",
              validation: (Rule: any) => Rule.min(0),
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
                      validation: (Rule: any) => Rule.required(),
                    }),
                    defineField({
                      name: "extraCost",
                      title: "Extra Cost ($)",
                      type: "number",
                      validation: (Rule: any) => Rule.min(0),
                    }),
                  ],
                },
              ],
            }),

            defineField({
              name: "allowOther",
              title: "Allow 'Other' Option",
              type: "boolean",
              initialValue: false,
            }),

            defineField({
              name: "dependsOn",
              title: "Depends On (Parent Question ID)",
              type: "string",
            }),

            defineField({
              name: "optionsByParent",
              title: "Conditional Options",
              type: "array",
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
                              validation: (Rule: any) => Rule.required(),
                            }),
                            defineField({
                              name: "extraCost",
                              type: "number",
                              validation: (Rule: any) => Rule.min(0),
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
      groupTitle: "group.title",
      media: "icon",
      price: "price",
      enabled: "enabled",
    },
    prepare({ title, categoryTitle, groupTitle, media, price, enabled }) {
      return {
        title: `${title} — $${price}`,
        subtitle: enabled
          ? `✅ ${categoryTitle} → ${groupTitle}`
          : `🚫 ${categoryTitle} → ${groupTitle}`,
        media,
      };
    },
  },
});
