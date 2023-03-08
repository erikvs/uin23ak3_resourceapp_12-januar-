import { resources } from "../resources/ressurser";


export const Html = () => {
    const field = resources.find((instance) => instance.category === "HTML");

    return <>

        <h3>{field.category}</h3>
        <p>{field.text}</p>
    

    
        

    </>
}