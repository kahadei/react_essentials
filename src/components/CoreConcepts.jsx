import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(props) {
    return (<section id="core-concepts">
        <h2>Core concepts</h2>
        <ul>
            {CORE_CONCEPTS.map(item_concept => <CoreConcept key={item_concept.title} {...item_concept} />)}
        </ul>
    </section>)
}