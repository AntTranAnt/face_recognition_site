import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import SearchBar from './components/searchbar/SearchBar.js';
import FaceRecognition from './components/face_recognition/FaceRecognition.js';
import Rank from './components/rank/Rank.js';
import Particles from './components/background_particle/Particles.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Components */}
      <Particles />
      <Navigation />
      <Logo />
      <Rank />
      <SearchBar />
      <FaceRecognition />
    </div>
  );
}

export default App;
