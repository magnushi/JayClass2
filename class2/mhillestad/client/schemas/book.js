export default {
    name: 'book',
    title: 'Book',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'}
      },
      {
        name: 'coverImage',
        title: 'Cover image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'reviewedAt',
        title: 'Reviewed at',
        type: 'datetime'
      },
      {
        name: 'bookReview',
        title: 'Book Review',
        type: 'blockContent'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage'
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`
        })
      }
    }
  }
  