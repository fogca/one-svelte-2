import { error } from '@sveltejs/kit';
import { client } from '../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	description: string;
	thumbnail: string;
	url: string;
	content: string;
	scope: string;
	title: string;

	philosophy: string;
	philosophy_title_eng: string;
	top_eng: string;
	top_jap: InnerHTML;
	top_tagline: string;
	//title: InnerHTML;
	//String.replace(/\n/g, '<br />');
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'works',
			queries: { limit: 7, orders: 'highlight' }
		}),
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'pages',
		})
	])
	if (res) {
		console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}






	/*const res = await client.get<MicroCMSListResponse<Post>>({
		endpoint: 'archives',
		queries: { limit: 4 }
	});
	
	if (res) {
		
		brands: res[0],
		words: res[1]
	}

	*/
