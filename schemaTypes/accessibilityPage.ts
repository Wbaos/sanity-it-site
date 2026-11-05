import { defineField, defineType } from 'sanity'

// Accessibility statement content (EN + ES), exact current copy.
// One document, id `accessibility-page`.
// Layout mirrors the current page: header with updated line and intro,
// then cards with an icon key, heading, paragraphs, an optional highlight
// line and an optional bullet list. The feedback card's contact line
// (email + phone) is rendered from the siteSettings document, not stored
// here. The last card (Formal Concerns) carries the contact-card styling.

const sectionObject = {
  type: 'object',
  fields: [
    defineField({ name: 'icon', type: 'string', title: 'Icon Key' }),
    defineField({ name: 'heading', type: 'string', title: 'Heading' }),
    defineField({ name: 'headingEs', type: 'string', title: 'Heading (Spanish)' }),
    defineField({ name: 'paragraphs', type: 'array', title: 'Paragraphs', of: [{ type: 'text', rows: 4 }] }),
    defineField({ name: 'paragraphsEs', type: 'array', title: 'Paragraphs (Spanish)', of: [{ type: 'text', rows: 4 }] }),
    defineField({ name: 'highlight', type: 'string', title: 'Highlight Line' }),
    defineField({ name: 'highlightEs', type: 'string', title: 'Highlight Line (Spanish)' }),
    defineField({ name: 'list', type: 'array', title: 'Bullet List', of: [{ type: 'string' }] }),
    defineField({ name: 'listEs', type: 'array', title: 'Bullet List (Spanish)', of: [{ type: 'string' }] }),
    defineField({ name: 'isContactCard', type: 'boolean', title: 'Contact Card Styling (Formal Concerns card)' }),
  ],
}

export default defineType({
  name: 'accessibilityPage',
  title: 'Accessibility Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title (H1)', type: 'string' }),
    defineField({ name: 'titleEs', title: 'Page Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaTitleEs', title: 'Meta Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaDescriptionEs', title: 'Meta Description (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'updated', title: 'Last Updated Line', type: 'string' }),
    defineField({ name: 'updatedEs', title: 'Last Updated Line (Spanish)', type: 'string' }),
    defineField({ name: 'backText', title: 'Back Link Text', type: 'string' }),
    defineField({ name: 'backTextEs', title: 'Back Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro Paragraph (brand name is bolded by the template)', type: 'text', rows: 4 }),
    defineField({ name: 'introEs', title: 'Intro Paragraph (Spanish)', type: 'text', rows: 4 }),
    defineField({ name: 'sections', title: 'Sections / Cards', type: 'array', of: [sectionObject] }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
