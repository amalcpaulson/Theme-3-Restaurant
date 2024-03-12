import React, { useState } from "react";
import { CloseBtn, Discount, NonVeg, Veg } from "../../../../assets/svg";
import styles from "./index.module.css";

type Props = {};

export const OnlineOders = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Coupons />
      <YourMind />
      <ExcitingOffers />
      <Selections />
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
      <div className={styles.Header}>
        <h1>What’s on your mind</h1>{" "}
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
        </div>
      </div>
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

import image1 from "./assets/excitingoffers/img1.png";
import image2 from "./assets/excitingoffers/img2.png";
import image3 from "./assets/excitingoffers/img3.png";

export const ExcitingOffers = () => {
  const data = [
    {
      text: "Claim your discount 30% daily now!",
      image: image1,
    },
    {
      text: "Claim your discount 30% daily now!",
      image: image2,
    },
    {
      text: "Claim your discount 30% daily now!",
      image: image3,
    },
  ];
  const swiperRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className={styles.ExcitingOffers}>
      <h1>Exciting offers</h1>
      <div className={styles.SwiperContainer} ref={swiperRef}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <h2>{item.text}</h2>
                <button>Order now</button>
              </div>
              <img src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { useDispatch } from "react-redux";
import { navData, productData } from "./Data";
import { addToCart } from "../../../../store/cart/cartSlice";
import { FaStar } from "react-icons/fa";
import { Arrowsvg, TickSvg } from "./assets/svg";

export const Selections = () => {
  const [active, setActive] = React.useState(0);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Sort by price: Lower First"
  );

  const options = [
    "Sort by price: Lower First",
    "Sort by price: Higher First",
    "Sort by rating: Higher First",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };
  return (
    <div className={styles.SelectionsWrapper}>
      <div className={styles.FilterContent}>
        <p>
          Biriyani{" "}
          <button>
            <CloseBtn />
          </button>
        </p>
      </div>
      <div className={styles.FilterSection}>
        <div>
          <button className={styles.Active}>
            <Veg />
            Veg
          </button>
          <button>
            <NonVeg />
            Non Veg
          </button>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader} onClick={toggleDropdown}>
            <div>
              {" "}
              <p>
                <Arrowsvg />
              </p>{" "}
              <p style={{ transform: "rotate(180deg)" }}>
                <Arrowsvg />
              </p>
            </div>
            {selectedOption}
          </div>
          {isOpen && (
            <div className={styles.dropdownList}>
              {options.map((option, index) => (
                <div
                  key={index}
                  className={styles.dropdownItem}
                  onClick={() => selectOption(option)}
                >
                  {option} {selectedOption == option ? <TickSvg /> : ""}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.Selections}>
        <div className={styles.LeftNav}>
          {navData.map(({ name }, index) => (
            <button
              key={index}
              className={active === index ? styles.activebtn : ""}
              onClick={() => setActive(index)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className={styles.RightDiv}>
          {productData.map(({ name, img, rate, quantity, id }, index) => (
            <div key={index} className={styles.Individual}>
              <Veg />
              <p className={styles.RatingTop}>
                4.5
                <FaStar />
              </p>{" "}
              <img src={img} alt={`Image of ${name}`} />{" "}
              <p className={styles.Name}>{name}</p>{" "}
              <p className={styles.Rate}>₹ {rate}</p>
              {quantity === 0 ? (
                <button>Add</button>
              ) : (
                <div className={styles.ButtonWrap}>
                  <button
                    aria-label={`Add ${name} to cart`}
                    onClick={() =>
                      dispatch(addToCart({ img, name, rate, quantity, id }))
                    }
                    className={styles.Minus}
                  >
                    <p></p>
                  </button>
                  <p>1</p>
                  <button
                    aria-label={`Add ${name} to cart`}
                    onClick={() =>
                      dispatch(addToCart({ img, name, rate, quantity, id }))
                    }
                    className={styles.Add}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
