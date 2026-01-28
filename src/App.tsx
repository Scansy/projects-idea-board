import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  const testFunction = (): void => {
    alert('working');

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        console.log('callback fired');
        console.log(request.responseText);
      } else if (request.readyState === 4) {
        console.log('callback fired');
        console.log('could not fetch data');
      }
    });

    request.open('GET', 'http://localhost:6767/sixseven');
    request.send();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={testFunction}>Click me</button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;