import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, '/account')
  }

  return { url: url.origin }
}

export async function load() {
  try {
    const { data: folders, error: folderError } = await supabase.storage.from('Gallery').list('');
    if (folderError) {
      console.error('Error fetching folders:', folderError)
      return { folders: [] };
    }

    if (folders && folders.length > 0) {
      const foldersData = await Promise.all(
        folders.map(async (folder) => {
          const { data: files, error: fileError } = await supabase.storage
            .from('Gallery')
            .list(folder.name, { limit: 1 });

          if (fileError) {
            console.error('Error fetching files for folder:', folder.name, fileError)
            return { name: folder.name, thumbnailUrl: null };
          }

          if (files && files.length > 0) {
            const publicURL = `https://auiqlbvzsvvsjvpijukm.supabase.co/storage/v1/object/public/Gallery/${folder.name}/${files[0].name}`;
            return { name: folder.name, thumbnailUrl: publicURL };
          }
          return { name: folder.name, thumbnailUrl: null };
        })
      );

      return {
        folders: foldersData,
      };
    } else {
      console.log('No folders found')
      return {
        folders: [],
      };
    }
  } catch (err) {
    console.error('Error loading folders:', err)
    return {
      folders: [],
    };
  }
}
