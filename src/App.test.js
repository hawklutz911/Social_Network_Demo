import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
      <BrowserRouter>
        <Provider>
          <App />
        </Provider>
      </BrowserRouter>, div
  );
  ReactDOM.unmountComponentAtNode(div);
});

