// src/routes/gallery/+page.server.js
import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    console.log('Fetching gallery folders from Supabase storage...');
    const { data: folders, error: folderError } = await supabase.storage.from('Gallery').list('');

    if (folderError) {
      console.error('Error fetching folders:', folderError.message);
      return { images: [] };
    }

    if (folders && folders.length > 0) {
      console.log('Folders found, fetching images...');
      const images = await Promise.all(
        folders.map(async (folder) => {
          console.log(`Fetching files from folder ${folder.name}...`);
          const { data: files, error: fileError } = await supabase.storage
            .from('Gallery')
            .list(folder.name, { limit: 1 });

          if (fileError) {
            console.error(`Error fetching files from folder ${folder.name}:`, fileError.message);
            return null;
          }

          if (files && files.length > 0) {
            const publicURL = `https://moajtchljlwdsgzlmkxu.supabase.co/storage/v1/object/public/Gallery/${folder.name}/${files[0].name}`;
            console.log(
              `Generated public URL for ${files[0].name} in folder ${folder.name}: ${publicURL}`
            );
            return { name: folder.name, url: publicURL };
          }

          console.log(`No files found in folder ${folder.name}`);
          return { name: folder.name, url: null };
        })
      );

      console.log('Returning images:', images);
      return {
        images: images.filter((image) => image !== null),
      };
    } else {
      console.log('No folders found in the Gallery.');
      return {
        images: [],
      };
    }
  } catch (err) {
    console.error('Error:', err.message);
    return {
      images: [],
    };
  }
}
