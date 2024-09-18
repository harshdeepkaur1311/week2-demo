// props: properties passed by parent
// export default function Dog(props){
//     return(
//     <section className="m-2 bg-neutral-100">
//     <h3 className="text-xl font-bold text-violet-900">{props.name}</h3>
//     <p>
//         <span className="font-bold">Breed: </span>{props.breed}</p>
//     <p>Age: {props.age}</p>
//     <p>Colour: {props.colour}</p>
// </section>
//     );
// }
// -----------------------------
//destructing
export default function Dog({name, breed, age, colour}){
    //or let {name, breed, age, colour} = props
    return(
    <section className="m-2 bg-neutral-100">
    <h3 className="text-xl font-bold text-violet-900">{name}</h3>
    <p>
        <span className="font-bold">Breed: </span>{breed}</p>
    <p>Age: {age}</p>
    <p>Colour: {colour}</p>
</section>
    );
}