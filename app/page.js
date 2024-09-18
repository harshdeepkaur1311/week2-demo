import Link from "next/link";
import Heading from "./week-2/heading";
export default function Page(){
 return (
  <div>
    <h1>Web Dev2 </h1>
    <Heading/>
    <ul>
      <li><Link href = "/week-2">Week 2</Link></li>
      <li><Link href = "/week-3">Week 3</Link></li>
      </ul>
  </div>
 );
};