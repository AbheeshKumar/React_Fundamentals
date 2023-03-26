import './App.css';
import {Profile} from './components/Gallery';
import Gallery from './components/Gallery';
import Hello from './components/hello';

function App() {
  return (
    <section>
    <Gallery/>
    <h1>Winner</h1>
    <Profile/>
    <Hello/>
    </section>
  );
}

export default App;
