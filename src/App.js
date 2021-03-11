import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News.jsx';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/messages" />
          <Route component={News} path="/news" />
          <Route component={Music} path="/music" />
          <Route component={Settings} path="/settings" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
