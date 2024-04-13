import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

export default function CoreConcepts() {
    return  (
        <section id='core-concepts'>
        <h2>Core concepts</h2>
        {/* <Section id='core-concept' title='Core Concept'>         */}
            <ul>
            {CORE_CONCEPTS.map((data, index) => (
                <CoreConcept key={index} {...data} />
            ))}
            </ul>
        {/* </Section> */}
        </section>
    );
}