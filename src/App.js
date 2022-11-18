
import './App.css';
import {Footer,Blog,Features,Possibility,WhatGpt3,Header} from "./containers";
import {Cta,Brand,Navbar} from "./components";
function App() {
  return (
    <div className="App">
     <div className="gradient">
      <Navbar/>
      <Header/>
     </div>
     <Brand/>
     <WhatGpt3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
