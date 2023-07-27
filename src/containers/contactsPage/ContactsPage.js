import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ addContacts, contacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const [validate, setValidate] = useState(false);
  const phoneRegex = /^[\d -]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameDuplicate = contacts.some((contact) => contact.name === name);
    const isPhoneValid = phoneRegex.test(phone);
    const isEmailValid = emailRegex.test(email);

    if (isNameDuplicate) {
      setDuplicate(true);
    } else if (!isEmailValid || !isPhoneValid) {
      setValidate(true)
      console.log(isEmailValid, isPhoneValid)
      console.log("Invalid phone or email format");
    } else {
      const newContact = {
        name: name,
        phone: phone,
        email: email,
      };

      addContacts(newContact);
      setName("");
      setPhone("");
      setEmail("");
      setDuplicate(false);
      setValidate(false);
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
        {duplicate && <p>Contact name is already exist!</p>}
        {validate && <p>Invalid phone or email format</p>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
