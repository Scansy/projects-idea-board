import logo from './logo.svg';
import './App.css';

function App() {
  const testFunction = (): void => {
    alert('working');

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
      }
    });

    request.open('GET', 'http://localhost:6767/sixseven');
    request.send();
  };

  return (
    <div className="App">
      <button onClick={testFunction}>Click me</button>
    </div>
  );
}

export default App;
