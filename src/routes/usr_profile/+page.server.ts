
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const { data: existingPosts, error } = await supabase.from('Allthestuff').select('*');
  if (error) {
    console.error('Error fetching posts:', error.message);
    return { existingPosts: [] };
  }
  return { existingPosts };
};

export const actions: Actions = {
  submit: async ({ request }) => {
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

    if (operation === 'new') {
      const { data, error } = await supabase.from('Allthestuff').insert([postData]);
      if (error) {
        console.error('Error inserting post:', error.message);
        return fail(500, { error: error.message });
      }

      // Handle image uploads
      const images = formData.getAll('images');
      if (images && images.length > 0) {
        for (const image of images) {
          const filePath = `${postData.text_name}/${image.name}`;
          const { error: uploadError } = await supabase.storage
            .from('Gallery')
            .upload(filePath, image);

          if (uploadError) {
            console.error('Error uploading image:', uploadError.message);
          } else {
            console.log(`Successfully uploaded ${image.name}`);
          }
        }
      }
    } else if (operation === 'modify') {
      const id = formData.get('id');
      const { data, error } = await supabase.from('Allthestuff').update(postData).match({ id });
      if (error) {
        console.error('Error updating post:', error.message);
        return fail(500, { error: error.message });
      }

      // Handle image uploads
      const images = formData.getAll('images');
      if (images && images.length > 0) {
        for (const image of images) {
          const filePath = `${postData.text_name}/${image.name}`;
          const { error: uploadError } = await supabase.storage
            .from('Gallery')
            .upload(filePath, image);

          if (uploadError) {
            console.error('Error uploading image:', uploadError.message);
          } else {
            console.log(`Successfully uploaded ${image.name}`);
          }
        }
      }
    }

    return { success: true };
  }
};