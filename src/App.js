import './App.css';
import Dash from './Component/Dash';
import Footer from './Component/Footer';
import Head from './Component/Head';
import Menu from './Component/Menu';

function App() {
  return (
    <div className="App">
      <Head/>
      <Menu/>
      <Dash/>
      <Footer/>
    </div>
  );
}

export default App;
