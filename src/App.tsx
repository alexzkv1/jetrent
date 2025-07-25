import Gallery from './pages/Gallery';
import Main from './pages/Main';
import Jets from './pages/Jets';
import Contact from './pages/Contact'
import Form from './pages/Form';
import Price from './pages/Price';
import Header from './components/Header';
import backgroundVideo from '/video.mp4';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
<>
  <video
    autoPlay
    loop
    muted
    className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
  >
    <source src={backgroundVideo} type="video/mp4" />
  </video>

  <header className="w-full h-20 z-10 relative">
    <Header />
  </header>

  <main className="w-full mt-20 px-4">
    <Routes>
      <Route path="/jetrent" element={<Main />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/broneeri" element={<Form />} />
      <Route path="/hinnakiri" element={<Price />} />
      <Route path="/jetid" element={<Jets />} />
    </Routes>
  </main>

  <footer className="w-full mt-20">
    <Footer />
  </footer>
</>

  )
}

export default App