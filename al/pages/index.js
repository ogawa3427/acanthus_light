import React, { useEffect, useState } from 'react';

function AbePage() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/abe')
      .then(response => response.json())
      .then(data => setText(data.text));
  }, []);

  return (
    <div>
      <h1>スクレイピングのテストです</h1>
      <pre>{text}</pre>
    </div>
  );
}

export default AbePage;