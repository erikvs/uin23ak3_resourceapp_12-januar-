import { resources } from "../resources/ressurser";

export const Html = () => {
    const field = resources.find((instance) => instance.category === "HTML");
    return <>
        <h3>{field.category}</h3>
        <p>{field.text}</p>
        <ul>
            {field.sources.map((sources, index) => (
                <li key={index}>
                    <a href={sources.url}>{sources.title}</a>
                </li>
            ))}
        </ul>
    </>
}