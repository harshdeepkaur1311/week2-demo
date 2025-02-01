// import Link from "next/link";
// // import searchIcon from "../assets/images/search.png";
// import Image from "next/image";

// export default function Page() {
//     return(
//         <div>
//             <header className="h-20 flex items-center px-6" style={{ backgroundColor: '#E7CCCC' }}>
//                 <div className="text-xl font-semibold">
//                     <Link href="/">Home</Link>
//                 </div>
//                 <div className="relative ml-10 group">
//                     <button className="text-xl font-semibold">
//                         Collection
//                     </button>
//                     <div className="absolute left-0 mt-2 hidden w-40 bg-white shadow-lg rounded-md group-hover:block">
//                         <ul className="flex flex-col py-2">
//                             <li className="hover:bg-gray-200 px-4 py-2">
//                                 <Link href="/collections/men">Men</Link>
//                             </li>
//                             <li className="hover:bg-gray-200 px-4 py-2">
//                                 <Link href="/collections/women">Women</Link>
//                             </li>
//                             <li className="hover:bg-gray-200 px-4 py-2">
//                                 <Link href="/collections/kids">Kids</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="flex-grow"></div>
//                 <nav className="flex items-center space-x-8">
//                     <Image src="/images/search.png" alt="Search" width={40} height={40} />
//                     <Image src="/images/cart.png" alt="Cart" width={40} height={40} />
//                     <Image src="/images/user.png" alt="User" width={40} height={40} />
//                 </nav>
//             </header>
//         </div>
//     )
// }