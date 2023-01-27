import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario"); // Creates a storage for the name
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName("Luigi"); // When setName is called inside the handleClick it changes the name to the NEW setName
    setAge(100)
  };

  const handleClickAgain = () => {
    setName('Orelso')
    setAge(31)

  };
  return (
    <div className='home'>
      <h1>Homepage</h1>
      <p>
        <span className="nameStyle">{name}</span> is {age} years old
        </p>
      <container>
      <button onClick={handleClick}>Click me!</button>
      <button onClick={() => handleClickAgain("mario")}>Click me again!</button>
      </container>
    </div>
  );
};

export default Home;
