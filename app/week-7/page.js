"use client";
import Counter from "./counter";
import DogList from "./dog-list";
import DogForm from "./dog-form";
import dogData from "./dog-data.json";
import { useState } from "react";


export default function page(){
    const[dogs, setDogs] = useState(dogData);

    const HandleAddDog = (newDog) => {
        setDogs([...dogs, newDog]);
        //we can't use dogs.push because that will  mutate the array
    };

    const handleDelete = (id) => {
        const updatedDogs = dogs.filter((dog) => dog.id !== id);
        setDogs(updatedDogs);
    }

    return(
        <div>
            <h1>week-7</h1>
            {/* <Counter/> */}
            <DogList dogs={dogs} onDelete={handleDelete}/>
            <DogForm onAddDog={HandleAddDog}/>
        </div>
    );
}