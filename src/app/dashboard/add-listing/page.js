"use client"
import axios from "axios";
import { useState } from 'react';
import { useSession } from 'next-auth/react';


const ListingForm = () => {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your form submission logic here
        try {
            const { data } = await axios.post("/api/addlisting", {
                title,
                description,
                price,
                location,
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        }
        console.log('Form submitted:', { title, description, price, location });
        // Reset form fields after submission
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
    };

    return (

        <form className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded shadow"
                    placeholder="Enter listing title"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded shadow"
                    placeholder="Enter listing description"
                    rows="4"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                    Price
                </label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded shadow"
                    placeholder="Enter listing price"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="location"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded shadow"
                    placeholder="Enter listing location"
                />
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Listing
                </button>
            </div>
        </form>

    );
};

export default ListingForm;
