import { defineField, defineType } from 'sanity'

// About page content (EN + ES), exact current copy.
// One document, id `about-page`.
// Paragraphs with inline links are split into before / linkText / after
// so the template renders the link exactly where the current page does:
// mission links to the sprinkler-repair-miami page, CTA links to it too.
// Value titles carry their emoji, exactly as the current page shows them.

const valueObject = {
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Value Title (with emoji)' }),
    defineField({ name: 'titleEs', type: 'string', title: 'Value Title (Spanish, with emoji)' }),
    defineField({ name: 'text', type: 'text', title: 'Value Text', rows: 3 }),
    defineField({ name: 'textEs', type: 'text', title: 'Value Text (Spanish)', rows: 3 }),
  ],
}

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Hero Title (H1)', type: 'string' }),
    defineField({ name: 'titleEs', title: 'Hero Title (Spanish)', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'heroSubtitleEs', title: 'Hero Subtitle (Spanish)', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaTitleEs', title: 'Meta Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaDescriptionEs', title: 'Meta Description (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'missionHeading', title: 'Mission Heading', type: 'string' }),
    defineField({ name: 'missionHeadingEs', title: 'Mission Heading (Spanish)', type: 'string' }),
    defineField({ name: 'missionBefore', title: 'Mission Text Before Link', type: 'text', rows: 3 }),
    defineField({ name: 'missionLinkText', title: 'Mission Link Text', type: 'string' }),
    defineField({ name: 'missionAfter', title: 'Mission Text After Link', type: 'text', rows: 3 }),
    defineField({ name: 'missionBeforeEs', title: 'Mission Text Before Link (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'missionLinkTextEs', title: 'Mission Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'missionAfterEs', title: 'Mission Text After Link (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'storyHeading', title: 'Story Heading', type: 'string' }),
    defineField({ name: 'storyHeadingEs', title: 'Story Heading (Spanish)', type: 'string' }),
    defineField({ name: 'storyParagraphs', title: 'Story Paragraphs', type: 'array', of: [{ type: 'text', rows: 4 }] }),
    defineField({ name: 'storyParagraphsEs', title: 'Story Paragraphs (Spanish)', type: 'array', of: [{ type: 'text', rows: 4 }] }),

    defineField({ name: 'valuesHeading', title: 'Values Heading', type: 'string' }),
    defineField({ name: 'valuesHeadingEs', title: 'Values Heading (Spanish)', type: 'string' }),
    defineField({ name: 'values', title: 'Values', type: 'array', of: [valueObject] }),

    defineField({ name: 'ctaHeading', title: 'CTA Heading', type: 'string' }),
    defineField({ name: 'ctaHeadingEs', title: 'CTA Heading (Spanish)', type: 'string' }),
    defineField({ name: 'ctaBefore', title: 'CTA Text Before Link', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLinkText', title: 'CTA Link Text', type: 'string' }),
    defineField({ name: 'ctaAfter', title: 'CTA Text After Link', type: 'text', rows: 3 }),
    defineField({ name: 'ctaBeforeEs', title: 'CTA Text Before Link (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLinkTextEs', title: 'CTA Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'ctaAfterEs', title: 'CTA Text After Link (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'ctaButtonText', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'ctaButtonTextEs', title: 'CTA Button Text (Spanish)', type: 'string' }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
