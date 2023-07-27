import React from "react";

export const Tile = (props) => {
  console.log(props)
  const { contact, appointment } = props;

  if (contact) {
    return (
      <div className="tile-container">
        <p className="tile-title">{contact.name}</p>
        <p className="tile">Phone: {contact.phone} | Email: {contact.email}</p>
      </div>
    );
  } else if (appointment) {
    return (
      <div className="tile-container">
        <p className="tile-title">{appointment.name}</p>
        <p className="tile">Date: {appointment.date} | Time: {appointment.time}</p>
        <p className="tile">Contact: {appointment.contact}</p>
      </div>
    );
  }
};
