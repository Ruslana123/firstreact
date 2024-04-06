
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";


function App() {
  return (
      <div className="main-wrapper">
          <div className="header">
              <Header />
          </div>

          <div className="inner-wrapper">
              <div className="sidebar">
                  <Sidebar />
              </div>
              <div className="main">
                  <Main />
              </div>


          </div>

      </div>
  );
}

export default App;

