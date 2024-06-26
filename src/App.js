import React, { useEffect, useState, lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/";
// import Carousel from "./components/elements/Carousel/Carousel";
// import { SectionLayout } from "./components/layout/index";
import imgsc from "./assets/dish.jpg";
import altpic1 from "./assets/bg2.jpg";
import altpic2 from "./assets/bg3.jpg";
import altpic3 from "./assets/bg4.jpg";
import Form from "./components/elements/Form";
import Loading from "./components/elements/Loading";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import $ from "jquery";

function App() {

  const Carousel = lazy(() => import('./components/elements/Carousel/Carousel'));
  const SectionLayout = lazy(() => import('./components/layout/sectionONE'));

  const config = {
    api: `${process.env.REACT_APP_API}`,
    title: "Contact Us",
    successMessage: "Thank you for contcting me.",
    errorMessage: "Sorry we have some problems.",
    fields: {
      firstName: "",
      lastName: "",
      email: "",
      msg: "",
    },
    fieldsConfig: [
      {
        id: 1,
        label: "First Name",
        fieldName: "firstName",
        type: "text",
        placeholder: "Your First Name",
        isRequired: true,
        klassName: "first-name-field",
      },
      {
        id: 2,
        label: "Last Name",
        fieldName: "lastName",
        type: "text",
        placeholder: "Your Last Name",
        isRequired: true,
        klassName: "last-name-field",
      },
      {
        id: 3,
        label: "Email",
        fieldName: "email",
        type: "email",
        placeholder: " Your Email",
        isRequired: true,
        klassName: "email-field",
      },
      {
        id: 4,
        label: "Message",
        fieldName: "msg",
        type: "textarea",
        placeholder: "Write something.....",
        isRequired: true,
        klassName: "message-field",
      },
    ],
  };
  const { innerWidth: width, innerHeight: height } = window;

  const [state, setstate] = useState({ nvState: 0 });
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        // $("#navbar")[0].style.top = "0";
        $("#navbar")[0].classList.add("navHide");
        $("#nvbarcollaps")[0].classList.add("nvbarcollapsHide");
      } else {
        // $("#navbar")[0].style.top = "-10em";
        $("#navbar")[0].classList.remove("navHide");
        $("#nvbarcollaps")[0].classList.remove("nvbarcollapsHide");
      }
      // console.log($("#navbar")[0].classList.add("navHide"));
      prevScrollpos = currentScrollPos;
    };
    $("a.liens").click(function (event) {
      event.preventDefault();
      let $href = $(this).attr("href");

      $("html, body").animate(
        {
          // scrollTop: $("#elementtoScrollToID").offset().top
          scrollTop: $($href).offset().top,
        },
        200,
        "swing",
        () => (window.location.hash = this.hash)
      );
    });

    setstate({ nvState: 1 });
  }, [width < 500]);
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <SectionLayout imgsrc={[imgsc, altpic1, altpic2, altpic3]} />
        <Carousel />
      </Suspense>
      <Form config={config} />
    </div>
  );
}

export default App;
