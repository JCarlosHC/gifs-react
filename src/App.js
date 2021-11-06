import { Link, Route } from 'wouter';
import './App.css';
import { ListOfGifs } from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/panda'>Gif de pandas</Link>
        <Link to='/gif/mexico'>Gif de Mexico</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
