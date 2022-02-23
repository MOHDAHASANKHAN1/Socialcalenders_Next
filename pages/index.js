import Image_Banner from "../Components/Image_Banner";
import Choose_Industry from "../Components/Choose_Industry";
import Category_Home from "../Components/Category_Home";
import Contact_Us_Home from "../Components/Contact_Us_Home";
import About_Us_Home from "../Components/About_Us_Home";
import Learnmore_Become_Affiliate from "../Components/Learnmore_Become_Affiliate";
import New_Releases from "../Components/New_Releases";
import Best_Sellers from "../Components/Best_Sellers";
import Super_Sale_Image_Banner from "../Components/Supersale_Image_Banner";
import Loader from '../Components/Loader';
import Router from 'next/router';
import { useState } from "react";

function index() {

  const Loding = () => {
    const [loading, setLoading] = useState(true);

    Router.onRouteChangeStart = url => {
      setLoading(false);
    }
    Router.onRouteChangeComplete = url => {
      setLoading(true);
    }
    if (loading) {
      return (
        <>
          <Image_Banner />
          <Choose_Industry />
          <Category_Home />
          <Super_Sale_Image_Banner />
          <Best_Sellers />
          <Learnmore_Become_Affiliate />
          <New_Releases />
          <Contact_Us_Home />
          <About_Us_Home />

        </>
      );
    } else {
      return (
        <>
          <Loader />
        </>
      );
    }
  }


  return (
    <>
      <Loding />
    </>
  );
}

export default index;
