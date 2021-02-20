import './style.scss';
import Logo from 'shared/Logo';
import WCTAButton from 'widgets/WButton';
import CustomCursor from 'widgets/CustomCursor';
import { useRef, useEffect, useState } from 'react';

const SoundSection = () => {
  const parentRef = useRef(null);
  const [parentEle, setParentEle] = useState(null);
  useEffect(() => {
    setParentEle(parentRef.current);
  }, [parentRef]);
  return (
    <div className="sound_section-container">
      <Logo type="red" />
      <div className="right-cta-btn">
        <WCTAButton text="Try it now" type="red" />
      </div>
      <div className="content">
        <div className="left-section">
          <h3 className="title">
            SUPERIOR SOUND
          </h3>
          <h4 className="sub-title">
            Experience live versions of your favorite songs.
          </h4>
          <WCTAButton text="See Demo" type="red" big />
        </div>
        <div className="right-section" ref={parentRef}>
          <img className="left-sound" src="/images/leftSpeaker.png" alt="left-sound" />
          <img className="right-sound" src="/images/rightSpeaker.png" alt="right-sound" />
          <CustomCursor parentEle={parentEle} audio />
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
