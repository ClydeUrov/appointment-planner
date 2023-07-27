import React from "react";

export const ContactPicker = ({value, name, contacts, onChange}) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contacts && contacts.length > 0
        ? contacts.map((contact) => (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
          ))
        : null}
    </select>
  );
};
