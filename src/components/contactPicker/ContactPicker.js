import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <div>
      <select onChange={onChange}>
        <option value="nothing">No option selected.</option>
        {contacts.map((contact) => (
          <option key={contact.name} value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
