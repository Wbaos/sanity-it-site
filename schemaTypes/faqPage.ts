import { defineField, defineType } from 'sanity'

// FAQ page content (EN + ES), exact current copy.
// One document, id `faq-page`.
// The intro carries two inline links (sprinkler-repair-miami page and the
// home-security service page); it is split into before / link / between /
// link / after so the template renders them exactly where they are today.
// The contact line at the bottom links to the contact page the same way.

const faqObject = {
  type: 'object',
  fields: [
    defineField({ name: 'q', type: 'string', title: 'Question' }),
    defineField({ name: 'a', type: 'text', title: 'Answer', rows: 4 }),
  ],
}

export default defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title (H1)', type: 'string' }),
    defineField({ name: 'titleEs', title: 'Page Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaTitleEs', title: 'Meta Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaDescriptionEs', title: 'Meta Description (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'introBefore', title: 'Intro Before First Link', type: 'text', rows: 3 }),
    defineField({ name: 'introLink1Text', title: 'Intro First Link Text', type: 'string' }),
    defineField({ name: 'introBetween', title: 'Intro Between Links', type: 'string' }),
    defineField({ name: 'introLink2Text', title: 'Intro Second Link Text', type: 'string' }),
    defineField({ name: 'introAfter', title: 'Intro After Second Link', type: 'text', rows: 3 }),
    defineField({ name: 'introBeforeEs', title: 'Intro Before First Link (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'introLink1TextEs', title: 'Intro First Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'introBetweenEs', title: 'Intro Between Links (Spanish)', type: 'string' }),
    defineField({ name: 'introLink2TextEs', title: 'Intro Second Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'introAfterEs', title: 'Intro After Second Link (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [faqObject] }),
    defineField({ name: 'faqsEs', title: 'FAQs (Spanish)', type: 'array', of: [faqObject] }),

    defineField({ name: 'contactBefore', title: 'Contact Line Before Link', type: 'text', rows: 3 }),
    defineField({ name: 'contactLinkText', title: 'Contact Link Text', type: 'string' }),
    defineField({ name: 'contactAfter', title: 'Contact Line After Link', type: 'text', rows: 3 }),
    defineField({ name: 'contactBeforeEs', title: 'Contact Line Before Link (Spanish)', type: 'text', rows: 3 }),
    defineField({ name: 'contactLinkTextEs', title: 'Contact Link Text (Spanish)', type: 'string' }),
    defineField({ name: 'contactAfterEs', title: 'Contact Line After Link (Spanish)', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
