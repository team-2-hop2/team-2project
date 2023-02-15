import './App.css';
import { Header } from './components/header';
import { Blog } from './components/blog';
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Blog/>
      </header>
    </div>
  );
}

export default App;
