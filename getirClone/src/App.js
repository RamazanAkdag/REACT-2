import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favorites></Favorites>
      <MobileApp></MobileApp>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}
