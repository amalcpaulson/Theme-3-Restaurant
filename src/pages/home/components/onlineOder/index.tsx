import React, { useRef } from "react";
import { Discount } from "../../../../assets/svg";
import styles from "./index.module.css";

type Props = {};

export const OnlineOders = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Coupons />
      <YourMind />
      <ExcitingOffers />
    </div>
  );
};

export const Coupons = () => {
  const data = [
    {
      rs: "Flat ₹80",
      text: "use flatdeal above ₹199",
    },
    {
      rs: "Free ₹80",
      text: "use flatdeal above ₹199",
    },
    {
      rs: "Flat ₹80",
      text: "use flatdeal above ₹199",
    },
  ];
  return (
    <div className={styles.Coupons}>
      {data.map((item, index) => (
        <div key={index} className={styles.Item}>
          <div>
            <Discount />
            <h1>{item.rs}</h1>
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

import img1 from "./assets/coupons/filter1.png";
import img2 from "./assets/coupons/filter2.png";
import img3 from "./assets/coupons/filter3.png";
import img4 from "./assets/coupons/filter4.png";
import img5 from "./assets/coupons/filter5.png";
import img6 from "./assets/coupons/filter6.png";
import img7 from "./assets/coupons/filter7.png";
import img8 from "./assets/coupons/filter8.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export const YourMind = () => {
  const data = [
    {
      img: img1,
      title: "Cake",
    },
    {
      img: img2,
      title: "Egg Items",
    },
    {
      img: img3,
      title: "Fast Food items",
    },
    {
      img: img4,
      title: "Meals",
    },
    {
      img: img5,
      title: "Biriyani",
    },
    {
      img: img6,
      title: "Noodles",
    },
    {
      img: img7,
      title: "Fried Rice",
    },
    {
      img: img8,
      title: "Biriyani",
    },
  ];
  const contentRef = React.useRef<HTMLDivElement>(null);

  const scrollContentLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Change 300 to your card width or desired scroll amount
    }
  };

  const scrollContentRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Change 300 to your card width or desired scroll amount
    }
  };
  return (
    <div className={styles.YourMind}>
      {" "}
      <div className={styles.NavigateButton}>
        <button onClick={scrollContentLeft} className={styles.button1}>
          <FaArrowLeftLong />
        </button>
        <button
          onClick={scrollContentRight}
          className={styles.button2}
          style={{ backgroundColor: "#337934", color: "white" }}
        >
          <FaArrowLeftLong style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>{" "}
      <h1>What’s on your mind</h1>
      <div className={styles.contentWrapper} ref={contentRef}>
        {data.map((src) => (
          <div className={styles.imgContainer}>
            <img src={src.img} loading="lazy" />
            <h2>{src.title}</h2>
            <div className={styles.line}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

import image1 from './assets/excitingoffers/img1.png'
import image2 from './assets/excitingoffers/img2.png'
import image3 from "./assets/excitingoffers/img3.png";

export const ExcitingOffers = () => {
    const data = [
      {
        text: "Claim your discount 30% daily now!",
        image: image1,
      },
      {
        text: "Claim your discount 30% daily now!",
        image: image1,
      },
      {
        text: "Claim your discount 30% daily now!",
        image: image1,
      },
    ];
  const swiperRef = React.useRef<HTMLDivElement>(null);

  const slideWidth = () => {
    const slide = swiperRef.current
      ? (swiperRef.current.children[0] as HTMLElement)
      : null;
    return slide ? slide.offsetWidth + 20 : 0;
  };

  const slideLeft = () => {
    const scrollAmount = slideWidth();
    if (swiperRef.current) {
      if (swiperRef.current.scrollLeft === 0) {
        swiperRef.current.scrollTo({
          left: swiperRef.current.scrollWidth,
          behavior: "instant",
        });
        swiperRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        swiperRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const slideRight = () => {
    const scrollAmount = slideWidth();
    if (swiperRef.current) {
      if (
        swiperRef.current.scrollLeft + swiperRef.current.offsetWidth >=
        swiperRef.current.scrollWidth
      ) {
        swiperRef.current.scrollTo({ left: 0, behavior: "instant" });
        swiperRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        swiperRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={styles.ExcitingOffers}>
      {" "}
      <div className={styles.SwiperContainer} ref={swiperRef}>
        <div>
          <img src={image1} alt="" />
        </div>
      </div>
      <button onClick={slideLeft} className={styles.LeftNavigator}>
        <IoIosArrowForward />
      </button>
      <button onClick={slideRight} className={styles.RightNavigator}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};
