import astroRemark from '@astrojs/markdown-remark';

export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.
	renderers: [],
	markdownOptions: {

		render: [
			astroRemark,
			{
				remarkPlugins: [],
				rehypePlugins: [
					'rehype-slug',
					['rehype-autolink-headings', { behavior: 'wrap' }],
				],

				// Pick a syntax highlighter. Can be 'prism' (default), 'shiki' or false to disable any highlighting.
				syntaxHighlight: 'shiki',
				// If you are using shiki, here you can define a global theme and
				// add custom languages.
				shikiConfig: {
					theme: 'poimandres',
					langs: [],
					wrap: false,
				},
			},
		],
	},
	buildOptions: {
		sitemap: true,
		site: 'http://localhost:3000/',
	},
});
