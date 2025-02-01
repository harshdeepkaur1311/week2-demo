// "use client";

// import dogsJson from './dogs.json'; //dogJson is an array(it automatically converts)) of objects(that file is just a - it's a way to store and translate objects)
// import Image from 'next/image';
// import { useState } from 'react';

// export default function Page(){
//     const[selectedDogId, setSelectedDogId] = useState(-1);



//     let dogs = [...dogsJson]; //shallow copy of dogsJson
  
//     dogs.sort((a,b) => a.name.localeCompare(b.name));//sort by name
//    //or
// //******//    dogs.sort((a,b) => {
// //     if(a < b) return -1;
// //     if(a > b) return 1;
// //     return 0;
// //***didn't worked****//    });


//      dogs = dogs.filter((dog) => dog.name.length >5);// filter by name



// //    const handleClick = (id) => {
// //     setSelectedDogId(id);
// //    };
// //or
//     const handleClick = (id) => {
//         if(selectedDogId === id){
//             setSelectedDogId(-1);
//         return;

//     }
//     setSelectedDogId(id);
//    };




//     return(
//         <main className='p-2'>
//             <h1 className='text-2xl font-semibold'>Week-6</h1>
//             <p>Current id: {selectedDogId}</p>
//             <ul>
//                 {dogs.map((dog) => (
//                     <li key = {dog.name} className={`m-2 p-4 
//                         ${dog.id === selectedDogId ? "bg-gray-200" : "bg-gray-100"}`} 
//                     onClick = {() => handleClick(dog.id)}>
//                         <h2 className="text-lg font-semibold">{dog.name}</h2>
//                         <p className="text-sm">{dog.description}</p>
//                         <p>
//                             <Image 
//                             src = {dog.imageUrl}
//                             alt = {dog.name}
//                             width = {360}
//                             height = {180}/>
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//             <div></div>

//         </main>

//     );
// }


// import Image from 'next/image';
// export default function Page(){
//     return (
//         <div className='text-black'>
//             <Image src = "/images/dog1.jpg" alt = "week-6" width = {640} height = {320}/>
//         </div>
//     );
// }





import Link from "next/link";
// import searchIcon from "../assets/images/search.png";
import Image from "next/image";
import Homescreen from "./HomeScreen/homescreen";
import ItemDetails from "./collections/itemDetails/itemDetails";
import HomePage from "./HomeScreen/homePage";

export default function Page() {
    return(
        // <ItemDetails/>
        <HomePage/> 
        // <Homescreen/>
        // <div>
        //     <header className="h-20 flex items-center px-6" style={{ backgroundColor: '#E7CCCC' }}>
        //         <div className="text-xl font-semibold">
        //             <Link href="/">Home</Link>
        //         </div>
        //         <div className="relative ml-10 group">
        //             <button className="text-xl font-semibold">
        //                 Collection
        //             </button>
        //             <div className="absolute left-0 mt-2 hidden w-40 bg-white shadow-lg rounded-md group-hover:block">
        //                 <ul className="flex flex-col py-2">
        //                     <li className="hover:bg-gray-200 px-4 py-2">
        //                         <Link href="/collections/men">Men</Link>
        //                     </li>
        //                     <li className="hover:bg-gray-200 px-4 py-2">
        //                         <Link href="/collections/women">Women</Link>
        //                     </li>
        //                     <li className="hover:bg-gray-200 px-4 py-2">
        //                         <Link href="/collections/kids">Kids</Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //         <div className="flex-grow"></div>
        //         <nav className="flex items-center space-x-8">
        //             <Image src="/images/search.png" alt="Search" width={40} height={40} />
        //             <Image src="/images/cart.png" alt="Cart" width={40} height={40} />
        //             <Image src="/images/user.png" alt="User" width={40} height={40} />
        //         </nav>
        //     </header>
        // </div>
    )
}