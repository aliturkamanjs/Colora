import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import "./App.css";
import routes from "./routes/routes";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        {routes.map((route, index) => {
          return <Route {...route} key={index} />;
        })}
      </Switch>
    </>
  );
};

export default App;
