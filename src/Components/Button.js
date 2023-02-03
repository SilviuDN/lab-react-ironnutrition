import './Button.css';

const Button = ({ toggleSearch }) => (
  <button onClick={toggleSearch} className="btn-add">
    +
  </button>
);

export default Button;
