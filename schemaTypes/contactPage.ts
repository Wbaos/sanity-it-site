import { defineField, defineType } from 'sanity'

// Contact page content (EN + ES). Interface strings (form labels,
// placeholders, buttons, status messages) stay in code by design; only
// page content lives here. One document, id `contact-page`.

const faqObject = {
  type: 'object',
  fields: [
    defineField({ name: 'q', type: 'string', title: 'Question' }),
    defineField({ name: 'a', type: 'text', title: 'Answer', rows: 4 }),
  ],
}

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaTitleEs', title: 'Meta Title (Spanish)', type: 'string' }),
    defineField({ name: 'metaDescriptionEs', title: 'Meta Description (Spanish)', type: 'text', rows: 3 }),

    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'heroTitleEs', title: 'Hero Title (Spanish)', type: 'string' }),
    defineField({ name: 'heroSubtitleEs', title: 'Hero Subtitle (Spanish)', type: 'text', rows: 3 }),

    defineField({
      name: 'stats',
      title: 'Support Stats',
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

    defineField({ name: 'optionsTitle', title: 'Support Options Title', type: 'string' }),
    defineField({ name: 'optionsTitleEs', title: 'Support Options Title (Spanish)', type: 'string' }),

    defineField({
      name: 'cards',
      title: 'Support Option Cards',
      description: 'Icon key drives the link in code: phone = tel:, mail = mailto:, faq = #contact-faq, quote = quote page.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', type: 'string', title: 'Icon Key (phone | mail | faq | quote)' }),
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'titleEs', type: 'string', title: 'Title (Spanish)' }),
          defineField({ name: 'text', type: 'string', title: 'Text' }),
          defineField({ name: 'textEs', type: 'string', title: 'Text (Spanish)' }),
          defineField({ name: 'link', type: 'string', title: 'Link Line (phone number / email)' }),
          defineField({ name: 'meta', type: 'string', title: 'Meta Line' }),
          defineField({ name: 'metaEs', type: 'string', title: 'Meta Line (Spanish)' }),
        ],
      }],
    }),

    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [faqObject] }),
    defineField({ name: 'faqsEs', title: 'FAQs (Spanish)', type: 'array', of: [faqObject] }),

    defineField({ name: 'sideTitle', title: 'Other Ways Title', type: 'string' }),
    defineField({ name: 'sideSubtitle', title: 'Other Ways Subtitle', type: 'string' }),
    defineField({ name: 'sideTitleEs', title: 'Other Ways Title (Spanish)', type: 'string' }),
    defineField({ name: 'sideSubtitleEs', title: 'Other Ways Subtitle (Spanish)', type: 'string' }),

    defineField({ name: 'hoursTitle', title: 'Service Hours Title', type: 'string' }),
    defineField({ name: 'hoursTitleEs', title: 'Service Hours Title (Spanish)', type: 'string' }),
    defineField({ name: 'dayMonFri', title: 'Monday–Friday Label', type: 'string' }),
    defineField({ name: 'dayMonFriEs', title: 'Monday–Friday Label (Spanish)', type: 'string' }),
    defineField({ name: 'daySat', title: 'Saturday Label', type: 'string' }),
    defineField({ name: 'daySatEs', title: 'Saturday Label (Spanish)', type: 'string' }),
    defineField({ name: 'daySun', title: 'Sunday Label', type: 'string' }),
    defineField({ name: 'daySunEs', title: 'Sunday Label (Spanish)', type: 'string' }),
    defineField({ name: 'emergencyNote', title: 'Emergency Note', type: 'string' }),
    defineField({ name: 'emergencyNoteEs', title: 'Emergency Note (Spanish)', type: 'string' }),

    defineField({ name: 'locationTitle', title: 'Service Area Title', type: 'string' }),
    defineField({ name: 'locationTitleEs', title: 'Service Area Title (Spanish)', type: 'string' }),
    defineField({ name: 'locationCity', title: 'Service Area City', type: 'string' }),
    defineField({ name: 'locationCityEs', title: 'Service Area City (Spanish)', type: 'string' }),
    defineField({ name: 'locationMuted', title: 'Service Area Muted Line', type: 'string' }),
    defineField({ name: 'locationMutedEs', title: 'Service Area Muted Line (Spanish)', type: 'string' }),
    defineField({ name: 'locationsLink', title: 'View All Locations Link', type: 'string' }),
    defineField({ name: 'locationsLinkEs', title: 'View All Locations Link (Spanish)', type: 'string' }),

    defineField({ name: 'emergencyTitle', title: 'Emergency Support Title', type: 'string' }),
    defineField({ name: 'emergencyTitleEs', title: 'Emergency Support Title (Spanish)', type: 'string' }),
    defineField({ name: 'emergencyText', title: 'Emergency Support Text', type: 'string' }),
    defineField({ name: 'emergencyTextEs', title: 'Emergency Support Text (Spanish)', type: 'string' }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page' }
    },
  },
})
