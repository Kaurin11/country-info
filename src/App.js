import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getCountryDetailRoute, mainViewRoute } from './constants/routes/routes';
import CountryDetail from './view/countryDetail/countryDetail';
import MainView from './view/mainView/mainView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={mainViewRoute()} component={MainView} />
        <Route path={getCountryDetailRoute()} component={CountryDetail} />
        <Redirect to={mainViewRoute()} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
