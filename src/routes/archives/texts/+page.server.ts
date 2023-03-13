import { error } from '@sveltejs/kit';
import { client } from '../../../libs/client';
import type { MicroCMSListResponse } from 'microcms-js-sdk';

type Post = {
	id: string;
	url: string;
	scope: string;
	year: string;
	title: string;
	date: string;
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function load() {
	const res = await Promise.all([
		client.get<MicroCMSListResponse<Post>>({
			endpoint: 'works',
			queries: { limit: 30 },
		})
	])
	if (res) {
		console.log(res);
		return { ...res };
	}

	throw error(404, 'Not found');
}

