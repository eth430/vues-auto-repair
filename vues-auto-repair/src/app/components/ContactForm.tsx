"use client";

import { useState } from "react";
import { 
  TextField, 
  Button, 
  MenuItem, 
  Box 
} from '@mui/material';
import { colors } from '@/theme';

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
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.racing.lightGray,
            color: colors.racing.midnight,
            fontWeight: 500,
            '& fieldset': {
              borderColor: colors.racing.lightGridLine,
            },
            '&:hover fieldset': {
              borderColor: colors.racing.logoBlue,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.racing.logoBlue,
              boxShadow: `0 0 8px ${colors.racing.logoBlue}30`,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.racing.silver,
            '&.Mui-focused': {
              color: colors.racing.logoBlue,
            },
          },
        }}
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
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.racing.lightGray,
            color: colors.racing.midnight,
            fontWeight: 500,
            '& fieldset': {
              borderColor: colors.racing.lightGridLine,
            },
            '&:hover fieldset': {
              borderColor: colors.racing.logoBlue,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.racing.logoBlue,
              boxShadow: `0 0 8px ${colors.racing.logoBlue}30`,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.racing.silver,
            '&.Mui-focused': {
              color: colors.racing.logoBlue,
            },
          },
        }}
      />

      <TextField
        fullWidth
        type="tel"
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.racing.lightGray,
            color: colors.racing.midnight,
            fontWeight: 500,
            '& fieldset': {
              borderColor: colors.racing.lightGridLine,
            },
            '&:hover fieldset': {
              borderColor: colors.racing.logoBlue,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.racing.logoBlue,
              boxShadow: `0 0 8px ${colors.racing.logoBlue}30`,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.racing.silver,
            '&.Mui-focused': {
              color: colors.racing.logoBlue,
            },
          },
        }}
      />

      <TextField
        fullWidth
        select
        label="Service Needed"
        name="service"
        value={formData.service}
        onChange={handleChange}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.racing.lightGray,
            color: colors.racing.midnight,
            fontWeight: 500,
            '& fieldset': {
              borderColor: colors.racing.lightGridLine,
            },
            '&:hover fieldset': {
              borderColor: colors.racing.logoBlue,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.racing.logoBlue,
              boxShadow: `0 0 8px ${colors.racing.logoBlue}30`,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.racing.silver,
            '&.Mui-focused': {
              color: colors.racing.logoBlue,
            },
          },
        }}
      >
        {services.map((option) => (
          <MenuItem 
            key={option.value} 
            value={option.value}
            sx={{
              backgroundColor: colors.racing.carbon,
              color: 'white',
              '&:hover': {
                backgroundColor: colors.racing.logoBlue + '20',
              },
              '&.Mui-selected': {
                backgroundColor: colors.racing.logoBlue + '40',
                '&:hover': {
                  backgroundColor: colors.racing.logoBlue + '60',
                },
              },
            }}
          >
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
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.racing.lightGray,
            color: colors.racing.midnight,
            fontWeight: 500,
            '& fieldset': {
              borderColor: colors.racing.lightGridLine,
            },
            '&:hover fieldset': {
              borderColor: colors.racing.logoBlue,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.racing.logoBlue,
              boxShadow: `0 0 8px ${colors.racing.logoBlue}30`,
            },
          },
          '& .MuiInputLabel-root': {
            color: colors.racing.silver,
            '&.Mui-focused': {
              color: colors.racing.logoBlue,
            },
          },
          '& .MuiOutlinedInput-input::placeholder': {
            color: colors.racing.silver,
            opacity: 0.7,
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          py: 1.5,
          backgroundColor: colors.racing.logoBlue,
          color: colors.racing.white,
          fontWeight: 700,
          fontSize: '1.1rem',
          boxShadow: `0 4px 15px ${colors.racing.logoBlue}40`,
          '&:hover': {
            backgroundColor: colors.racing.deepBlue,
            boxShadow: `0 6px 20px ${colors.racing.logoBlue}60`,
            transform: 'translateY(-2px)',
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}