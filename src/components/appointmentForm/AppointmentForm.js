import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  name,
  setName,
  contacts,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker
        contacts={contacts}
        value={contact}
        name={name}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
    </>
  );
};
