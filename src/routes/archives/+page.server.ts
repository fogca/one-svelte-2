import { error } from '@sveltejs/kit';
import { client } from '../../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';


//export const prerender = true;

type Post = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	description: string;
	thumbnail: string;
	fullImage: string;
	fullImageB: string;
	url: string;
	content: string;
	scope: string;
	title: string;
	repeatImg: HTMLElement;
	repeatImg2: HTMLElement;
	images: {url: string;}
	image: {url: string;}
	images2: InnerHTML;

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
      		queries: { limit: 30 }
		}),
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'pages',
		})
	])
	if (res) {
		//console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}