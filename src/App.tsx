import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='absolute top-0 flex justify-center w-full'>
          <Header />
        </div>
        <main className="w-full flex flex-col items-center">
          <Hero />
          
        </main>
      </div>
     <Footer />
    </>
  )
}

export default App
