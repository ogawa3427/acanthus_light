import React from 'react';

function Myheader({ mode }) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#E0E0E0"}}>
      <a href={url} style={{color: "#33657F", textDecoration: 'none' }}>
        <h1 style={{color: "#33657F"}}>acanthus_light</h1>
      </a>
      {mode === "original" 
      ? <h2 style={{color: "orangered"}}>Original</h2> 
      : <h2 style={{color: "#33657F"}}>Lightened</h2>}
    </div>
  );
}

export default Myheader;