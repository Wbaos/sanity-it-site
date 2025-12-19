import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'assessmentQuestion',
  title: 'Assessment Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'questionType',
      title: 'Question Type',
      type: 'string',
      options: {
        list: [
          { title: 'Multiple Choice', value: 'multiple' },
          { title: 'Yes/No', value: 'boolean' },
          { title: 'Scale (1-5)', value: 'scale' },
          { title: 'Scale (1-10)', value: 'scale10' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'options',
      title: 'Answer Options',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Option Text',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'score',
            title: 'Score Value',
            type: 'number',
            description: 'Points awarded for this answer',
            validation: Rule => Rule.required().min(0).max(100)
          }
        ]
      }],
      hidden: ({ parent }) => parent?.questionType === 'scale' || parent?.questionType === 'scale10'
    }),
    defineField({
      name: 'weight',
      title: 'Question Weight',
      type: 'number',
      description: 'Importance multiplier (1 = normal, 2 = twice as important)',
      initialValue: 1,
      validation: Rule => Rule.required().min(0.5).max(5)
    }),
    defineField({
      name: 'helpText',
      title: 'Help Text',
      type: 'text',
      description: 'Additional context or explanation for the question'
    })
  ],
  preview: {
    select: {
      title: 'question',
      type: 'questionType'
    },
    prepare({ title, type }) {
      return {
        title: title,
        subtitle: type
      }
    }
  }
})
