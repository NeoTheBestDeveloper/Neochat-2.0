import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
import Profile from './Components/Profile/Profile';
import lol from './music/lol.mp3';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content-wrapper">
        {/* <Profile /> */}
        <Dialogs />
      </div>

      <audio src={lol} autoPlay></audio>
    </div>
  );
};

export default App;
