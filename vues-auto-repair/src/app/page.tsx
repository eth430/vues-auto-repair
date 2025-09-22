'use client';

import Link from "next/link";
import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent 
} from '@mui/material';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            backgroundColor: theme.palette.primary.light + '20',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const theme = useTheme();
  
  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          background: `linear-gradient(to bottom, ${theme.palette.primary.light}10, ${theme.palette.background.default})`,
          py: 10,
          px: 2,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h1" gutterBottom>
            Expert Auto Repair You Can Trust
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              mb: 4, 
              maxWidth: '600px', 
              mx: 'auto' 
            }}
          >
            Professional automotive services with honest pricing and exceptional customer care. 
            Your satisfaction is our top priority.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Schedule Service
            </Button>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              color="primary"
              size="large"
            >
              View Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Preview */}
      <Box component="section" sx={{ py: 8, px: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Our Services
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
            }}
          >
            <ServiceCard
              icon={
                <svg 
                  width="32" 
                  height="32" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: theme.palette.primary.main }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              }
              title="General Maintenance"
              description="Oil changes, filter replacements, fluid checks, and regular tune-ups to keep your vehicle running smoothly."
            />

            <ServiceCard
              icon={
                <svg 
                  width="32" 
                  height="32" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: theme.palette.primary.main }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              }
              title="Brake Service"
              description="Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service."
            />

            <ServiceCard
              icon={
                <svg 
                  width="32" 
                  height="32" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: theme.palette.primary.main }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Engine Diagnostics"
              description="State-of-the-art diagnostic equipment to identify and resolve engine problems quickly and accurately."
            />
          </Box>
          <Box textAlign="center" sx={{ mt: 6 }}>
            <Button
              component={Link}
              href="/services"
              variant="text"
              color="primary"
              sx={{ 
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.dark',
                }
              }}
            >
              View All Services →
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        component="section" 
        sx={{ 
          backgroundColor: theme.palette.grey[100],
          py: 8, 
          px: 2 
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Contact us today for a free estimate or to schedule your service appointment.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              color="primary"
              size="large"
            >
              Contact Us
            </Button>
            <Button
              component="a"
              href="tel:555-0123"
              variant="outlined"
              color="primary"
              size="large"
            >
              Call: (555) 555-0123
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}