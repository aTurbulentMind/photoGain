import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession();

    if (!session) {
    const { data: user, error } = await supabase.auth.getUser();
    if (error || !user) {
      redirect(303, '/');
    }
  }

  const { data: existingPosts, error } = await supabase.from('Allthestuff').select('*');
  if (error) {
    console.error('Error fetching posts:', error.message);
    return { existingPosts: [] };
  }
  return { existingPosts };
};

export const actions: Actions = {
  submit: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();
    if (!session) {
      const { data: user, error } = await supabase.auth.getUser();
      if (error || !user) {
        return fail(401, { error: 'Unauthorized' });
      }
    }

    const formData = await request.formData();
    const operation = formData.get('operation');
    const postData = {
      date_made: formData.get('date_made'),
      text_name: formData.get('text_name'),
      author: formData.get('author'),
      categories: formData.get('categories'),
      status: formData.get('status'),
      text_guts: formData.get('text_guts'),
      type_of_text: formData.get('type_of_text')
    };

    let error;
    if (operation === 'new') {
      ({ error } = await supabase.from('Allthestuff').insert([postData]));
    } else if (operation === 'modify') {
      const id = formData.get('id');
      ({ error } = await supabase.from('Allthestuff').update(postData).eq('id', id));
    }

    if (error) {
      console.error('Error with operation:', error.message);
      return fail(500, { error: error.message });
    }

    const images = formData.getAll('images');
    if (images.length > 0) {
      for (const image of images) {
        const filePath = `${postData.text_name}/${image.name}`;
        const { error: uploadError } = await supabase.storage.from('Gallery').upload(filePath, image);
        if (uploadError) {
          console.error('Error uploading image:', uploadError.message);
        } else {
          console.log(`Successfully uploaded ${image.name}`);
        }
      }
    }

    return { success: true };
  }
};
