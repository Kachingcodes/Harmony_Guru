import './App.css';
import Guru from './components/Guru';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
          <Guru/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Products/>
          <Testimonials/>
          <Join/>
          <Footer/>
           </div>
  );
}

export default App;
