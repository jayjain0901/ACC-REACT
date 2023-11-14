import Button from './Button'
import Display from './Display'
import { useState } from "react";

const App = () => {
  const [result, setResult] = useState(42)
  const increment1 = () => {
    setResult(result+1)
  }
  const increment5 = () => {
    setResult(result+5)
  }
  const increment10 = () => {
    setResult(result+10)
  }
  const increment50 = () => {
    setResult(result+50)
  }

  const {PI, E, SQRT2} = Math;

const circle = {
  label : 'circleX',
  radius : 2,
};

const circleArea = ({radius}) => {
  (PI * radius * radius).toFixed(2);
}

console.log(circleArea(circle));

// console.log(
//   "hello"
// );

  return (
    <>
    <Button  click={increment1}  increment={1}/>
    <Button  click={increment5}  increment={5}/>
    <Button  click={increment10}  increment={10}/>
    <Button  click={increment50}  increment={50}/>
    <Display message={result}/>
    </>
  )
}

export default App;
