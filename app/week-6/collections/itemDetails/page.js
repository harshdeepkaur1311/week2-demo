
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../HomeScreen/homescreen";

export default function ItemDetails() {
    const router = useRouter();
    const { id } = router.query; // Extract item ID from the query parameters
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return; // Wait until `id` is available
        async function fetchItemDetails() {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
                const data = await response.json();
                setItem(data); // Update state with fetched item details
                setLoading(false);
            } catch (error) {
                console.error("Error fetching item details:", error);
                setLoading(false);
            }
        }
        fetchItemDetails();
    }, [id]);

    if (loading) {
        return <p className="text-center text-black mt-10">Loading item details...</p>;
    }

    if (!item) {
        return <p className="text-center text-red-500 mt-10">Item not found!</p>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <button
                onClick={() => router.back()}
                className="text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 ml-5 mt-5"
            >
                ← Back
            </button>

            <div className="flex flex-col lg:flex-row mt-10 space-y-10 lg:space-y-0 lg:space-x-10 px-5">
                {/* Item Image */}
                <div className="flex-1">
                    <Image
                        src={item.images[0] || "https://placeimg.com/640/480/any"}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-black mb-4">{item.title}</h1>
                    <p className="text-gray-700 mb-6">{item.description || "No description available."}</p>
                    <p className="text-2xl font-semibold text-black mb-6">${item.price}</p>

                    <div className="flex space-x-4 mt-4">
                        <button
                            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => alert(`${item.title} added to cart!`)}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={() => alert("Proceeding to checkout!")}
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
