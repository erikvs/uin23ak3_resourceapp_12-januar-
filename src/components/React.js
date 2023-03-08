import { resources } from "../resources/ressurser";


export const React = () => {
    const field = resources.find((instance) => instance.category === "React");

    return <>

        <h3>{field.category}</h3>
        <p>{field.text}</p>
    </>
}