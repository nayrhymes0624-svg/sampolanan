type User = {
  id: string
  name: string
  email: string
}

export const fetcher = async (
  url: string
): Promise<User[]> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  const data = await response.json()

  const user = Object.entries(data).map(
    ([key, value]) => ({
      id: key,
      ...(value as Omit<User, 'id'>),
    })
  )

  return user
}