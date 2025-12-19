import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'assessmentRecommendation',
  title: 'Assessment Recommendations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Recommendation Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'scoreRange',
      title: 'Score Range',
      type: 'object',
      fields: [
        {
          name: 'min',
          title: 'Minimum Score',
          type: 'number',
          validation: Rule => Rule.required().min(0).max(100)
        },
        {
          name: 'max',
          title: 'Maximum Score',
          type: 'number',
          validation: Rule => Rule.required().min(0).max(100)
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'level',
      title: 'Maturity Level',
      type: 'string',
      options: {
        list: [
          { title: 'Critical - Immediate Action Required', value: 'critical' },
          { title: 'Low - Needs Improvement', value: 'low' },
          { title: 'Medium - Good Foundation', value: 'medium' },
          { title: 'High - Well Optimized', value: 'high' },
          { title: 'Excellent - Industry Leading', value: 'excellent' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      description: 'Brief overview of this maturity level',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'keyFindings',
      title: 'Key Findings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Bullet points highlighting main observations'
    }),
    defineField({
      name: 'recommendations',
      title: 'Actionable Recommendations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Recommendation',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'priority',
            title: 'Priority',
            type: 'string',
            options: {
              list: ['High', 'Medium', 'Low']
            }
          },
          {
            name: 'estimatedImpact',
            title: 'Estimated Impact',
            type: 'string',
            description: 'Expected benefit'
          }
        ]
      }]
    }),
    defineField({
      name: 'suggestedServices',
      title: 'Suggested Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Link to your services that can help'
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
      description: 'Custom CTA button text',
      initialValue: 'Get a Free Consultation'
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call-to-Action Link',
      type: 'string',
      description: 'Where the CTA button leads',
      initialValue: '/contact'
    })
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level',
      min: 'scoreRange.min',
      max: 'scoreRange.max'
    },
    prepare({ title, level, min, max }) {
      return {
        title: title,
        subtitle: `${level} (${min}-${max}%)`
      }
    }
  }
})
