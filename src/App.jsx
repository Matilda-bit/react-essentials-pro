import './App.css';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';



function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

