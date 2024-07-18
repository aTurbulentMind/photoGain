import { supabase } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {	
	login: async ({ cookies, request }) => {
		console.log('Starting login request');

		const data = await request.formData();
		console.log('Form data received:', data);

		const email = data.get('email');
		console.log('Email extracted:', email);

		const password = data.get('password');
		console.log('Password extracted:', password);

		console.log('Form submitted:', { email, password });

		if (!email) {
			console.log('Email is missing');
			return fail(400, { email, missing: true });
		}

		// Attempt to sign in with Supabase
		const { data: user, error } = await supabase.auth.signInWithPassword({ email, password });

		if (error) {
			console.error('Supabase signIn error:', error.message);
			return fail(400, { email, incorrect: true });
		}

		if (!user) {
			console.error('No user returned from Supabase signIn');
			return fail(400, { email, incorrect: true });
		}

		// Set session cookie
		cookies.set('sessionid', user.id, { path: '/' });

		// Redirect to usr_profile page
		return redirect(303, '/usr_profile');
	},
};
