import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './components/Experience';
import Configuration from './components/Configuration';
import { CustomisationProvider } from './context/Custom';

function App() {
  return (
    <CustomisationProvider>
    <div className="App"> 
      <Canvas>
        <color attach="background" args={['#2a2a2a']} />
        <Experience/>
      </Canvas>
      <Configuration/>
    </div>
    </CustomisationProvider>
  );
}

export default App;
