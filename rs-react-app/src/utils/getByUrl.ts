export default async function getByUrl(url: string, term: string) {
  try {
    const response = await fetch(`${url}?search=${term}`);
    const data = await response.json();
    if (!response.ok || data.results.length == 0) {
      throw new Error('Failed to fetch results');
    }
    return data.results;
  } catch (err) {
    console.error(err);
  }
}
