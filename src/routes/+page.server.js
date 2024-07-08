// src/routes/+page.server.js
import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    const { data: allTheStuffData, error: allTheStuffError } = await supabase.from('Allthestuff').select();

    if (allTheStuffError) {
      throw allTheStuffError;
    }

    return {
      allTheStuff: allTheStuffData ?? [],
    };
    
  } catch (error) {
    console.error('Error fetching data: ', error);
    return {
      allTheStuff: [],
    };
  }
}
