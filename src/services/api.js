export async function getPageData() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/pages/12"
  );

  const data = await response.json();

  return data.acf;
}

export async function getAnalysisData() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/analysis"
  );

  const data = await response.json();

  return data;
}


export async function getAnalyticsDashboardData() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/analytics_dashboard"
  );

  const data = await response.json();

  return data[0]; // first dashboard item
}








export async function getWritingPosts() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/tactical_writing"
  );

  return await response.json();
}

export async function getWritingPost(slug) {
  const response = await fetch(
    `https://sourabh.arnabsspace.in/wp-json/wp/v2/tactical_writing?slug=${slug}`
  );

  const data = await response.json();

  return data[0];
}





export async function getVideos() {
  const response = await fetch(
    `https://sourabh.arnabsspace.in/wp-json/wp/v2/videos`
  );

  return response.json();
}




export async function getMediaById(id) {
  const response = await fetch(
    `https://sourabh.arnabsspace.in/wp-json/wp/v2/media/${id}`
  );

  return await response.json();
}

export async function getTools() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/tools"
  );

  return await response.json();
}