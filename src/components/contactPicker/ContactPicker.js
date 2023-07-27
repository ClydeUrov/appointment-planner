import React from "react";

export const ContactPicker = ({value, name, contacts, onChange}) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {contacts && contacts.length > 0
        ? contacts.map((contact) => (
            <option key={contact.name} value={contact.name}>
              {contact.name}
            </option>
        ))
        : <option value="">No Contact Selected</option>
      }
    </select>
  );
};
