export async function apiFetch(url: string, revalidate = 30) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    next: { revalidate }
  })

  if (!res.ok) {
    throw new Error("API Error")
  }

  return res.json()
}