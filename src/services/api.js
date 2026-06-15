export async function getPageData() {
  const response = await fetch(
    "https://sourabh.arnabsspace.in/wp-json/wp/v2/pages/12"
  );

  const data = await response.json();

  return data.acf;
}