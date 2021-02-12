import * as React from 'react';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
  return (
    <PageLayout>
      <div> Contact Page </div>
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        netlify-honeypot="false-field"
        data-netlify="true"
      >
        <p className="hidden">
          <input name="false-field" />
        </p>
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Subject: <input type="text" name="subject" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </PageLayout>
  );
};

export default ContactPage;
