import { Rule } from "sanity";

export const review = {
    name: "review",
    title: "Reviews",
    type: "document",
    fields: [
        { name: "userName", title: "User Name", type: "string" },
        { name: "serviceSlug", title: "Service Slug", type: "string" },
        {
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (Rule: Rule) => Rule.min(1).max(5),
        },
        {
            name: "title",
            title: "Review Title",
            type: "string",
            description: "A short headline summarizing the review",
        },
        { name: "comment", title: "Comment", type: "text" },
        {
            name: "media",
            title: "Photo or Video",
            type: "file",
            options: {
                accept: "image/*,video/*",
                storeOriginalFilename: true,
            },
        },
        {
            name: "approved",
            title: "Approved",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            readOnly: true,
        },
    ],
    preview: {
        select: {
            title: "userName",
            subtitle: "title",
            media: "media",
        },
    },
};
