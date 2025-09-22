'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card,
  Alert
} from '@mui/material';
import ContactForm from "../components/ContactForm";
import { colors } from '@/theme';

export default function Contact() {
  return (
    <Box 
      component="main" 
      sx={{ 
        minHeight: '100vh', 
        py: 6, 
        px: 2,
      }}
    >
      {/* Hero Section */}
      <Box sx={{ background: colors.racing.white, py: 6 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            textAlign="center" 
            gutterBottom
            sx={{
              color: colors.racing.logoBlue,
              fontWeight: 900,
              mb: 3,
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center"
            sx={{ 
              mb: 6, 
              maxWidth: '750px', 
              mx: 'auto',
              color: colors.racing.silver,
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
          >
            Get in touch for service appointments, estimates, or any questions about your vehicle. 
            We&apos;re here to help!
          </Typography>
        </Container>
      </Box>
      
      {/* Contact Content */}
      <Box sx={{ background: colors.racing.lightGray, py: 8 }}>
        <Container maxWidth="lg">

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                lg: 'repeat(2, 1fr)',
              },
              gap: 6,
            }}
          >
            {/* Contact Form */}
            <Card 
              sx={{ 
                p: 4,
                backgroundColor: colors.racing.white,
                border: `2px solid ${colors.racing.logoBlue}`,
                boxShadow: `0 8px 25px ${colors.racing.logoBlue}15`,
                borderRadius: 2,
              }}
            >
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{
                  color: colors.racing.logoBlue,
                  fontWeight: 700,
                }}
              >
                Send Us a Message
              </Typography>
              <ContactForm />
            </Card>

            {/* Contact Information */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Map Placeholder */}
              <Box
                sx={{
                  background: colors.racing.white,
                  border: `2px solid ${colors.racing.logoBlue}`,
                  height: 256,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 15px ${colors.racing.logoBlue}15`,
                }}
              >
                <Typography 
                  sx={{ 
                    color: colors.racing.logoBlue,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Map will go here
                </Typography>
              </Box>

              {/* Contact Details */}
              <Card 
                sx={{ 
                  background: `linear-gradient(135deg, ${colors.racing.midnight} 0%, ${colors.racing.asphalt} 100%)`,
                  border: `2px solid ${colors.racing.logoBlue}`,
                  p: 3,
                  borderRadius: 2,
                }}
              >
                <Typography 
                  variant="h2" 
                  gutterBottom
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                  }}
                >
                  Get In Touch
                </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ 
                      color: colors.racing.logoBlue, 
                      marginRight: '12px',
                      marginTop: '4px',
                      flexShrink: 0
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ color: 'white' }}
                    >
                      Address
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: colors.racing.chrome }}
                    >
                      123 Main Street<br />City, State 12345
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ 
                      color: colors.racing.logoBlue, 
                      marginRight: '12px',
                      marginTop: '4px',
                      flexShrink: 0
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ color: 'white' }}
                    >
                      Phone
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: colors.racing.chrome }}
                    >
                      (555) 555-0123
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ 
                      color: colors.racing.logoBlue, 
                      marginRight: '12px',
                      marginTop: '4px',
                      flexShrink: 0
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ color: 'white' }}
                    >
                      Email
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ color: colors.racing.chrome }}
                    >
                      info@vuesautorepair.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <svg 
                    width="24" 
                    height="24" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ 
                      color: colors.racing.logoBlue, 
                      marginRight: '12px',
                      marginTop: '4px',
                      flexShrink: 0
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <Box>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ color: 'white' }}
                    >
                      Business Hours
                    </Typography>
                    <Box sx={{ color: colors.racing.chrome }}>
                      <Typography variant="body2">Monday - Friday: 8:00 AM - 6:00 PM</Typography>
                      <Typography variant="body2">Saturday: 9:00 AM - 4:00 PM</Typography>
                      <Typography variant="body2">Sunday: Closed</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>

              {/* Emergency Service */}
              <Alert 
                severity="error"
                sx={{ 
                  p: 3,
                  backgroundColor: colors.racing.white,
                  border: `2px solid #dc2626`,
                  borderRadius: 2,
                  boxShadow: `0 4px 15px rgba(220, 38, 38, 0.2)`,
                  '& .MuiAlert-message': {
                    width: '100%'
                  },
                  '& .MuiAlert-icon': {
                    color: '#dc2626'
                  },
                }}
              >
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ color: '#dc2626' }}
                >
                  Emergency Service Available
                </Typography>
                <Typography 
                  variant="body2" 
                  paragraph
                  sx={{ color: colors.racing.silver, fontWeight: 500 }}
                >
                  For after-hours emergencies, call our 24/7 hotline:
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#dc2626',
                  }}
                >
                  (555) 555-9999
                </Typography>
              </Alert>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}