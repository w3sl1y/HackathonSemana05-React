import  React from 'react';
import './assets/css/App.css';

//importar componentes
import Greeting from './components/Greeting';

const App = ()  => {
  return (
    <div className="container">
      <h1>Hello. <br/>Welcome back</h1>
      <section className="componentes">
        <Greeting/>
      </section>
      <button>LOGIN</button>
      <button class="sinFondo">Create Account</button>
    </div>
  );
}

export default App;