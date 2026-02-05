import ItemCards from "./ItemCards";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeaturedFlowers from "./FeaturedFlowers";
import Support from "./Support";
import Deals from "./Deals";
import Instagram from "./Instagram";
import NewsLetter from "./NewsLetter";

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturedFlowers />
      <Support />
      <Deals />
      <Instagram />
      <NewsLetter />
    </div>
  )
}

export default App;