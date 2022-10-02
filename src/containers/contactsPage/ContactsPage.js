import React, { useEffect, useState } from "react";
import { TileList } from "../../../../../../Downloads/react_challenge_solution/off-platform/src/components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

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
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactArray={contacts} />
      </section>
    </div>
  );
};
