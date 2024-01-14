import first from './images/homepage.png';
import second from './images/sypage.png';
import third from './images/students.png';
import fourth from './images/students2.png';
import fifth from './images/subjects.png';
import React from 'react';

const capstone = [
    first, second, third, fourth, fifth
];
const delay = 5000;

export default function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === capstone.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
        resetTimeout();
      }, [index]);

    return (
      <div className="slideshow">
        <div 
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {capstone.map((image, index) => (
            <img className="slide" key={index} src={image}/>
          ))}
        </div>
        <div className="slideshowDots">
        {capstone.map((_, idx) => (
          <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>
      </div>
    );
  }