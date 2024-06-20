import React from "react";
import Header from "../../components/header/indexHeader";
import Footer from "../../components/footer/indexFooter";
import Trailer from "../../components/trailer/indexTrailer";
import ActorCards from "../../components/ActorCards/indexActorCards";
import Banner from "../../components/Banner/indexBanner";

function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Trailer />
            <ActorCards />
            <Footer />
        </div>
    )
};

export default Home;