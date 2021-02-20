import './style.scss';
import CTAButton from 'widgets/Button';
import Logo from 'shared/Logo';

const Hero = () => (
  <div className="hero-container">
    <Logo type="dark" />
    <div className="content">
      <h3 className="title">
        INTERACTIVE CONCERT EXPERIENCE
      </h3>
      <p className="sub-title">
        Experience your favorite artists like never
        before and from the comfort of your own home.
      </p>
      <CTAButton text="Try it now" />
    </div>
  </div>
);

export default Hero;
