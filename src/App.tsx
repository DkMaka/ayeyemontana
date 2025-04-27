import  { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';

import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="accommodation" element={<Accommodation />} />
        
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
 