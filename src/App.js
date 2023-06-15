import Header from './components/header';
import Hero from './components/hero';
import Experience from './components/Experience';
import Search from './components/Search';
import Download from './components/Download';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
