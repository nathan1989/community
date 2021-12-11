export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
    repo: 'nathan1989/community',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'playlists',
      label: 'Playlists',
      slug: '{{day}}-{{month}}-{{year}}-{{slug}}',
      folder: "content/playlists",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: 'Publish Date', name: 'date', widget: 'datetime', required: true },
        { label: "Description", name: "description", widget: "string", required: false },
        { label: "Featured Image", name: "thumbnail", widget: "image", required: false },
        { label: "Playlist", name: "playlist", widget: "markdown", required: true },
        { label: "Lyrics", name: "lyrics", widget: "markdown", required: true },
      ]
    },
  ],
};
