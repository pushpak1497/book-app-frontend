import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full md:order-1 order-2">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literature World. From heart-pumping
          thrillers to captivating memoirs,this week's new releases offer
          something for everyone.
        </p>
        <button className="btn-primary ">Subscribe</button>
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-end md:order-2 order-1">
        <img src={bannerImg} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
