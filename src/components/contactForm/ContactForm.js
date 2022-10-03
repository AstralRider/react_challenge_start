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
      <input type="text" value={phone} onChange={handlePhone} />
      <input type="text" value={email} onChange={handleEmail} />
      <input type="submit" value="submit" />
    </form>
  );
};
