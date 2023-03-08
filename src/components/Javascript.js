import { resources } from "../resources/ressurser";

export const Javascript = () => {
  const field = resources.find((instance) => instance.category === "JavaScript");
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