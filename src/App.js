import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  {Home}  from './pages/Home';
import  {Series}  from './pages/Series';
import  {Serie}  from './pages/Serie';
import { Paint } from './pages/Paint';
import { Bio } from './pages/Bio';
import { Expositions } from './pages/Expositions';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import Navbar from './components/navbar/Navbar';
import Summary from './components/summary/Summary';
import { Footer } from './components/footer/Footer';
import { Notification } from './components/notification/Notification';

function App() {

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
      
          <Router>
            <Navbar/>
            <Notification/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/series" element={<Series/>} />
                <Route exact path="/:serieName" element={<Serie/>} />
                <Route exact path="/:serieName/:paintName" element={<Paint/>} />
                <Route exact path="/biografia" element={<Bio/>} />
                <Route exact path="/exposiciones" element={<Expositions/>} />
                <Route exact path="/contacto" element={<Contact/>} />
                <Route exact path="/carrito" element={<Cart/>} />
            </Routes>
            <Summary/>
            <Footer/>
          </Router>
        </div>   
    </PersistGate>

    </Provider>
  );
}

export default App;
