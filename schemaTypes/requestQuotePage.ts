import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'requestQuotePage',
  title: 'Request Quote Page',
  type: 'document',

  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title (Request a Free Inspection)',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleEs',
      title: 'Hero Title (Spanish)',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroSubtitleEs',
      title: 'Hero Subtitle (Spanish)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'steps',
      title: 'How It Works Steps (in order)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'titleEs', type: 'string', title: 'Title (Spanish)' }),
          defineField({ name: 'desc', type: 'text', title: 'Description', rows: 3 }),
          defineField({ name: 'descEs', type: 'text', title: 'Description (Spanish)', rows: 3 }),
        ],
      }],
    }),
    defineField({
      name: 'sidebarBenefitsTitle',
      title: 'Sidebar Benefits Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),

    defineField({
      name: 'sidebarBenefits',
      title: 'Sidebar Benefits',
      type: 'array',
      of: [
        {
          name: 'benefit',
          title: 'Benefit',
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon (PNG)',
              type: 'image',
              description: 'Upload or select a PNG icon.',
              options: {
                hotspot: true,
                accept: 'image/png',
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt text',
                  type: 'string',
                  description: 'Short description for accessibility (optional).',
                }),
              ],
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    }),

    defineField({
      name: 'socialProof',
      title: 'Social Proof',
      type: 'object',
      fields: [
        defineField({
          name: 'quotesThisMonthText',
          title: 'Quotes This Month Text',
          type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Social Proof Icon (PNG)',
            type: 'image',
            options: { hotspot: true, accept: 'image/png' },
            fields: [
                defineField({
                name: 'alt',
                title: 'Alt text',
                type: 'string',
                }),
            ],
            }),
        defineField({
          name: 'ratingValue',
          title: 'Rating Value',
          type: 'number',
        }),
        defineField({
          name: 'reviewsText',
          title: 'Reviews Text',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'immediateHelp',
      title: 'Immediate Help',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
          description: 'Used for tel:',
        }),
        defineField({
          name: 'phoneIcon',
          title: 'Phone Icon (PNG)',
          type: 'image',
          description: 'Upload or select a PNG icon for the phone action.',
          options: {
            hotspot: true,
            accept: 'image/png',
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'phoneLabel',
          title: 'Phone Label',
          type: 'string',
        }),
        defineField({
          name: 'phoneSubLabel',
          title: 'Phone Sub-label',
          type: 'string',
        }),
        defineField({
          name: 'chatLabel',
          title: 'Chat Label',
          type: 'string',
        }),
        defineField({
          name: 'chatSubLabel',
          title: 'Chat Sub-label',
          type: 'string',
        }),
        
        defineField({
            name: "chatUrl",
            title: "Chat URL",
            type: "url",
            validation: (Rule: any) =>
                Rule.uri({
                scheme: ["http", "https", "mailto"],
                }),
            }),
        defineField({
          name: 'chatIcon',
          title: 'Chat Icon (PNG)',
          type: 'image',
          description: 'Upload or select a PNG icon for the chat action.',
          options: {
            hotspot: true,
            accept: 'image/png',
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Request Quote Page'}
    },
  },
})
