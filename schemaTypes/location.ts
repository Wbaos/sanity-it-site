import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Service Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Location Name',
      type: 'string',
      description: 'e.g., "Miami IT Support"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'city',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      initialValue: 'Florida'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Optimized title for search engines'
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Brief description for search results'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services available in this location'
    }),
    defineField({
      name: 'neighborhoods',
      title: 'Neighborhoods Served',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Areas and neighborhoods covered'
    }),
    defineField({
      name: 'testimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Customer Name', validation: (Rule: any) => Rule.required() },
          { name: 'text', type: 'text', title: 'Testimonial', validation: (Rule: any) => Rule.required() },
          { name: 'rating', type: 'number', title: 'Rating (1-5)', validation: (Rule: any) => Rule.required().min(1).max(5) }
        ]
      }]
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value', validation: (Rule: any) => Rule.required() },
          { name: 'label', type: 'string', title: 'Label', validation: (Rule: any) => Rule.required() }
        ],
        preview: {
          select: {
            value: 'value',
            label: 'label'
          },
          prepare({ value, label }: any) {
            return {
              title: `${value} ${label}`
            }
          }
        }
      }],
      description: 'Key metrics for this location (e.g., "500+ Clients Helped")'
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'Call-to-action section title'
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      description: 'Call-to-action section description'
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Local contact number'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Local contact email'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Show/hide this location on the website',
      initialValue: true
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street Address' },
        { name: 'suite', type: 'string', title: 'Suite/Unit' },
        { name: 'zipCode', type: 'string', title: 'ZIP Code' }
      ]
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'weekday', type: 'string', title: 'Weekday Hours', placeholder: 'Mon-Fri: 8AM - 8PM' },
        { name: 'weekend', type: 'string', title: 'Weekend Hours', placeholder: 'Sat-Sun: 9AM - 6PM' },
        { name: 'emergency', type: 'string', title: 'Emergency Info', placeholder: '24/7 Emergency Available' }
      ]
    }),
    defineField({
      name: 'serviceRadius',
      title: 'Service Radius',
      type: 'object',
      fields: [
        { name: 'miles', type: 'number', title: 'Radius in Miles', initialValue: 45 },
        { name: 'population', type: 'string', title: 'Population Served', placeholder: '2.7 million' }
      ]
    }),
    defineField({
      name: 'whyChooseUs',
      title: 'Why Choose Us',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of reasons why customers should choose this location'
    }),
    defineField({
    name: 'popularServices',
    title: 'Popular Services',
    type: 'array',
    of: [{
        type: 'object',
        fields: [
        {
            name: 'service',
            title: 'Service',
            type: 'reference',
            to: [{ type: 'service' }],
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'priceOverride',
            title: 'Price Override',
            type: 'string',
            description: 'Optional: Override the default service price for this location'
        }
        ],
        preview: {
        select: {
            serviceName: 'service.name',
            servicePrice: 'service.price',
            priceOverride: 'priceOverride',
            serviceIcon: 'service.icon'
        },
        prepare({ serviceName, servicePrice, priceOverride, serviceIcon }: any) {
            return {
            title: serviceName || 'Select a service',
            subtitle: priceOverride || servicePrice || 'No price set',
            media: serviceIcon ? undefined : undefined // You can add an icon here if needed
            }
        }
        }
    }],
    description: 'Select popular services to feature for this location'
    }),
    defineField({
      name: 'badges',
      title: 'Trust Badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Trust badges to display (e.g., "Licensed", "Insured", "5-Star Rated")',
      initialValue: ['Licensed', 'Insured', '5-Star Rated']
    })
  ],
  preview: {
    select: {
      title: 'city',
      subtitle: 'state',
      active: 'isActive'
    },
    prepare({ title, subtitle, active }) {
      return {
        title: `${title}, ${subtitle}`,
        subtitle: active ? '✓ Active' : '✗ Inactive'
      }
    }
  },
  orderings: [
    {
      title: 'City A-Z',
      name: 'cityAsc',
      by: [{ field: 'city', direction: 'asc' }]
    }
  ]
})
