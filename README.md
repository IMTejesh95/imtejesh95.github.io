<div align="center">
  <!-- <h1><a href="https://mahmad.me" target="_blank">Mahmad.me</a></h1> -->
  <h2>Portfolio website to show skills, experience, etc.</h2>
</div>

## Built with
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Highlight Blog Content**: [prismjs](https://prismjs.com/)
- **Markdown Processor**: [remark](https://remark.js.org/)
- **ORM**: [prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Api's**:
  - [Dev.to](https://dev.to/api)
  - [Github](https://api.github.com)

## Overview

- `components/*` - Contains all components related to pages (blog, projects, about, etc).
  - `shared/*` - All reusable components like header, footer etc.
  - `layouts/*` - The different page layouts.
  -  `theme/*` - Manage theme of site. 
- `data/*` - Data that used for blog posts, projects etc.
- `lib/*` - Collection of helpful utilities or code for external services like devto api.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction).
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `prisma/*` - My Prisma schema, which uses a Postgresql database.
- `public/*` - Static assets including audios, fonts and images.


## Running Locally

```sh
git clone https://github.com/IMTejesh95/portfolio-nextjs-typescript.git
cd portfolio-nextjs-typescript && yarn install
yarn dev
```

The above commands will start the application on [http://localhost:3000/](http://localhost:3000)


<!-- ## Screens
### Home 
![Home Screen](/public/assets/images/screens/home_page.png)
### Blog
![Skills Screen](/public/assets/images/screens/blog_page.png) -->
