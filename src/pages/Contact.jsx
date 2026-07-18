export const Contact = () => {

  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    alert("Form Submitted")
  }
  

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your Name"
            name="username"
          />
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            name="email"
            placeholder="enter email"
          />
          <textarea
            className="form-control"
            rows={10}
            name="message"
            placeholder="enter your message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>   
  );
};
