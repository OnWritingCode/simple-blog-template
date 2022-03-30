import astroRemark from '@astrojs/markdown-remark';

export default /** @type {import('astro').AstroUserConfig} */ ({
	markdownOptions: {

		render: [
			astroRemark,
			{
				remarkPlugins: [],
				rehypePlugins: [
					'rehype-slug',
					['rehype-autolink-headings', { behavior: 'wrap' }],
				],

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
