import React from 'react';
import './History.scss';

export default function History() {
  let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
  return (
    <>
      {
        history.map((query) => {
          return <div onClick={handelClick} key={query.method + query.url}><section id='spanMethod'><span>{query.method}</span></section><section id='spanURL'><span>{query.url}</span></section></div>;
        })
      }
    </>
  )
}

function handelClick(e) {
  const obj = { url: e.currentTarget.childNodes[1].childNodes[0].firstChild.data, method: e.currentTarget.childNodes[0].childNodes[0].firstChild.data };
  const selected = document.getElementById(`url`);
  selected.value = obj.url;
  const radiobtn = document.getElementById(obj.method);
  radiobtn.checked = true;
  const button = document.getElementById('btn')
  button.click();
}