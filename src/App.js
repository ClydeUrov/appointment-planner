import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContacts = (newContacts) => {
    setContacts([...contacts, newContacts]);
  }

  const addAppointments = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  }

  console.log("first contacts", contacts)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage addContacts={addContacts} contacts={contacts} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage 
        addAppointments={addAppointments} appointments={appointments} contacts={contacts} /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
