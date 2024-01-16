import React from 'react';

function Myheader({ mode }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#E0E0E0"}}>
      <h1 style={{color: "#33657F"}}>acanthus_light</h1>
      {mode === "original" 
      ? <h2 style={{color: "orangered"}}>Original</h2> 
      : <h2 style={{color: "#33657F"}}>Lightened</h2>}
    </div>
  );
}

export default Myheader;