import './App.css';
import MovieApp from './components/MovieApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className='body'>
     <Header/>
    <MovieApp/>
    <br></br>
      <Footer/>
    </div>
  );
}

export default App;