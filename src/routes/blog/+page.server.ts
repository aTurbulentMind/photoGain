// src/routes/blog/+page.server.js

export async function load() {

    console.log('A. Starting to fetch recent articles from Supabase...'); // Log the start of the fetching process

    // Fetch recent articles from Supabase
    const { data: recentArticles, error } = await supabase
      .from('Allthestuff')
      .select('*')
      .order('id', { ascending: false })
      .eq('type_of_text', 1) // Assuming 'type_of_text' is your filter condition
      .limit(5);

    if (error) {
      console.error('B. Error fetching recent articles:', error.message);
      return { props: { recentArticles: [] } };
    }

    // Log fetched articles for debugging
    console.log('C. Recent articles fetched:', recentArticles);

    console.log('D. Returning fetched articles...'); // Log the end of the fetching process
    return { props: { recentArticles } };
}
