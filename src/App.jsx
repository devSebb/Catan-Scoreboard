import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';

export default function App() {
  return (
    <>
      <Hero />
      {/* <Header /> */}
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
