import Link from "next/link";

import sayHello from "./tester/page";
import ServerSyd from "./server-client/page";
import Callfangtion from "./call-function/pages";
import ComboBox from "./combo-box/page";
import UseRefSamp from "./use-ref/clientsyd";


export default function HomePage() {
  return (

    <div>
    <UseRefSamp/>
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
