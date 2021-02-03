import React, {useState} from 'react';
import './style.css';
// https://medium.com/better-programming/create-a-scroll-to-top-arrow-using-react-hooks-18586890fedc
const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };
//if route is Sound setShowScroll false
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <button id="scrollUp" className="scrollTop fa fa-arrow-up" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;