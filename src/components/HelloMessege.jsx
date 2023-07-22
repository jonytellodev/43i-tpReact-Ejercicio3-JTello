import { useState } from "react";

const HelloMessege = ({titleNew}) => {

  
  const [titulo, setTitulo] = useState('');

  return (
    <>
      <h1>{titulo || titleNew}</h1>
      <button onClick={()=> setTitulo('Hello my Friend! (from changed state)!')}>click me for change</button>
    </>
  );
};

export default HelloMessege;
