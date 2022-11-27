import logo from './logo.svg';
import './App.css';
import SceneComponent from './components/SceneComponent';
// import { Canvas } from 'react-three-fiber';

function App() {


  return (
    <div className="App"
      style={{
        height: '100vh',
        backgroundColor: 'lightgrey'
      }}
    
    >
      <SceneComponent/>
    </div>
  );
}

export default App;
