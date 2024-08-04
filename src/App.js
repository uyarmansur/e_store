import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import BannerBottom from "./components/BannerBottom/BannerBottom";
import MostLiked from "./components/MostLiked/MostLiked";
import WhyJoin from "./components/WhyJoin/WhyJoin";
import HomePageSlider from "./components/HomePageSlider/HomePageSlider";
import Collection from "./components/Collection/Collection";
import CollectedShoes from "./components/CollectedShoes/CollectedShoes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App bg-lightYellow">
      <div className="p-4">
        <Header />
        <Banner />
        <BannerBottom />
      </div>
      <MostLiked />
      <WhyJoin />
      <HomePageSlider />
      <Collection />
      <CollectedShoes />
      <Footer />
    </div>
  );
}

export default App;
