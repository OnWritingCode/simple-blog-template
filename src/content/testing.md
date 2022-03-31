---
title: Testing
date: 2022-03-27
preview: Testing out what syntax highlighting looks like with Shiki.
setup: | 
  import TestComponent from './TestComponent.astro';
---

This is a blog post.


## Astro Example:

You can import components in Markdown too!
```astro
---
setup: | 
  import TestComponent from './TestComponent.astro';
---

<TestComponent />
```

Live Demo:
<TestComponent />

## CSS Reset

Here's a [custom CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) by Josh W. Comeau:

```css
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
	box-sizing: border-box;
  }
  /*
	2. Remove default margin
  */
  * {
	margin: 0;
  }
  /*
	3. Allow percentage-based heights in the application
  */
  html, body {
	height: 100%;
  }
  /*
	Typographic tweaks!
	4. Add accessible line-height
	5. Improve text rendering
  */
  body {
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
  }
  /*
	6. Improve media defaults
  */
  img, picture, video, canvas, svg {
	display: block;
	max-width: 100%;
  }
  /*
	7. Remove built-in form typography styles
  */
  input, button, textarea, select {
	font: inherit;
  }
  /*
	8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
	overflow-wrap: break-word;
  }
  ```


  #### Examples

  * @TODO