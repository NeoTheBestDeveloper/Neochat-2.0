import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F03%2FFiat_logo.png&f=1&nofb=1"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftravelbylesley.co.uk%2Fwp-content%2Fuploads%2F2019%2F04%2Fbigstock-Beautiful-tropical-beach-with-68649619-Copy.jpg&f=1&nofb=1"
          alt=""
        />
        <div className="logo">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2484602%2Fscreenshots%2F5954560%2Fjolly_fashion_logo1_4x.jpg&f=1&nofb=1"
            alt=""
          />
          <div className="description">Hello I'm Neo</div>
          <div className="myPosts">
            My posts
            <div className="post">post 1</div>
            <div className="post">post 2</div>
            <div className="post">post 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
