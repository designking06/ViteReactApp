import React, { useState } from 'react';

function Contact() {
  const contactInfo = (
    <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
    </ul>
  );

  return (
      <div id="authorization">
        <h1>Contact</h1>
        {contactInfo}
      </div>
  );
}

export default Contact;