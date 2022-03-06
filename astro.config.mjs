// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.
	renderers: [],
	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				// Pick a syntax highlighter. Can be 'prism' (default), 'shiki' or false to disable any highlighting.
				syntaxHighlight: 'shiki',
				// If you are using shiki, here you can define a global theme and
				// add custom languages.
				shikiConfig: {
					theme: 'github-dark',
					langs: [],
					wrap: false,
				},
			},
		],
	},
});
