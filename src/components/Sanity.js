import { resources } from "../resources/ressurser";


export const Sanity = () => {
    const field = resources.find((instance) => instance.category === "Sanity");

    return <>

        <h3>{field.category}</h3>
        <p>{field.text}</p>

        </>
}