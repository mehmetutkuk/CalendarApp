import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Import custom components
import store from './store';
import { Provider } from 'react-redux';
import './index.css'
import App from './pages/App/App';
class Root extends React.Component {
  
  render() {
      return(
        <Provider store={store}>
            <App/>
        </Provider>
    );
  }
}
ReactDOM.render(<Root />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
