import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AbePage() {
  const [text, setText] = useState('');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/api/abe';

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setText(response.data.text);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>スクレイピングのテストです</h1>
      <p>{text}</p>
    </div>
  );
}

export default AbePage;