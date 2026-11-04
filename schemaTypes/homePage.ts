import { defineField, defineType } from 'sanity'

// Home page content (EN + ES), exact current copy. Interface strings
// (CTA labels, button labels, video play aria labels, form labels) and
// media URLs stay in code by design; only page copy lives here.
// One document, id `home-page`. Hero stats and Why Choose Us cards keep
// their code order and icons; only their text comes from here. The SEO
// intro first paragraph keeps its internal link: the link text is stored
// separately and the component renders it as a link, as today.
export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title (internal)', type: 'string' }),

    defineField({ name: 'heroTitleLine1', title: 'Hero Title Line 1', type: 'string' }),
    defineField({ name: 'heroTitleLine1Es', title: 'Hero Title Line 1 (Spanish)', type: 'string' }),
    defineField({ name: 'heroTitleLine2', title: 'Hero Title Line 2', type: 'string' }),
    defineField({ name: 'heroTitleLine2Es', title: 'Hero Title Line 2 (Spanish)', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'heroSubtitleEs', title: 'Hero Subtitle (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'heroBadgeText', title: 'Hero Badge Text', type: 'string' }),
    defineField({ name: 'heroBadgeTextEs', title: 'Hero Badge Text (Spanish)', type: 'string' }),
    defineField({ name: 'heroImageAlt', title: 'Hero Image Alt', type: 'string' }),
    defineField({ name: 'heroImageAltEs', title: 'Hero Image Alt (Spanish)', type: 'string' }),

    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'string', title: 'Value' }),
          defineField({ name: 'valueEs', type: 'string', title: 'Value (Spanish)' }),
          defineField({ name: 'label', type: 'string', title: 'Label' }),
          defineField({ name: 'labelEs', type: 'string', title: 'Label (Spanish)' }),
        ],
      }],
    }),

    defineField({ name: 'seoIntroTitle', title: 'SEO Intro Title', type: 'string' }),
    defineField({ name: 'seoIntroTitleEs', title: 'SEO Intro Title (Spanish)', type: 'string' }),
    defineField({ name: 'seoIntroP1Before', title: 'SEO Intro Paragraph 1 (before link)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP1BeforeEs', title: 'SEO Intro Paragraph 1 (before link, Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP1LinkText', title: 'SEO Intro Paragraph 1 (link text)', type: 'string' }),
    defineField({ name: 'seoIntroP1LinkTextEs', title: 'SEO Intro Paragraph 1 (link text, Spanish)', type: 'string' }),
    defineField({ name: 'seoIntroP1After', title: 'SEO Intro Paragraph 1 (after link)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP1AfterEs', title: 'SEO Intro Paragraph 1 (after link, Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP2', title: 'SEO Intro Paragraph 2', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP2Es', title: 'SEO Intro Paragraph 2 (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP3', title: 'SEO Intro Paragraph 3', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP3Es', title: 'SEO Intro Paragraph 3 (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP4', title: 'SEO Intro Paragraph 4', type: 'text', rows: 3 }),
    defineField({ name: 'seoIntroP4Es', title: 'SEO Intro Paragraph 4 (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'whyTitle', title: 'Why Choose Us Title (contains CallTechCare)', type: 'string' }),
    defineField({ name: 'whyTitleEs', title: 'Why Choose Us Title (Spanish)', type: 'string' }),
    defineField({ name: 'whySubtitle', title: 'Why Choose Us Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'whySubtitleEs', title: 'Why Choose Us Subtitle (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'whyPhotoAlt', title: 'Why Choose Us Photo Alt', type: 'string' }),
    defineField({ name: 'whyPhotoAltEs', title: 'Why Choose Us Photo Alt (Spanish)', type: 'string' }),
    defineField({
      name: 'whyCards',
      title: 'Why Choose Us Cards (in code icon order)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'titleEs', type: 'string', title: 'Title (Spanish)' }),
          defineField({ name: 'text', type: 'text', title: 'Text', rows: 3 }),
          defineField({ name: 'textEs', type: 'text', title: 'Text (Spanish)', rows: 3 }),
        ],
      }],
    }),

    defineField({ name: 'videoHeading', title: 'Home Video Heading', type: 'string' }),
    defineField({ name: 'videoHeadingEs', title: 'Home Video Heading (Spanish)', type: 'string' }),
    defineField({ name: 'videoSubtitle', title: 'Home Video Subtitle', type: 'string' }),
    defineField({ name: 'videoSubtitleEs', title: 'Home Video Subtitle (Spanish)', type: 'string' }),

    defineField({ name: 'contactHeadline', title: 'Home Contact Headline', type: 'string' }),
    defineField({ name: 'contactHeadlineEs', title: 'Home Contact Headline (Spanish)', type: 'string' }),
    defineField({ name: 'contactSubtitle', title: 'Home Contact Subtitle', type: 'string' }),
    defineField({ name: 'contactSubtitleEs', title: 'Home Contact Subtitle (Spanish)', type: 'string' }),
  ],
})
