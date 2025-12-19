import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'assessmentConfig',
  title: 'IT Assessment Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Assessment Title',
      type: 'string',
      description: 'Main heading for the assessment',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Brief description shown below the title'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Show/hide this assessment on the website',
      initialValue: true
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
      name: 'estimatedTime',
      title: 'Estimated Time (minutes)',
      type: 'number',
      description: 'How long it takes to complete',
      initialValue: 5
    }),
    defineField({
      name: 'categories',
      title: 'Assessment Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'assessmentCategory' }] }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'recommendations',
      title: 'Result Recommendations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'assessmentRecommendation' }] }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }),
    defineField({
      name: 'socialSharing',
      title: 'Social Sharing',
      type: 'object',
      fields: [
        {
          name: 'shareTitle',
          title: 'Share Title',
          type: 'string',
          description: 'Title when shared on social media'
        },
        {
          name: 'shareDescription',
          title: 'Share Description',
          type: 'text',
          description: 'Description when shared on social media'
        },
        {
          name: 'shareImage',
          title: 'Share Image',
          type: 'image',
          description: 'Image displayed when shared'
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      active: 'isActive'
    },
    prepare({ title, active }) {
      return {
        title: title,
        subtitle: active ? '✓ Active' : '✗ Inactive'
      }
    }
  }
})
