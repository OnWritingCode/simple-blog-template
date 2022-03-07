import slug from "slug";

export type Post = {
	title: string, 
	slug: string,
	preview: string,
	timestamp: number,
	draft: boolean,
}


export function single(post): Post {
	return {
		...post,
		slug: slug(post.title),
		timestamp: (new Date(post.date)).valueOf()
	}
}

export function all(posts: Post[]) {
	return posts
		.map(post => single(post))
		.filter( post => true !== post.draft )
		.sort((a, b) => a.timestamp - b.timestamp)
}