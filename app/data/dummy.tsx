type User = {
  id: number;
  name: string;
  price: number;
}

export const users: User[] = [
  { id: 1, name: "Apple", price: 50 },
  { id: 2, name: "Banana", price: 30 },
  { id: 3, name: "Orange", price: 40 }
];
type typ = {
  acct: number;
  price: number;
}
//const sampling:typ[] = [{ acct: 1, price: 10 },{ acct: 2, price: 12 }];

export function getsampling() {
  const sampling:typ[] = [{ acct: 1, price: 10 },{ acct: 2, price: 12 }];
  return sampling;
}
 
