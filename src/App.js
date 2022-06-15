import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Header from './components/Header';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
