import React, { useEffect, useState } from "react";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    for (const contact of contacts) {
      if (name === contact.name) {
        setDuplicate(true);
      }
    }
  }, [contacts, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      setName("");
      setEmail("");
      setPhone("");
      addContact(name, phone, email);
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
