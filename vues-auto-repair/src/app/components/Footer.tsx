'use client';

import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
  Divider,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.grey[900],
        color: 'white',
        py: 6
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Company Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Vue's Auto Repair
            </Typography>
            <Typography variant="body2" color="grey.400">
              Your trusted partner for all automotive needs. Quality service, honest pricing, and customer satisfaction guaranteed.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <List sx={{ p: 0 }}>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <MuiLink
                  component={Link}
                  href="/"
                  color="grey.400"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  Home
                </MuiLink>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <MuiLink
                  component={Link}
                  href="/services"
                  color="grey.400"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  Services
                </MuiLink>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <MuiLink
                  component={Link}
                  href="/about"
                  color="grey.400"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  About Us
                </MuiLink>
              </ListItem>
              <ListItem sx={{ px: 0, py: 0.5 }}>
                <MuiLink
                  component={Link}
                  href="/contact"
                  color="grey.400"
                  sx={{
                    textDecoration: 'none',
                    '&:hover': { color: 'white' },
                  }}
                >
                  Contact
                </MuiLink>
              </ListItem>
            </List>
          </Box>

          {/* Services */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Popular Services
            </Typography>
            <List sx={{ p: 0 }}>
              {['Oil Changes', 'Brake Service', 'Engine Diagnostics', 'Tire Rotation', 'AC Service'].map((service) => (
                <ListItem key={service} sx={{ px: 0, py: 0.5 }}>
                  <Typography variant="body2" color="grey.400">
                    {service}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <svg 
                  width="20" 
                  height="20" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ marginRight: theme.spacing(1), color: theme.palette.grey[400] }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <Typography variant="body2" color="grey.400">
                  (555) 555-0123
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <svg 
                  width="20" 
                  height="20" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ marginRight: theme.spacing(1), color: theme.palette.grey[400] }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Typography variant="body2" color="grey.400">
                  info@vuesautorepair.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <svg 
                  width="20" 
                  height="20" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ marginRight: theme.spacing(1), color: theme.palette.grey[400] }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <Typography variant="body2" color="grey.400">
                  123 Main St, City, State 12345
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="grey.400">
                  <strong>Hours:</strong><br />
                  Mon-Fri: 8AM - 6PM<br />
                  Sat: 9AM - 4PM<br />
                  Sun: Closed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{ my: 4, borderColor: theme.palette.grey[800] }} />
        <Typography variant="body2" textAlign="center" color="grey.400">
          © {new Date().getFullYear()} Vue's Auto Repair. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}