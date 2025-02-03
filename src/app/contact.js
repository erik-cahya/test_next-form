// pages/contact.js
export default function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true" action="/thank-you">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label>
              Name: <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              Email: <input type="email" name="email" required />
            </label>
          </div>
          <div>
            <label>
              Message: <textarea name="message" required></textarea>
            </label>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }