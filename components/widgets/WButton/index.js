import './style.scss';
import cx from 'classnames';

const WCTAButton = ({ text, big, type = 'red' }) => (
  <div className={cx('wctabutton-container', { big }, type)}>
    <button type="button">
      {text}
    </button>
  </div>
);

// Grid effect on hover of white button

/* const WCTAButton = ({ text }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const buttonRef = useRef(null);
  useEffect(() => {
    buttonRef.current.onmousemove = (e) => {
      setX(e.pageX - e.target.offsetLeft);
      setY(e.pageY - e.target.offsetTop);
    };
  }, []);
  return (
    <div className="wctabutton-container">
      <button
        type="button"
        ref={buttonRef}
        style={{
          '&::before':
           `left: ${x} ;
           top: ${y}`,
        }}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};
 */
export default WCTAButton;
