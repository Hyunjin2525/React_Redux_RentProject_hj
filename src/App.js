import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import store from "./store/store";
import {Provider} from "react-redux";
import List from "./components/rent/List";
import News from "./components/news/News";
import Detail from "./components/rent/Detail";

function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
        <div id={"root"}>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
              <Route path={"/rent/list"} element={<List/>}/>
            <Route path={"/rent/detail/:rno"} element={<Detail/>}/>
              <Route path={"/news/news"} element={<News/>}/>
          </Routes>

        </div>
        <Footer/>
      </Router>
      </Provider>
  );
}

export default App;