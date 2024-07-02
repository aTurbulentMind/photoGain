<script context="module">
	import { supabase } from '$lib/supabaseClient';

	export async function load({ params }) {
		const { slug } = params;
		const { data: postData, error } = await supabase
			.from('Allthestuff')
			.select('*')
			.eq('text_name', slug)
			.single();

		if (error) {
			console.error('Error fetching post data:', error.message);
			return { status: 500, error: 'Internal Server Error' };
		}

		const { data: imagesData, error: imagesError } = await supabase.storage
			.from('Gallery')
			.list(`${slug}/`, { limit: 100 });

		if (imagesError) {
			console.error('Error fetching images:', imagesError.message);
			return { status: 500, error: 'Internal Server Error' };
		}

		const images = imagesData.map(
			(file) =>
				`https://adgdwehuxdddcwmfhudx.supabase.co/storage/v1/object/public/Gallery/${slug}/${file.name}`
		);

		return {
			props: {
				post: postData,
				images
			}
		};
	}
</script>

<script>
	export let post;
	export let images;
</script>

<h1>{post.text_name}</h1>
<!-- Display post data and images here -->
