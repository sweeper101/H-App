import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="form_container">
      <div class="container">
        <div class="container_form">
          <div class="container_form-text">
            <h1>Contact Us</h1>
            <p>Fill up the form below to send us a message.</p>
          </div>
          <div>
            <form action="" method="POST">
              <div class="container_form_name">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="container_form_email">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  required
                />
              </div>
              <div class="container_form_number">
                <label for="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="91 1234-567"
                  required
                />
              </div>
              <div class="container_form_message">
                <label for="message">Your Message</label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div class="container_form_send">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
