export type Post = {
	title: string,
	slug: string,
	preview: string,
	timestamp: number,
	draft: boolean,
	date: string,
}

export function single(post): Post {
	
	const slug = post.file.pathname.split('/').reverse()[0].replace('.md', '');
	return {
		...post,
		slug,
		timestamp: (new Date(post.date)).valueOf()
	}
}

export function published(posts: Post[]): Post[] {
	return posts
		.map(post => single(post))
		.filter(post => true !== post.draft)
		.sort((a, b) => b.timestamp - a.timestamp)
}

export function getRSS(posts: Post[]) {
	return {
		title: 'Blank Slate RSS',
		description: 'Blank Slate blog RSS Feed',
		stylesheet: true,
		customData: `<language>en-us</language>`,
		items: posts.map((post: Post) => ({
			title: post.title,
			description: post.preview,
			link: post.slug,
			pubDate: post.date,
		})),
	}
}

