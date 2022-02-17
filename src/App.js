import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (a) => {
    a.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>Paragraph Generator </h3>
      <form className='para-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(a) => setCount(a.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='para-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;