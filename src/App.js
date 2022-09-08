//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Create from './Create';
function App() {
  return (
    <div className="App">
      <Header />
      <h1>Top Picks For You</h1>
      <Create />
      <a href='/Admin'>Admin</a>
    </div>

  );
}

export default App;
