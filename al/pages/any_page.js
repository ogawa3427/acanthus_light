import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Myheader from '../components/Myheader';

function AnyPage() {
  const [text, setText] = useState('');
  const [url, setUrl] = useState('https://');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/api/feacher';

  const fetchUrl = () => {
    axios.get(`${apiUrl}?url=${encodeURIComponent(url)}`)
      .then(response => {
        setText(response.data.text);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchUrl();
    }
  };

  return (
    <div>
      <Myheader mode="Lightened" />
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} onKeyDown={handleKeyDown} />
      <button onClick={fetchUrl}>実行</button>
      <p>{text}</p>
    </div>
  );
}

export default AnyPage;