import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import "./popup.css";

function Contactme() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const form = useRef();
  const sendEmail = (e) => {
    if (
      document.getElementById("usernameinput").value !== "" &&
      document.getElementById("emailinput").value !== "" &&
      document.getElementById("messageinput").value !== ""
    ) {
      e.preventDefault();

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("done");
            toggleModal();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  
  return (
    <>

    <section className="contact">
      <div className="contact-wrap">
        <div className="contact-one">
          <center>
            <img className="catgif" src="../cat.gif" alt="Rotating Cat"></img>
          </center>
        </div>
        <div className="contact-two">
          <h2>Shoot me a message!</h2>

          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              name="user_name"
              placeholder="Enter full name..."
              type="text"
              required
              id="usernameinput"
            />
            <label>Email</label>
            <input
              id="emailinput"
              name="user_email"
              placeholder="Enter email..."
              type="email"
              required
            />
            <label>Message</label>
            <textarea
              id="messageinput"
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button className="sendbutton" onClick={sendEmail}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
    {modal && (
        <div className="modal-wrap">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-contents">
            <h2>Message sent!</h2>
            <p>Thank you for contacting me. I will get back to you shortly!</p>
            <button
              className="popup-button"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default Contactme;