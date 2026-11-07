const lifetime = 60 * 60 * 1000;

async function fetchProjects<T>(url: string): Promise<T> {
  const stored = localStorage.getItem(url);
  const cache = stored ? JSON.parse(stored) : null;

  if (cache && Date.now() - cache.savedAt < lifetime) {
    return cache.data as T;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    localStorage.setItem(url, JSON.stringify({ data, savedAt: Date.now() }));
    return data as T;
  } catch (err) {
    if (cache) return cache.data as T;
    throw err;
  }
}

export default fetchProjects;
