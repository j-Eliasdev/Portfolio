import React, { useState } from "react";
import { Container } from "./components";
import { Formik, Form, Field } from "formik";
import {
  GrLinkedinOption,
  GrInstagram,
  GrGithub,
  GrMail,
} from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import PDFCV from "../../assets/img/my-cv.pdf";

export default function ContactView() {
  const [formSend, SetFormSend] = useState(false);

  // ----------Envía formulario a la api de google sheets---------------------
  function FormularioE() {
    const form = document.forms["submit-to-google-sheet"];
    fetch(
      "https://script.google.com/macros/s/AKfycbwTBUuSkZk7Sdn3P_2G657pA_THP2hAJwb5xUM2nySs_5DKofZXIkNzXefS6uIhVH07Dg/exec",
      { method: "POST", body: new FormData(form) }
    )
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error));
  }

  return (
    <Container>
      <div className="col-left">
        <h1 className="sub-title">Contáctame</h1>
        <p>
          <GrMail className="icons-contact" />
          j.batistadev@gmail.com
        </p>
        <p>
          <BsFillTelephoneFill className="icons-contact" />
          +34 653 14 32 17
        </p>
        <div className="contact-sci">
          <a href="https://www.linkedin.com/in/jos%C3%A9-el%C3%ADas-batista-rosario-525271246/">
            <GrLinkedinOption />
          </a>
          <a href="https://instagram.com/elias_0113?igshid=MzRlODBiNWFlZA==">
            <GrInstagram />
          </a>
          <a href="https://github.com/j-Eliasdev">
            <GrGithub />
          </a>
        </div>

        <div className="btn-box">
          <a href={PDFCV} download>
            Descargar CV
          </a>
        </div>
      </div>
      <div className="col-right">
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            mensaje: "",
          }}
          validate={(valores) => {
            let errores = {};

            // validación nombre

            if (!valores.nombre) {
              errores.nombre = "Por favor ingresa un nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
            }

            // validación email

            if (!valores.email) {
              errores.email = "Por favor ingresa un email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.email
              )
            ) {
              errores.email =
                "El email solo puede contener letras, números, puntos, guiones y guion bajo";
            }
            return errores;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            FormularioE();
            resetForm();
            SetFormSend(true);
            setTimeout(() => SetFormSend(false), 5000);
          }}
        >
          {({ errors, touched }) => (
            <Form name="submit-to-google-sheet">
              <Field name="nombre" placeholder="Nombre" required />
              {errors.nombre && touched.nombre ? (
                <div className="error">{errors.nombre}</div>
              ) : null}

              <Field name="email" placeholder="Email" required />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <Field
                as="textarea"
                name="mensaje"
                rows="6"
                placeholder="Mensaje"
              />

              <button type="submit" className="btn-form">
                Enviar
              </button>
            </Form>
          )}
        </Formik>

        {formSend && <span id="msg">Formulario enviado con éxito!</span>}
      </div>
    </Container>
  );
}
