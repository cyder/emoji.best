import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

const history = createHistory();

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen((location) => {
  ReactGA.pageview(location.pathname + location.search);
});

export default history;
