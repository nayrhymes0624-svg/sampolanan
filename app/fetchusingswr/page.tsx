'use client'

import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

type User = {
  id: number
  name: string
  email: string
}

export default function Page() {
  const {
    data,
    error,
    isLoading
  } = useSWR<User[]>(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  )

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Failed to load users</p>
  }

  return (
    <div className="p-5">
      <h1>Users</h1>

      {data?.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}