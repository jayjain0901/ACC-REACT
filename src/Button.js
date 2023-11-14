import './button.css'

const Button = (props) => {
    
  return (
    <button onClick = {props.click} className="state--title">+{props.increment}</button>
  );
}
export default Button;
