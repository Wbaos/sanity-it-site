import { defineField, defineType } from 'sanity'

// Business data shown across the site (phone, email, address, hours),
// exactly as displayed today. One document, id `site-settings`.
// The street address is only used where it already appears today
// (organization JSON-LD); it is never rendered as visible page text
// anywhere new. Hours labels carry EN + ES because the footer and the
// location sidebar render them per locale.

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'businessName', title: 'Business Name', type: 'string' }),
    defineField({ name: 'phoneDisplay', title: 'Phone (Display, e.g. (786) 366-2729)', type: 'string' }),
    defineField({ name: 'phoneTel', title: 'Phone (tel: link, e.g. +17863662729)', type: 'string' }),
    defineField({ name: 'phoneIntl', title: 'Phone (JSON-LD, e.g. +1-786-366-2729)', type: 'string' }),
    defineField({ name: 'phoneCard', title: 'Phone (Contact Card, e.g. +1 (786) 366-2729)', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'streetAddress', title: 'Street Address (JSON-LD only)', type: 'string' }),
    defineField({ name: 'city', title: 'City', type: 'string' }),
    defineField({ name: 'region', title: 'State / Region', type: 'string' }),
    defineField({ name: 'postalCode', title: 'Postal Code', type: 'string' }),
    defineField({ name: 'country', title: 'Country Code', type: 'string' }),
    defineField({ name: 'geoLat', title: 'Geo Latitude', type: 'number' }),
    defineField({ name: 'geoLng', title: 'Geo Longitude', type: 'number' }),
    defineField({ name: 'hoursWeekdayLabel', title: 'Weekday Hours Label', type: 'string' }),
    defineField({ name: 'hoursWeekdayLabelEs', title: 'Weekday Hours Label (Spanish)', type: 'string' }),
    defineField({ name: 'hoursWeekdayTime', title: 'Weekday Hours Time', type: 'string' }),
    defineField({ name: 'hoursWeekendLabel', title: 'Weekend Hours Label', type: 'string' }),
    defineField({ name: 'hoursWeekendLabelEs', title: 'Weekend Hours Label (Spanish)', type: 'string' }),
    defineField({ name: 'hoursWeekendTime', title: 'Weekend Hours Time', type: 'string' }),
    defineField({ name: 'hoursWeekdayOpens', title: 'Weekday Opens (JSON-LD, HH:MM)', type: 'string' }),
    defineField({ name: 'hoursWeekdayCloses', title: 'Weekday Closes (JSON-LD, HH:MM)', type: 'string' }),
    defineField({ name: 'hoursWeekendOpens', title: 'Weekend Opens (JSON-LD, HH:MM)', type: 'string' }),
    defineField({ name: 'hoursWeekendCloses', title: 'Weekend Closes (JSON-LD, HH:MM)', type: 'string' }),
    defineField({ name: 'serviceAreaLine', title: 'Footer Service Area Line', type: 'string' }),
    defineField({ name: 'serviceAreaLineEs', title: 'Footer Service Area Line (Spanish)', type: 'string' }),
    // Google review summary, shown across the site until the Business
    // Profile Reviews API is approved. Interim only: once the site reads
    // the count and rating straight from Google, these fields go away.
    defineField({
      name: 'googleRating',
      title: 'Google Rating (0–5)',
      type: 'number',
      description: 'Average Google rating, e.g. 5.0. Interim field — removed once the site reads Google directly.',
      validation: (Rule) => Rule.min(0).max(5),
    }),
    defineField({
      name: 'googleReviewCount',
      title: 'Google Review Count',
      type: 'number',
      description: 'Total number of Google reviews, e.g. 27. Interim field — removed once the site reads Google directly.',
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'googleReviews',
      title: 'Google Reviews (manual, interim)',
      type: 'array',
      description: 'Review texts copied manually from Google. Interim only — removed once the site reads Google directly.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Reviewer Name', type: 'string' }),
            defineField({
              name: 'rating',
              title: 'Rating (1–5)',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5),
            }),
            defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 3 }),
            defineField({
              name: 'date',
              title: 'Review Date (as shown on Google)',
              type: 'string',
              description: 'Relative date exactly as shown on Google, e.g. "a week ago". Never invent a calendar date.',
            }),
            defineField({ name: 'verified', title: 'Verified Google Review', type: 'boolean' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
