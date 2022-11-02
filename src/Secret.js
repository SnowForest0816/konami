import React, { useEffect, useState } from 'react';
import './App.css';

export default function Secret({hide}) {
  const [issues, setIssues] = useState([]);
  const [items, setItems] = useState();

  useEffect(() => {
      fetch("https://api.github.com/repos/elixir-lang/elixir/issues")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
  },[]);

  useEffect(() => {
    if(items) {
      setIssues(items.slice(0, 5).sort((a, b) => b.updated_at.localeCompare(a.updated_at)))
    }

    setTimeout(() => {
      hide();
    }, 15000);

  }, [items, hide])

  return (
    <div className='App'>
      <div>Success!</div>
      {
        issues.map((item, idx) => (
          <div key={idx}>
            nickname: { item.user.login } 
            title: { item.title }
          </div>
        ))
      }     
    </div>
  );
};