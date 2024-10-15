"use client";
import React from "react";
import Navbar from "./component/Navbar";
import Carouselone from "./component/carouselone";
import News from "./component/News";
import Offers from "./component/offers";
import Youtube from "./component/Youtube";
import NewArrivals from "./component/NewArrivals";
import Bestseller from "./component/Bestseller";
import PopularCatagories from "./component/PopularCatagories";
import OffersList from "./component/OffersList";
import AwardWinners from "./component/AwardWinners";
import Footer from "./component/Footer";

function page() {
  return (
    <div className="p-0 m-0">
      <Navbar />
      <div className="w-full px-[72px] m-0 p-0">
        <div className="w-full py-4 flex justify-between gap-4">
          <div className="w-8/12 h-[360px] ">
            <Carouselone />
          </div>
          <div className="w-4/12 h-[360px] ">
            <News />
          </div>
        </div>

        <div className="w-full pb-4   flex justify-between gap-4">
          <div className="w-5/12 h-[400px]">
            <Offers />
          </div>
          <div className="w-7/12 h-[400px]">
            <Youtube />
          </div>
        </div>

        <div className="w- full pb-4">
          <NewArrivals />
        </div>

        <div className="w- full pb-4">
          <Bestseller />
        </div>

        <div className="w- full pb-4">
          <PopularCatagories />
        </div>

        <div className="w- full pb-4">
          <OffersList />
        </div>

        <div className="w- full pb-4">
          <AwardWinners />
        </div>

        <div className="w- full">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default page;
