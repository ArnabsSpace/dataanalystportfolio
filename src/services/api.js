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