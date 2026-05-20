export default function sayHello(user: { name: string , age: number }) {
  return <p> {user.name} {user.age} </p>
}