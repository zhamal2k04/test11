import Navbar from "./Compenents/1Navbar/Navbar";
import Section from "./Compenents/2Section/Section";
import CountryCards from "./Compenents/3Countrycards/CountryCards";
import Bangoonan from "./Compenents/4Bangoonan/Bangoonan";
import Proporties from "./Compenents/5Proporties/Proporties";
import Info from "./Compenents/6Info/Info";
import Servises from "./Compenents/7Servises/Servises";
import Hear from "./Compenents/8Hear/Hear";
import Footer from "./Compenents/9Footer/Footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <CountryCards/>
      <Bangoonan/>
      <Proporties/>
      <Info/>
      <Servises/>
      <Hear/>
      <Footer/>
    </div>
  );
}

export default App;






