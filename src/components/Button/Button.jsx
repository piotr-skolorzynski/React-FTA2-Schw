import './button.css';

const Button = ({ children, style, type = 'button', action }) => {
  return (
    <button className='button' style={style} type={type} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
