export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603da7640593182fb765d625',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-wxmsgcmn',
                  apiId: 'ce49d8b4-d8da-480d-aa1a-1eb0ed8b77ff'
                },
                {
                  buildHookId: '603da7649e097434c20b7844',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ys1kkpyn',
                  apiId: '476acde3-1513-48f0-b567-0ad348b77709'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Green-Zero-Development/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ys1kkpyn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
