import { resources } from "../resources/ressurser";


export const Javascript = () => {
    const field = resources.find((instance) => instance.category === "Javascript");

    return <>

        <h3>{field.category}</h3>
        <p>{field.text}</p>
    </>
}