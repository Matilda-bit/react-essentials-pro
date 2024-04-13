import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
    return  (
    <section id='core-concepts'>
        <h2>Core concepts</h2>
        <ul>
        {CORE_CONCEPTS.map((data, index) => (
            <CoreConcept key={index} {...data} />
        ))}
        </ul>
    </section>);
}