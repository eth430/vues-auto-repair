'use client';

import { useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Typography, Box, Container } from '@mui/material';
import Link from 'next/link';

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
        transition: 'transform 0.2s',
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
            backgroundColor: theme.palette.primary.light + '20', // 20% opacity
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

export default function MuiServicesSection() {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8, px: 2 }}>
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
            mb: 6,
          }}
        >
          <ServiceCard
            icon={
              <svg className="w-8 h-8" style={{ color: theme.palette.primary.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
            title="General Maintenance"
            description="Oil changes, filter replacements, fluid checks, and regular tune-ups to keep your vehicle running smoothly."
          />
          
          <ServiceCard
            icon={
              <svg className="w-8 h-8" style={{ color: theme.palette.primary.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
            title="Brake Service"
            description="Complete brake system inspection, pad replacement, rotor resurfacing, and brake fluid service."
          />
          
          <ServiceCard
            icon={
              <svg className="w-8 h-8" style={{ color: theme.palette.primary.main }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="Engine Diagnostics"
            description="State-of-the-art diagnostic equipment to identify and resolve engine problems quickly and accurately."
          />
        </Box>
        
        <Box textAlign="center">
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
  );
}