export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '615b0ae0b87f01223c124576',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a9n2tofs',
                  apiId: 'bbd838e5-4c24-427a-b9f5-2a073b2732b3'
                },
                {
                  buildHookId: '615b0ae06cb2841f9c637e11',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ioffyv98',
                  apiId: '8946308a-34dc-4548-9658-2fde7954e1ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RickTurpin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ioffyv98.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
