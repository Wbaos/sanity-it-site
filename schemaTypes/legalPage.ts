import { defineField, defineType } from 'sanity'

// Legal pages (privacy + terms), EN + ES, exact current copy.
// Two documents, keyed by `page`: `privacy` and `terms`.
// Layout: `cards` (privacy: icon header cards) or `steps` (terms:
// numbered steps). Block shape covers both: plain paragraphs,
// highlight + paragraph pairs, bullet lists, and terms callouts.

const blockObject = {
  type: 'object',
  fields: [
    defineField({ name: 'highlight', type: 'string', title: 'Highlight Label' }),
    defineField({ name: 'highlightEs', type: 'string', title: 'Highlight Label (Spanish)' }),
    defineField({ name: 'text', type: 'text', title: 'Paragraph', rows: 4 }),
    defineField({ name: 'textEs', type: 'text', title: 'Paragraph (Spanish)', rows: 4 }),
    defineField({ name: 'list', type: 'array', title: 'Bullet List', of: [{ type: 'string' }] }),
    defineField({ name: 'listEs', type: 'array', title: 'Bullet List (Spanish)', of: [{ type: 'string' }] }),
    defineField({ name: 'calloutTitle', type: 'string', title: 'Callout Title' }),
    defineField({ name: 'calloutTitleEs', type: 'string', title: 'Callout Title (Spanish)' }),
    defineField({ name: 'calloutText', type: 'text', title: 'Callout Text', rows: 4 }),
    defineField({ name: 'calloutTextEs', type: 'text', title: 'Callout Text (Spanish)', rows: 4 }),
  ],
}

const sectionObject = {
  type: 'object',
  fields: [
    defineField({ name: 'icon', type: 'string', title: 'Icon Key (cards layout)' }),
    defineField({ name: 'heading', type: 'string', title: 'Heading' }),
    defineField({ name: 'headingEs', type: 'string', title: 'Heading (Spanish)' }),
    defineField({ name: 'blocks', type: 'array', title: 'Blocks', of: [blockObject] }),
  ],
}

export default defineType({
  name: 'legalPage',
  title: 'Legal Page',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page Key',
      type: 'string',
      description: 'privacy or terms.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      description: 'cards (privacy) or steps (terms).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'title', title: 'Page Title (H1)', type: 'string' }),
    defineField({ name: 'titleEs', title: 'Page Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaTitleEs', title: 'Meta Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaDescriptionEs', title: 'Meta Description (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'ogDescription', title: 'Open Graph Description', type: 'text', rows: 3 }),
    defineField({ name: 'ogDescriptionEs', title: 'Open Graph Description (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'updated', title: 'Last Updated Line', type: 'string' }),
    defineField({ name: 'updatedEs', title: 'Last Updated Line (Spanish)', type: 'string' }),
    defineField({ name: 'backText', title: 'Back Link Text', type: 'string' }),
    defineField({ name: 'backTextEs', title: 'Back Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'headerIcon', title: 'Header Icon Key', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro Paragraph', type: 'text', rows: 4 }),
    defineField({ name: 'introEs', title: 'Intro Paragraph (Spanish)', type: 'text', rows: 4 }),
    defineField({ name: 'sections', title: 'Sections / Steps', type: 'array', of: [sectionObject] }),
    defineField({
      name: 'contactCard',
      title: 'Contact Card',
      type: 'object',
      fields: [
        defineField({ name: 'icon', type: 'string', title: 'Icon Key' }),
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'titleEs', type: 'string', title: 'Title (Spanish)' }),
        defineField({ name: 'text', type: 'text', title: 'Text', rows: 3 }),
        defineField({ name: 'textEs', type: 'text', title: 'Text (Spanish)', rows: 3 }),
        defineField({ name: 'emailLabel', type: 'string', title: 'Email Label' }),
        defineField({ name: 'emailLabelEs', type: 'string', title: 'Email Label (Spanish)' }),
        defineField({ name: 'phoneLabel', type: 'string', title: 'Phone Label' }),
        defineField({ name: 'phoneLabelEs', type: 'string', title: 'Phone Label (Spanish)' }),
        defineField({ name: 'mailLabel', type: 'string', title: 'Mail Label (privacy only)' }),
        defineField({ name: 'mailLabelEs', type: 'string', title: 'Mail Label (Spanish)' }),
        defineField({ name: 'buttonText', type: 'string', title: 'Button Text (privacy only)' }),
        defineField({ name: 'buttonTextEs', type: 'string', title: 'Button Text (Spanish)' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'page' },
  },
})
