import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Brands from "./components/Brands"
import NewArrivals from "./components/NewArrivals"
import TopSelling from "./components/TopSelling"
import BrowseByStyle from "./components/BrowsByStyle"
import Footer from "./components/Footer"

export default function page() {
  return (
    <div>

    <Header />
    <Hero />
    <Brands />
    <NewArrivals />
    <TopSelling />
    <BrowseByStyle />
    <Footer />
    </div>
  )
}
