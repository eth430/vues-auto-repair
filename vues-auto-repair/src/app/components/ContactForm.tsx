"use client";

import { useState } from "react";
import { 
  TextField, 
  Button, 
  MenuItem, 
  Box 
} from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: ""
    });
  };

  const services = [
    { value: "", label: "Select a service" },
    { value: "oil-change", label: "Oil Change" },
    { value: "brakes", label: "Brake Service" },
    { value: "diagnostics", label: "Engine Diagnostics" },
    { value: "tires", label: "Tire Services" },
    { value: "ac", label: "AC Service" },
    { value: "transmission", label: "Transmission Service" },
    { value: "other", label: "Other" },
  ];

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        fullWidth
        required
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        required
        type="email"
        label="Email Address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        type="tel"
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
      />

      <TextField
        fullWidth
        select
        label="Service Needed"
        name="service"
        value={formData.service}
        onChange={handleChange}
        variant="outlined"
      >
        {services.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        required
        multiline
        rows={4}
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Please describe your vehicle's issue or service needs..."
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ py: 1.5 }}
      >
        Send Message
      </Button>
    </Box>
  );
}