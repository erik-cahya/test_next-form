// pages/contact.js
export default function Contact() {
  const style = {
    marginTop:{
      marginTop: '20px'
    },
    textBlack:{
      color: 'black'
    }
  }
    return (
      <div>
        <h1>Contact Us</h1>
        <form 
          name="contact" method="POST" 
          data-netlify="true"
          data-netlify-honeypot="bot-field">
            
          <input type="hidden" name="form-name" value="contact" />
          <div style={style.marginTop}>
            <label>
              Name: <input type="text" name="name" style={style.textBlack}/>
            </label>
          </div>
          <div style={style.marginTop}>
            <label>
              Email: <input type="email" name="email" style={style.textBlack}/>
            </label>
          </div>
          <div style={style.marginTop}>
            <label>
              Message: <textarea name="message" style={style.textBlack}></textarea>
            </label>
          </div>
          <div style={style.marginTop}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }