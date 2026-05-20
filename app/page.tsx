import Link from "next/link";

import sayHello from "./tester/page";


export default function HomePage() {
  return (
    //DYNAMIC
    <div>
      <Link href="/dynamic/1">
        Product 1
      </Link>
    </div>
  )
}



//   return sayHello({ name: "john", age: 24});
// }


// import ProperSam from "./tester/propskey";
// import SamplePropertest from "./tester/samplePropertest";

//  <div>
//      <SamplePropertest Lname="Carter" Fname="Jhon" />
//     </div>

//<p>Home Page</p>
//    {getsampling().map((items) =>(<li key={items.acct}>{items.price} </li> )) }
