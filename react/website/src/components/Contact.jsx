function Contact() {
  return (
    <section className="contact-section d-flex flex-column align-items-center justify-content-center bg-light">
      <h2 className="fw-bold mb-4">Contact Us</h2>

      <form className="contact-form bg-white shadow rounded p-4">
        <input className="form-control mb-3" placeholder="Your Name" />
        <input className="form-control mb-3" placeholder="Email" />
        <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
        <button className="btn btn-primary w-100">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
