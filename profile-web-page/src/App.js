import './app.css';
import Contact from './contact'
import Head from './head'
import Test from './test'
import wight from './images/wight.jpeg'
function App() {
  return (
    <div style={{
        backgroundImage: "linear-gradient(to left, #65dfc9, #6cdbed)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
    > 
      <Head/>
      <Test/>
      <Contact/>

    </div>
  );
}

export default App;
