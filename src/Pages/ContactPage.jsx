import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import { Toast, ToastContainer } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactPage() {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => setCaptchaValue(value);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setStatus(t("contact.captchaError"));
      setToastType("danger");
      setShowToast(true);
      return;
    }

    emailjs.sendForm(
      'service_nuy0ff5',
      'template_3mwrmu3',
      form.current,
      'oLq29tbJ-2CVLQwOr'
    ).then(() => {
      setStatus(t("contact.success"));
      setToastType("success");
      setShowToast(true);
      form.current.reset();
      setCaptchaValue(null);
    }).catch((error) => {
      setStatus(t("contact.error"));
      setToastType("danger");
      setShowToast(true);
      console.error(error.text);
    });
  };

  return (
    <>
      <ToastContainer className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>
        <Toast bg={toastType} onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{status}</Toast.Body>
        </Toast>
      </ToastContainer>

      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/R.a5064078369c34a2683c285824e6ba96?rik=fv6qtBV9FRmfkg&pid=ImgRaw&r=0")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative"
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="fw-bold">{t("contact.title")}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">
                  {t("contact.breadcrumbHome")}
                </Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                {t("contact.breadcrumbCurrent")}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container py-5">
        <h2 className="mb-4 text-center">{t("contact.heading")}</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail} className="bg-light p-4 rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label">{t("contact.name")} <span className="text-danger">{t("contact.required")}</span></label>
                <input type="text" name="user_name" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t("contact.email")} <span className="text-danger">{t("contact.required")}</span></label>
                <input type="email" name="user_email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t("contact.phone")} <span className="text-danger">{t("contact.required")}</span></label>
                <input type="tel" name="user_phone" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t("contact.subject")} <span className="text-danger">{t("contact.required")}</span></label>
                <input type="text" name="user_subject" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t("contact.message")} <span className="text-danger">{t("contact.required")}</span></label>
                <textarea name="message" rows="5" className="form-control" required></textarea>
              </div>

              <div className="mb-3">
                <ReCAPTCHA
                  sitekey="6LeBroYrAAAAAHOwFUayCHRZeYvvwTIP0V74z3ra"
                  onChange={handleCaptchaChange}
                />
              </div>

              <button type="submit" style={{ backgroundColor: "#6f42c1" }} className="btn text-white w-100">
                {t("contact.send")}
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="rounded shadow-sm overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9024036872065!2d11.471043975675759!3d3.83111314858067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bce2a2b349471%3A0x9bc7ab5b90db6245!2sDOVV%20MENDONG!5e0!3m2!1sfr!2scm!4v1752669266444!5m2!1sfr!2scm"
                width="100%" height="450" style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
