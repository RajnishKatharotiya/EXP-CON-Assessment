import './style.scss';
import Logo from 'shared/Logo';
import cx from 'classnames';
import WCTAButton from 'widgets/WButton';
import CustomCursor from 'widgets/CustomCursor';
import { useRef, useEffect, useState } from 'react';

const ContentSeats = ({ type }) => (
  <div className="seat_section-container">
    <Logo type={type} />
    <div className="right-cta-btn">
      <WCTAButton text="Try it now" type={type} />
    </div>
    <div className="content">
      <div className="left-section">
        <div className="circle-one"><p>Image</p></div>
        <div className="circle-two"><p>Image</p></div>
        <div className="circle-three"><p>Image</p></div>
      </div>
      <div className={cx('right-section', type)}>
        <h3 className="title">
          FRONT ROW SEATS
        </h3>
        <h4 className="sub-title">
          Experience concerts up close and personal.
        </h4>
        <WCTAButton text="See Demo" type={type} big />
      </div>
    </div>
  </div>
);

const SeatsSection = () => {
  const parentRef = useRef(null);
  const [parentEle, setParentEle] = useState(null);
  useEffect(() => {
    setParentEle(parentRef.current);
  }, [parentRef]);

  useEffect(() => {
    window.jQuery = require('/public/js/jquery.min.js');
    window.eraser = require('/public/js/jquery.eraser.js');

    window.jQuery('#front-div').eraser();
  }, []);
  return (
    <div className="seat-content_wrapper">
      <CustomCursor parentEle={parentEle} text="Reveal" />
      <div className="front-content" id="front-div" ref={parentRef}>
        <ContentSeats type="yellow" />
      </div>
      <div className="back-content">
        <ContentSeats type="aqua" />
      </div>
    </div>
  );
};

export default SeatsSection;
