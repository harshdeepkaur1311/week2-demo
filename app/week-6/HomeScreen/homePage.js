
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Header from "./homescreen";

// const products = [
//     {
//         id: 1,
//         name: "Men's T-Shirt",
//         price: "$25",
//         image: "/images/dog1.jpg",
//     },
//     {
//         id: 2,
//         name: "Women's Dress",
//         price: "$45",
//         image: "/images/dog1.jpg",
//     },
//     {
//         id: 3,
//         name: "Kids' Hoodie",
//         price: "$30",
//         image: "/images/dog1.jpg",
//     },
//     {
//         id: 4,
//         name: "Summer Shorts",
//         price: "$20",
//         image: "/images/dog1.jpg",
//     },
//     {
//         id: 5,
//         name: "Men's Jeans",
//         price: "$40",
//         image: "/images/dog1.jpg",
//     },
//     {
//         id: 6,
//         name: "Women's Jacket",
//         price: "$60",
//         image: "/images/dog1.jpg",
//     },
// ];

// export default function HomePage() {
//     const [sortOption, setSortOption] = useState("Price: Low to High");
//     const [filteredProducts, setFilteredProducts] = useState(products);

    
//     const sortProducts = (option) => {
//         setSortOption(option);
//         const sortedProducts = [...products].sort((a, b) => {
//             if (option === "Price: Low to High") {
//                 return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
//             } else if (option === "Price: High to Low") {
//                 return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
//             } else {
//                 return a.name.localeCompare(b.name); 
//             }
//         });
//         setFilteredProducts(sortedProducts);
//     };

    
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <Header />

            
//             <div className="flex justify-between items-center p-5">
                
//                 <button
//                     onClick={() => history.back()}
//                     className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200"
//                 >
//                     ← Back
//                 </button>

                
//                 <div className="flex space-x-4 items-center">
//                     <select
//                         value={sortOption}
//                         onChange={(e) => sortProducts(e.target.value)}
//                         className="border border-gray-300 p-2 rounded"
//                     >
//                         <option >Filter</option>
//                         <option>Price: Low to High</option>
//                         <option>Price: High to Low</option>
//                         <option>Alphabetical</option>
//                     </select>

//                     <button
//                         className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200"
//                         onClick={() => alert("Filter functionality not implemented yet!")}
//                     >
//                         Filter
//                     </button>
//                 </div>
//             </div>

            
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-5">
//                 {filteredProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
//                     >
                        
//                         <div className="relative w-full h-60">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 fill
//                                 className="object-cover rounded-t-lg"
//                             />
//                         </div>

                        
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-black">{product.name}</h2>
//                             <p className="text-gray-600 mt-2">{product.price}</p>

                            
//                             <div className="mt-4 flex space-x-4">
//                                 <Link
//                                     href={`/collections/ItemDetails?id=${product.id}`}
//                                     className="flex-1 text-center text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
//                                 >
//                                     View Details
//                                 </Link>
//                                 <button
//                                     className="flex-1 text-center text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
//                                     onClick={() => alert(`${product.name} added to cart!`)}
//                                 >
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./homescreen";

export default function HomePage() {
    const [sortOption, setSortOption] = useState("Price: Low to High");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

   






    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true); // Start loading
                const response = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await response.json();
    
                // Filter products with valid images
                let filteredData = data.filter(product => {
                    const imageUrl = product.images && product.images[0];
                    return imageUrl && imageUrl.startsWith("http");
                });
    
                // If a category other than "All" is selected, filter by category
                if (selectedCategory !== "All") {
                    filteredData = filteredData.filter(product => product.category.name === selectedCategory);
                } else {
                    // Randomize the products if 'All' is selected and limit to 8
                    filteredData = filteredData.sort(() => 0.5 - Math.random()).slice(0, 8);
                }
    
                setFilteredProducts(filteredData); // Update the state with filtered products
                setLoading(false); // Stop loading
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        }
    
        fetchProducts();
    }, [selectedCategory]);
    







    const sortProducts = (option) => {
        setSortOption(option);
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            if (option === "Price: Low to High") {
                return a.price - b.price;
            } else if (option === "Price: High to Low") {
                return b.price - a.price;
            } else {
                return a.title.localeCompare(b.title); // Alphabetical sorting
            }
        });
        setFilteredProducts(sortedProducts);
    };

    if (loading) {
        return <p className="text-center text-black mt-10">Loading products...</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header onFilterChange={setSelectedCategory} 
            selectedCategory={selectedCategory} />

            <div className="flex justify-between items-center p-5">
                <div className="flex space-x-4 items-center">
                    <select
                        value={sortOption}
                        onChange={(e) => sortProducts(e.target.value)}
                        className="border border-gray-300 p-2 rounded"
                    >
                        <option>Filter</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Alphabetical</option>
                    </select>

                    {/* <button
                        className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 opacity-50 cursor-not-allowed"
                        onClick={() => alert("Filter functionality not implemented yet!")}
                        disabled={true}
                    >
                        Filter
                    </button> */}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-5">
                {filteredProducts.length === 0 ? (
                    <p className="text-center text-black mt-10">No products found.</p>
                ) : (
                    filteredProducts.map((product) => {
                        // Check if the product has a valid image URL
                        const productImage = product.images[0]; // Get the first image of the product
                        const imageUrl = productImage && productImage.startsWith("http")
                            ? productImage
                            : "https://placeimg.com/640/480/any"; // Fallback image URL

                        console.log("Product Image URL: ", imageUrl); // Log image URL for debugging

                        return (
                            <div
                                key={product.id}
                                className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="relative w-full h-60">
                                    <Image
                                        src={imageUrl} // Use the valid or fallback image URL
                                        alt={product.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                    />
                                </div>

                                <div className="p-4">
                                    <h2 className="text-lg font-bold text-black">{product.title}</h2>
                                    <p className="text-gray-600 mt-2">${product.price}</p>

                                    <div className="mt-4 flex space-x-4">
                                        <Link
                                            href={`week-6/collections/ItemDetails?id=${product.id}`}
                                            className="flex-1 text-center text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            View Details
                                        </Link>

                                        <button
                                            className="flex-1 text-center text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                                            onClick={() => alert(`${product.title} added to cart!`)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}