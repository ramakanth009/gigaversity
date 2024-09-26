import './App.css';
import Main from "./Main/Main"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowRight);

function App() {
  return (
    <Main/>
  );
}

export default App;

