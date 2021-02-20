import './style.scss';

const CTAButton = ({ text }) => (
  <div className="ctabutton-container">
    <button type="button">
      {text}
      <div className="fill" />
    </button>
  </div>
);

export default CTAButton;
