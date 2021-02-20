/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState, useRef } from 'react';
import './style.scss';
import cx from 'classnames';

const CustomCursor = ({ parentEle = null, audio, text }) => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  const handleAudio = () => {
    if (audio && audioRef?.current) {
      audioRef.current[play ? 'play' : 'pause']();
      setPlay(!play);
    }
  };

  useEffect(() => {
    if (parentEle) {
      parentEle.onmousemove = (e) => {
        const bounds = parentEle.getBoundingClientRect();
        setX(e.clientX - bounds.left);
        setY(e.clientY - bounds.top);
      };
    }
  }, [parentEle]);

  return (
    <button type="button" onClick={handleAudio} className={cx('round-cursor-container', { 'hide-cursor': X < -100 || Y < -100 })} style={{ top: `${Y}px`, left: `${X}px` }}>
      <p>
        {text || 'Click'}
      </p>
      {audio && <audio src="/audio/outfoxing.mp3" crossOrigin="anonymous" ref={audioRef} /> }
    </button>
  );
};

export default CustomCursor;
