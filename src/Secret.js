import React, { useEffect, useState } from 'react';
import './App.css';

export default function Secret() {
  const [issues, setIssues] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
      fetch("https://api.github.com/repos/elixir-lang/elixir/issues")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setDataisLoaded(true);
      })
  },[]);

  useEffect(() => {
    if(DataisLoaded) {
      setIssues(items.slice(0, 5).sort((a, b) => b.updated_at.localeCompare(a.updated_at)))
    }

    setTimeout(() => {
      setIssues([]);
    }, 15000)
  }, [DataisLoaded, items])

  return (
    <div className='App'>
      {
        issues.map((item) => (
          <div>
            nickname: { item.user.login } 
            title: { item.title }
          </div>
        ))
      }     
    </div>
  );
};