import './app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import Contact from './contact'
import About from './about'
import Head from './head'
// import Nav from './nav'
import Test from './test'
function App() {
  return (
    <div style={{
        backgroundImage: "linear-gradient(to left, #65dfc9, #6cdbed)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:'grid',
        gridTemplateColumns:'20% 1fr',
        // display:'flex'
        fontFamily: "sans-serif"
      }}
    > 
    <BrowserRouter>
      <div style={{backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.3))" ,  padding: '20px', display:'flex'}}><Head/></div>
        <Switch>
      <div>
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/progects" component={Test} />
      <Route exact path="/about" component={About} />
      </div>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
