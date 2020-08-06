export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f2b7e36b1c1ab5569be8bd9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g4mxoja3',
                  apiId: '348ed36b-e08e-49a4-a567-580f6cbfc869'
                },
                {
                  buildHookId: '5f2b7e36a66f6e741b92d21c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qkbgoh36',
                  apiId: '8920c9fd-6c28-469b-b5c3-7d0696449c0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DongeunPaeng/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qkbgoh36.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
