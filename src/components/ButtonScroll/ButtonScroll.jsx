import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const ButtonScroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
      
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <style type="text/css">
        {`
              .back-to-top {
                position: fixed;
                bottom: 25px;
                right: 25px;
                font-size: 40px;
                background: white;
                color: #6244C5;
                cursor: pointer;
                border-radius: 100px;
                border: none;
                box-shadow: 0 2px 10px #000;
                z-index : 999;
              }
              .back-to-top:hover {
                color: white;
                background: #6244C5;
              }
            `}
      </style>
      <FaAngleUp
        className="back-to-top" 
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          right: "20px",
        }}
      />
    </>
  );
};

export default ButtonScroll;
