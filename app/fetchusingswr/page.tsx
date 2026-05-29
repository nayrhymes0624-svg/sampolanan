'use client'

import useSWR from 'swr'


type User = {
  id: number
  name: string
  email: string
  events:string
  description:string
}


export default function Page() {
  const {
    data,
    isLoading,
    error
  } = useSWR<User[]>(
    'https://sample-98bd1-default-rtdb.firebaseio.com/events/.json',
  )

  
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <div>
      {data?.map(user => (
        <div key={user.id}>
          <h2>{user.description}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}



//}
//FOR BASIC 
// export default function Page() {
//   const {
//     data,
//     error,
//     isLoading
//   } = useSWR<User[]>(
//     'https://jsonplaceholder.typicode.com/users',
//     fetcher
//   )

//   if (isLoading) {
//     return <p>Loading...</p>
//   }

//   if (error) {
//     return <p>Failed to load users</p>
//   }

//   return (
//     <div className="p-5">
//       <h1>Users</h1>

//       {data?.map(user => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   )
// }