import { defineField, defineType } from "sanity";

export default defineType({
    name: "pricingPlan",
    title: "Pricing Plans",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Plan Title",
            type: "string",
            validation: (Rule) => Rule.required(),
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
            title: "Price",
            type: "number",
            description: "Example: 89 or 19 (do not include the $ symbol)",
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "stripeProductId",
            title: "Stripe Product ID",
            type: "string",
            description: "The Stripe product ID for this plan (e.g. prod_ABC123)",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "duration",
            title: "Duration",
            type: "string",
            description: "Example: per month, per year, etc.",
            initialValue: "per month",
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }],
        }),

        defineField({
            name: "description",
            title: "Detailed Description",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
            initialValue: "Join Today",
        }),
        defineField({
            name: "buttonLink",
            title: "Button Link",
            type: "string",
            initialValue: "#contact",
        }),
        defineField({
            name: "featured",
            title: "Featured Plan",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first",
        }),
        defineField({
            name: "lastSyncedPrice",
            title: "Last Synced Stripe Price",
            type: "number",
            description: "Used internally to detect when Sanity price changes",
            readOnly: true,
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
