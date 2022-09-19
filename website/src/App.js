
import MeetUs from './components/about/MeetUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import './index.css';

export default function App() {
  return (
    <div className='h-full w-full'>
      <Header />
      <Hero />
      <Stats />
      <MeetUs />
      <Contact />
      <Footer />
    </div>
  )
}
