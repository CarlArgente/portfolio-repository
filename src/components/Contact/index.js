import React, { useState, useRef } from "react";
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`
const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`
const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

 // Validation function
 const validateForm = () => {
  let newErrors = {};

  if (!formData.from_email) {
    newErrors.from_email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
    newErrors.from_email = "Invalid email format";
  }
  if (!formData.from_name) newErrors.from_name = "Name is required";
  if (!formData.subject) newErrors.subject = "Subject is required";
  if (!formData.message) newErrors.message = "Message cannot be empty";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

 // Handle form submission
 const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  // Update the message input field directly
  const updatedMessage = `${formData.message}\n\nFrom: ${formData.from_email}`;

  // Update the message field value in the form
  e.target.message.value = updatedMessage;

  // Now send the form with the updated message
  emailjs
    .sendForm("service_zvz5sdb", "template_6gjsgs1", e.target, "Hfx6SIMK9H5ZAN4qS")
    .then(
      (result) => {
        setOpen(true);
        setFormData({ from_email: "", from_name: "", subject: "", message: "" }); // Reset form state
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
};


// Handle input change
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>

          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
          {errors.from_email && <span style={{ color: "red" }}>{errors.from_email}</span>}

          <ContactInput
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
          {errors.from_name && <span style={{ color: "red" }}>{errors.from_name}</span>}

          <ContactInput
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span style={{ color: "red" }}>{errors.subject}</span>}

          <ContactInputMessage
            placeholder="Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}

          <ContactButton type="submit" value="Send" />
        </ContactForm>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact