import { resources } from "../resources/ressurser";


export const Css = () => {
    const field = resources.find((instance) => instance.category === "Css");

    return <>

        <h3>{field.category}</h3>
        <p>{field.text}</p>
    </>
}