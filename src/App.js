import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
import Profile from './Components/Profile/Profile';
import lol from './music/lol.mp3';
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <audio src={lol} autoPlay></audio>
    </div>
  );
};

export default App;
