import  { useEffect, useState } from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    showButton && (

      <div className="scroll-to-top" onClick={scrollToTop}>
        <RiArrowUpSLine />
      </div>
    )
  );
};

export default ScrollToTop;