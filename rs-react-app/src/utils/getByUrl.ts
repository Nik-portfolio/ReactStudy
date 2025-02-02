export default async function getByUrl(url: string, term: string) {
  const response = await fetch(`${url}?search=${term}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch results');
  }
  console.log(data.results);
  return data.results;
}
