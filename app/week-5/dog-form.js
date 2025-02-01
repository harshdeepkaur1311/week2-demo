"use client";
import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);


    // const handleNameChange = (event) => {
    //     setName(event.target.value);

    // }
    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z]/g, "");
        setName(name);
        
    }
    
    // const handleAgeChange = (event) => {
    //     let age = 
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        let dog = {name, breed, age};
        console.log(dog);
      
    }
    //reset form
    // setName("");
    // setBreed("");
    // setAge(0);




    return(
        <div className="m-2">
            <h2 className="text-2xl">Add a dog</h2>
            <form className="m-2" onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="name">Name</label>
                <input
                id = "name"
                type = "text"
                value = {name}
                onChange={(event) =>handleNameChange(event)}
                className="border border-black m-2"
                />
                Breed: <input 
                type ="text"
                id = "breed"
                value = {breed}
                onChange={(e) => setBreed(e.target.value)}
                className="border border-black m-2"
                />
                Age: <input 
                type = "number"
                id = "age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border border-black m-2"
                />
                <input
                type="submit"
                value="Add Dog"
                className="m-2 bg-blue-500
                hover:bg-blue-700"
                />

            </form>
            <div className="text-lg">
                <p>Name: {name.length >=3 ? name : "Name too short"}</p>
                <p>Breed: {breed}</p>
                <p>Age: {age}</p>
            </div>
            

        </div>

    );
}