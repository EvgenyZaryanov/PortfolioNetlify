import React, { useState } from 'react';
import './form.css';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSended, setIsSended] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === '' || name === '' || phone === '') {
      return;
    }
    const data = {
      name,
      email,
      message
    };
    console.log(data);

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  return (
    <div className="container">
      <h1 className="title">Отправить письмо</h1>
      {!isSended && (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__input"
            id="input__email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="form__input"
            id="input__name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Имя"
          />
          <input
            className="form__input"
            id="input__tel"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Телефон"
          />
          <textarea
            className="form__input message"
            id="input__message"
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Предложение о сотрудничестве"
          />
          <button className="submitButton" type="submit">
            Отправить
          </button>
        </form>
      )}
      {isSended && <p>Сообщение отправлено!</p>}
    </div>
  );
}
