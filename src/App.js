import './App.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Header from '../src/components/Home';
import ContactPage from './ContactPage';
import { client } from './client';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;