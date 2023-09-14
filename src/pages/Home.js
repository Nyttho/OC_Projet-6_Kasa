import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import EmplacementList from "../components/EmplacementList";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <EmplacementList />
      <Footer />
    </div>
  );
};

export default Home;
