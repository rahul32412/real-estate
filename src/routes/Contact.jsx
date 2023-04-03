import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form has been submitted");
  };
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn-submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
