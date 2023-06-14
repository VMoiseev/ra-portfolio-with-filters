import './App.css';
import Portfolio from './components/Portfolio';
import Project from './components/Prodject';
import { data } from './data/data';

const projects = data.map (item => {
  return new Project(item);
})

export default function App() {
  return (
    <div className='container'>
      <Portfolio items={ projects } />
    </div>
  )
}
