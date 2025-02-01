


// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function Header() {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    
//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     return (
//         <div>
//             <header
//                 className="h-20 flex items-center justify-between px-10"
//                 style={{ backgroundColor: "#E7CCCC" }}
//             >
                
//                 <div className="flex items-center space-x-6">
//                     <Link
//                         href="/"
//                         className="text-xl font-bold text-black hover:text-gray-600"
//                     >
//                         Home
//                     </Link>

//                     <select
//                         className="p-2 rounded border border-gray-300 bg-white text-black"
//                         style={{ outline: "none", cursor: "pointer" }}
//                     >
//                         <option>Collection</option>
//                         <option>Women</option>
//                         <option>Men</option>
//                         <option>Kids</option>
//                         <option>Tropical 2024</option>
//                     </select>
//                 </div>

               
//                 <div className="flex items-center space-x-6">
//                     <Image
//                         src="/images/search.png"
//                         alt="Search"
//                         width={40}
//                         height={40}
//                         className="cursor-pointer"
//                         style={{ marginTop: 5 }}
//                     />

//                     <Image
//                         src="/images/cart.png"
//                         alt="Cart"
//                         width={40}
//                         height={40}
//                         className="cursor-pointer"
//                         style={{ marginTop: 5 }}
//                     />

//                     <Image
//                         src="/images/user.png"
//                         alt="Profile"
//                         width={40}
//                         height={40}
//                         className="cursor-pointer"
//                         style={{ marginTop: 5 }}
//                         onClick={toggleDrawer} 
//                     />
//                 </div>
//             </header>

           
//             {isDrawerOpen && (
//                 <div className="fixed inset-0 z-50">
                   
//                     <div
//                         className="absolute inset-0 bg-black bg-opacity-50"
//                         onClick={toggleDrawer} 
//                     ></div>

                   
//                     <div
//                         className="absolute top-0 right-0 h-full w-80 bg-white shadow-lg p-5"
//                         style={{ transition: "transform 0.3s ease-in-out" }}
//                     >
//                         <button
//                             className="text-gray-500  mb-4"
//                             onClick={toggleDrawer}
//                         >
//                             ✖
//                         </button>
                       
                       
                       
//                         <div className="flex items-center space-x-4 mb-8 mt-5">
//                             <Image
//                                 className="rounded-full"
//                                 src="/images/user.png"
//                                 alt="User Profile"
//                                 width={50}
//                                 height={50}
//                             />
//                             <span className="text-lg font-medium text-black">
//                                 Hello! User
//                             </span>
//                         </div>
//                         <ul className="flex mt-4 space-x-4">
//                         <li>
//                             <Link
//                                 href="/orders"
//                                 className="text-black hover:underline p-4 rounded-full"
//                                 style={{ backgroundColor: "#E7CCCC" }}
//                             >
//                                 My Orders
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/settings"
//                                 className="text-black hover:underline p-4 rounded-full"
//                                 style={{ backgroundColor: "#E7CCCC" }}
//                             >
//                                 Settings
//                             </Link>
//                         </li>
//                     </ul>
//                              <ul className="flex mt-4 space-x-4">
//                         <li>
//                             <Link
//                                 href="/orders"
//                                 className="text-black hover:underline p-4 rounded-full"
//                                 style={{ backgroundColor: "#E7CCCC" }}
//                             >
//                                 My Orders
//                             </Link>
//                         </li>
//                         <li>
//                             <Link
//                                 href="/settings"
//                                 className="text-black hover:underline p-4 rounded-full"
//                                 style={{ backgroundColor: "#E7CCCC" }}
//                             >
//                                 Settings
//                             </Link>
//                         </li>
//                     </ul>

//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import searchIcon from "/images/search.png";
// import searchIcon from "../assets/images/search.png";
// import cartIcon from "/images/cart.png";
// import profileIcon from "/images/profile.png";

export default function Header({ onFilterChange, selectedCategory }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState("All"); // Initial category set to "All"
    const filterOptions = ["All", "Clothes", "Furniture", "Electronics", "Shoes"];

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // const handleCategoryChange = (e) => {
    //     e.preventDefault();  // Prevent any default behavior like page reload
    //     const category = e.target.value;
    //     setSelectedCategory(category);  // Update the selected category in state
    //     onFilterChange(category);  // Call the filter change function to update the products displayed
    // };
    const handleCategoryChange = (e) => {
        e.preventDefault();
        const category = e.target.value;
        onFilterChange(category); // Update the selected category in HomePage
    };  

    return (
        <div>
            <header className="h-20 flex items-center justify-between px-10" style={{ backgroundColor: "#E7CCCC" }}>
                <div className="flex items-center space-x-6">
                    <Link href="/" className="text-xl font-bold text-black hover:text-gray-600">
                        Home
                    </Link>
                    <select
                        className="p-2 rounded border border-gray-300 bg-white text-black"
                        style={{ outline: "none", cursor: "pointer" }}
                        value={selectedCategory}  // Bind value to selectedCategory state
                        onChange={handleCategoryChange}  // Handle category change
                    >
                        {filterOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center space-x-6">
                    <Image
                        src="/images/search.png"
                        alt="Search"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                        style={{ marginTop: 5 }}
                    />
                    <Image
                        src="/images/cart.png"
                        alt="Cart"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                        style={{ marginTop: 5 }}
                    />
                    <Image
                        src="/images/user.png"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                        style={{ marginTop: 5 }}
                        onClick={toggleDrawer}
                    />
                </div>
            </header>

            {isDrawerOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleDrawer}></div>
                    <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-lg p-5" style={{ transition: "transform 0.3s ease-in-out" }}>
                        <button className="text-black mb-4" onClick={toggleDrawer}>
                            ✖
                        </button>
                        <div className="flex items-center space-x-4 mb-8 mt-5">
                            <Image className="rounded-full" src="/images/user.png" alt="User Profile" width={50} height={50} />
                            <span className="text-lg font-medium text-black">Hello! User</span>
                        </div>
                        <ul className="flex mt-4 space-x-4">
                            <li>
                                <Link href="/orders" className="text-black hover:underline p-4 rounded-full" style={{ backgroundColor: "#E7CCCC" }}>
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" className="text-black hover:underline p-4 rounded-full" style={{ backgroundColor: "#E7CCCC" }}>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}