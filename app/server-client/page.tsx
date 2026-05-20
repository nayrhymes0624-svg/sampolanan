

import Counter from "./clientSyd";

export default function ServerSyd(){
  const username = 'John'; // pretend this came from database

  return (
    <div>
      <h1>Server Component</h1>

      <Counter username={username} />
    </div>
  );
}
