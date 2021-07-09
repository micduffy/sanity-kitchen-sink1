export default {
  widgets: [
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
                  buildHookId: '60e81666a275f5a39afe09b8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-1-studio-3chxmfz2',
                  apiId: 'b89c5f93-ad55-4706-8e73-728ac13c6be4'
                },
                {
                  buildHookId: '60e816668dba8a9a89d732c1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-1-web-4i7sd784',
                  apiId: '9ad79740-ef14-4e75-bd12-ad76ddec7848'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micduffy/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-1-web-4i7sd784.netlify.app', category: 'apps'}
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
