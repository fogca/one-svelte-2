import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { error } from '@sveltejs/kit';
import { client } from '../../libs/client';

type Post = {
	id: string;	
	thumbnail: string;
	fullImage: string;
	fullImageB: string;
	url: string;
	images: InnerHTML;
	images2: InnerHTML;
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const posts = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'works',
			queries: { limit: 10 },
		})
	])
	if (posts) {
		console.log(posts);
		return { ...posts };
	}

	throw error(404, 'Not found');
}

const images = [
    
]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)