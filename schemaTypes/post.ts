import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    // --------------------
    // Core Content
    // --------------------
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),

    // --------------------
    // Images
    // --------------------
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Required for SEO & accessibility',
          validation: Rule => Rule.required(),
        },
      ],
    }),

    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OG)',
      type: 'image',
      description: 'Used for Facebook, WhatsApp, Twitter, etc.',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Required for social & SEO',
          validation: Rule => Rule.required(),
        },
      ],
    }),

    // --------------------
    // Taxonomy
    // --------------------
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Short keywords (e.g. wifi, tv-mounting, senior-tech)',
    }),

    // --------------------
    // SEO
    // --------------------
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Short Description',
      type: 'text',
      rows: 3,
      description: 'Used for blog previews and summaries',
      validation: Rule => Rule.required().max(160),
    }),

    defineField({
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      description: '50–60 characters recommended',
      validation: Rule => Rule.required().max(60),
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 3,
      description: '150–160 characters recommended',
      validation: Rule => Rule.required().max(160),
    }),

    defineField({
      name: 'focusKeyword',
      title: 'Primary SEO Keyword',
      type: 'string',
      description: 'Main keyword you want this post to rank for',
    }),

    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Use only if this content exists elsewhere',
    }),

    defineField({
      name: 'seoNoIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this post',
      initialValue: false,
    }),

    // --------------------
    // Content Body
    // --------------------
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    }),

    // --------------------
    // UX / Extras
    // --------------------
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time (minutes)',
      type: 'number',
      description: 'Optional — improves UX and trust',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare({ title, author, media, publishedAt }) {
      return {
        title,
        media,
        subtitle: `${author || 'Unknown author'} • ${
          publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Unpublished'
        }`,
      }
    },
  },
})
