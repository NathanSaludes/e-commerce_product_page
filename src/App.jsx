import './App.css'
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

import { CartContext } from './contexts/CartContext.js';
import { useCart } from './hooks/Cart.js';

function App() {
  return (
    <div className="App">
      <CartContext.Provider value={useCart()}>
        <Header />
        <Main />
        {/* <Footer /> */}
      </CartContext.Provider>
    </div>
  )
}

export default App
