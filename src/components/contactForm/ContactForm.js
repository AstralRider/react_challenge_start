import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  function handleName(e) {
    setName(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleName} />
      <input
        type="tel"
        value={phone}
        onChange={handlePhone}
        pattern="[0][4]{2}-[0-9]4}-[0-9]{3}"
      />

      <input type="email" value={email} onChange={handleEmail} />
      <input type="submit" value="submit" />
    </form>
  );
};
