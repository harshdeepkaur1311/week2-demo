// // "use client";
// // import Image from "next/image";
// // import { useState } from "react";
// // import Header from "../HomeScreen/homescreen";

// // export default function ItemDetails() {
// //     const [selectedColor, setSelectedColor] = useState("Red");
// //     const [selectedSize, setSelectedSize] = useState("M");


// //     const colors = ["Red", "Blue", "Green", "Black"];
// //     const sizes = ["S", "M", "L", "XL"];

// //     return (
        
// //         <div className=" bg-gray-100 min-h-screen">
// //             <Header/>
           
// //             <button
// //                 onClick={() => history.back()}
// //                 className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 ml-5 mt-5"
// //             >
// //                 ← Back
// //             </button>

            
// //             <div className="flex flex-col lg:flex-row mt-5 space-y-5 lg:space-y-0 lg:space-x-10">
                
// //                 <div className="flex-1">
// //                     <Image
// //                         src="/images/dog1.jpg" 
// //                         alt="Item Image"
// //                         width={400}
// //                         height={400}
// //                         className="rounded-lg shadow-lg ml-8 mt-10"
// //                     />
// //                 </div>

                
// //                 <div className="flex-1">
// //                     <h1 className="text-3xl font-bold text-black mb-2">Item Name</h1>
// //                     <p className="text-gray-700 mb-4">
// //                         A brief description about the item goes here. Highlight its features and qualities.
// //                     </p>
// //                     <p className="text-xl font-semibold text-black mb-4">$99.99</p>

                   
// //                     <div className="mb-4">
// //                         <h2 className="text-lg font-medium text-black mb-2">Choose Color:</h2>
// //                         <div className="flex space-x-4">
// //                             {colors.map((color) => (
// //                                 <div
// //                                     key={color}
// //                                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
// //                                         selectedColor === color
// //                                             ? "border-black"
// //                                             : "border-gray-300"
// //                                     }`}
// //                                     style={{ backgroundColor: color.toLowerCase() }}
// //                                     onClick={() => setSelectedColor(color)}
// //                                 ></div>
// //                             ))}
// //                         </div>
// //                     </div>

                   
// //                     <div className="mb-4">
// //                         <h2 className="text-lg font-medium text-black mb-2">Choose Size:</h2>
// //                         <div className="flex space-x-4">
// //                             {sizes.map((size) => (
// //                                 <button
// //                                     key={size}
// //                                     className={`px-4 py-2 rounded border ${
// //                                         selectedSize === size
// //                                             ? "border-black bg-gray-200"
// //                                             : "border-gray-300"
// //                                     }`}
// //                                     onClick={() => setSelectedSize(size)}
// //                                 >
// //                                     {size}
// //                                 </button>
// //                             ))}
// //                         </div>
// //                     </div>

                  
// //                     <div className="flex space-x-4 mt-6">
// //                         <button className="px-6 py-3  bg-black text-white rounded hover:bg-gray-800"
// //                         //  style={{ backgroundColor: "#E7CCCC" }}
// //                          >
// //                             Add to Cart
// //                         </button>
// //                         <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
// //                             Checkout
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }



// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Header from "../HomeScreen/homescreen";

// export default function ItemDetails() {
//     const router = useRouter();
//     const { id } = router.query; // Extract item ID from the query parameters
//     const [item, setItem] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!id) return; // Wait until `id` is available
//         async function fetchItemDetails() {
//             try {
//                 const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
//                 const data = await response.json();
//                 setItem(data); // Update state with fetched item details
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching item details:", error);
//                 setLoading(false);
//             }
//         }
//         fetchItemDetails();
//     }, [id]);

//     if (loading) {
//         return <p className="text-center text-black mt-10">Loading item details...</p>;
//     }

//     if (!item) {
//         return <p className="text-center text-red-500 mt-10">Item not found!</p>;
//     }

//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <Header />
//             <button
//                 onClick={() => router.back()}
//                 className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 ml-5 mt-5"
//             >
//                 ← Back
//             </button>

//             <div className="flex flex-col lg:flex-row mt-10 space-y-10 lg:space-y-0 lg:space-x-10 px-5">
//                 {/* Item Image */}
//                 <div className="flex-1">
//                     <Image
//                         src={item.images[0] || "https://placeimg.com/640/480/any"}
//                         alt={item.title}
//                         width={400}
//                         height={400}
//                         className="rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Item Details */}
//                 <div className="flex-1">
//                     <h1 className="text-3xl font-bold text-black mb-4">{item.title}</h1>
//                     <p className="text-gray-700 mb-6">{item.description || "No description available."}</p>
//                     <p className="text-2xl font-semibold text-black mb-6">${item.price}</p>

//                     <div className="flex space-x-4 mt-4">
//                         <button
//                             className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
//                             onClick={() => alert(`${item.title} added to cart!`)}
//                         >
//                             Add to Cart
//                         </button>
//                         <button
//                             className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
//                             onClick={() => alert("Proceeding to checkout!")}
//                         >
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
