import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/";
import Carousel from "./components/elements/Carousel/Carousel";
import { SectionLayout } from "./components/layout/index";
import imgsc from "./assets/dish.jpg";
import altpic1 from "./assets/bg2.jpg";
import altpic2 from "./assets/bg3.jpg";
import altpic3 from "./assets/bg4.jpg";
import Form from "./components/elements/Form";
import Contact from "./components/elements/Contact";

function App() {
  const config = {
    api: `${process.env.REACT_APP_API}`,
    title: "Contact Me",
    successMessage: "Thank you for contcting me.",
    errorMessage: "Sorry we have some problems.",
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      msg: ""
    },
    fieldsConfig: [
      {
        id: 1,
        label: "First Name",
        fieldName: "firstName",
        type: "text",
        placeholder: "Your First Name",
        isRequired: true,
        klassName: "first-name-field"
      },
      {
        id: 2,
        label: "Last Name",
        fieldName: "lastName",
        type: "text",
        placeholder: "Your Last Name",
        isRequired: true,
        klassName: "last-name-field"
      },
      {
        id: 3,
        label: "Email",
        fieldName: "email",
        type: "email",
        placeholder: " Your Email",
        isRequired: true,
        klassName: "email-field"
      },
      {
        id: 4,
        label: "Message",
        fieldName: "msg",
        type: "textarea",
        placeholder: "Write something.....",
        isRequired: true,
        klassName: "message-field"
      }
    ]
  };
  return (
    <div className="App">
      <Navbar />
      <SectionLayout imgsrc={[imgsc, altpic1, altpic2, altpic3]} />

      {/* <Carousel /> */}
      <Contact />
      <Form config={config} />
      {/* <div className="test">
      </div> */}
    </div>
  );
}

export default App;
