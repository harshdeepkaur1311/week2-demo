"use client";
import { useState, useEffect } from "react";


export default function Page() {
    const [randomDogUrl, setRandomDogUrl] = useState(null);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");

    const getRandomDog = async (breed) => {
        const response = breed ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) : await fetch("https://dog.ceo/api/breeds/image/random");  //it will retturn a promise
        const data = await response.json();
        //const data = response.json();//this is the promise and not the data
        const url=  data.message; //the url of the dpg image
        setRandomDogUrl(url);

    }

    const getDogBreeds = async () => {
        const response =  await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breeds = Object.keys(data.message); // object.keys returns an array of objects's keys
        setDogBreeds(breeds);
    }

    const  handleBreedChange = (event) => {
       // alert(event.target.value);
        setSelectedBreed(event.target.value);
    };

    useEffect(() => {
        getRandomDog();
        getDogBreeds();
    }, []); 
    
    useEffect(() => {
        if(selectedBreed === "") return;
        getRandomDog(selectedBreed);
       
    }, [selectedBreed]); //run when selectedBreed changes


    

    return (
        <div>
            <h1>week-8</h1>
            <div>
                <select  onChange={handleBreedChange}>

                    {dogBreeds.map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>
                    ))}
                </select>
            </div>
            <p>
                <img src={randomDogUrl}/>
            </p>
        </div>
    );
}