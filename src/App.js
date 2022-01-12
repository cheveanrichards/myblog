import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticlesListPage";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/article/:name" component={ArticlePage} />
            <Route exact path="/article-list" component={ArticleListPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
