import { useState } from 'react'

import './App.css';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  //const [tabContent, setTabContent] = useState('components');


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data,index) => (
              <CoreConcept 
                key={index}
                title={data.title} 
                description={data.description} 
                image={data.image} />
            ))}
            
          </ul>
        </section>
        <section id="examples">
              <h2>Examples</h2>
              <menu>
              
                <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>

              </menu>

              <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>

                </pre>
              </div>
              {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

