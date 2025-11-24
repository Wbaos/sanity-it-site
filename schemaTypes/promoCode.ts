import type { Rule } from "sanity";

export default {
  name: "promoCode",
  title: "Promo Codes",
  type: "document",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule: Rule) => Rule.required().uppercase(),
    },
    {
      name: "discountType",
      title: "Discount Type",
      type: "string",
      options: {
        list: [
          { title: "Percentage", value: "percentage" },
          { title: "Flat Amount", value: "flat" },
        ],
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "value",
      title: "Value",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "expires",
      title: "Expiration Date",
      type: "datetime",
    },
    {
      name: "usageCount",
      title: "Times Used",
      type: "number",
      readOnly: true,
      initialValue: 0,
    },
  ],
};
