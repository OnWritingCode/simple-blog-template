# 🛸 Simple Blog Template

[Demo](https://simple-blog-template.netlify.app/) 👀 

This is a starter template for starting a blog with Astro.js with a few basic utilities to get you started.

**Features**

* Full Markdown support.
* Separation between Markdown files and Astro pages 
* Drafts directory for posts that aren't published yet 
* Syntax Highlighting with Shiki 
* Global styles directory 
* RSS 2.0 generation 

**Languages**
* TypeScript
* Sass (scss)


## 🚀 Quick Start

Setup Astro in a new project using this template:

```shell
# Initialize with the template:
npm init astro -- --template OnWritingCode/astro-blog
npm install
npm run dev
```
That's it! For Astro documentation, visit: https://docs.astro.build

## 💡 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public
└── src
    ├── components
    │   ├── layouts
    │   └── utilities
    ├── content
    ├── pages
    └── style
```

 * *pages* - This directory is significant for Astro. Files here become URLs.
 * *components* - Template parts, layouts, utilities, all go here.
 * *content* - Keep the content separate from the system for clearer separation. 
 * *style* - Global SCSS styles.
 * *public* - A directory where to place any static files that need to be used on the site.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check out [Astro documentation](https://github.com/withastro/astro) or jump into [Astro's Discord server](https://astro.build/chat).
