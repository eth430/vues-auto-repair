'use client';

import Link from "next/link";
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent 
} from '@mui/material';
import { colors } from '@/theme';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card 
      sx={{ 
        height: '100%',
        backgroundColor: colors.racing.carbon,
        border: `1px solid ${colors.racing.gridLine}`,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: colors.racing.logoBlue,
          boxShadow: `0 10px 30px ${colors.racing.logoBlue}30`,
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            background: `linear-gradient(135deg, ${colors.racing.accentBlue}30, ${colors.racing.logoBlue}20)`,
            border: `2px solid ${colors.racing.accentBlue}50`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          {icon}
        </Box>
        <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.racing.chrome }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  
  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          background: `linear-gradient(135deg, ${colors.racing.white} 0%, ${colors.racing.pearl} 100%)`,
          py: 10,
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, ${colors.racing.logoBlue}05 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${colors.racing.accentBlue}03 0%, transparent 50%)
            `,
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(90deg, ${colors.racing.lightGridLine} 1px, transparent 1px),
              linear-gradient(${colors.racing.lightGridLine} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.3,
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h1" 
            gutterBottom
            sx={{
              color: colors.racing.logoBlue,
              fontWeight: 900,
              textShadow: `0 0 20px ${colors.racing.logoBlue}20`,
            }}
          >
            Expert Auto Repair You Can Trust
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              maxWidth: '600px', 
              mx: 'auto',
              color: colors.racing.silver,
              fontWeight: 500,
              fontSize: '1.3rem',
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
              size="large"
              sx={{
                backgroundColor: colors.racing.logoBlue,
                color: colors.racing.white,
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                boxShadow: `0 4px 15px ${colors.racing.logoBlue}40`,
                '&:hover': {
                  backgroundColor: colors.racing.deepBlue,
                  color: colors.racing.white,
                  boxShadow: `0 6px 20px ${colors.racing.logoBlue}60`,
                  transform: 'translateY(-3px)',
                }
              }}
            >
              Schedule Service
            </Button>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              size="large"
              sx={{
                borderColor: colors.racing.accentBlue,
                color: colors.racing.accentBlue,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textShadow: `0 0 10px ${colors.racing.accentBlue}60`,
                '&:hover': {
                  backgroundColor: colors.racing.accentBlue + '20',
                  borderColor: colors.racing.logoBlue,
                  color: colors.racing.logoBlue,
                  boxShadow: `0 0 20px ${colors.racing.accentBlue}50`,
                  transform: 'translateY(-2px)',
                }
              }}
            >
              View Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Preview */}
      <Box 
        component="section" 
        sx={{ 
          py: 8, 
          px: 2,
          background: `linear-gradient(135deg, ${colors.racing.asphalt} 0%, ${colors.racing.midnight} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(90deg, ${colors.racing.gridLine} 1px, transparent 1px),
              linear-gradient(${colors.racing.gridLine} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.1,
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            textAlign="center" 
            gutterBottom 
            sx={{ 
              mb: 6, 
              color: 'white',
              textShadow: `0 0 20px ${colors.racing.logoBlue}50`,
            }}
          >
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
                  style={{ color: colors.racing.logoBlue }}
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
                  style={{ color: colors.racing.logoBlue }}
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
                  style={{ color: colors.racing.logoBlue }}
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
              variant="outlined"
              sx={{ 
                fontWeight: 600,
                color: colors.racing.logoBlue,
                borderColor: colors.racing.logoBlue,
                textShadow: `0 0 10px ${colors.racing.logoBlue}80`,
                '&:hover': {
                  backgroundColor: colors.racing.logoBlue + '20',
                  borderColor: colors.racing.accentBlue,
                  color: colors.racing.accentBlue,
                  boxShadow: `0 0 20px ${colors.racing.logoBlue}60`,
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
          background: `linear-gradient(135deg, ${colors.racing.white} 0%, ${colors.racing.lightGray} 100%)`,
          py: 8, 
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          borderTop: `3px solid ${colors.racing.logoBlue}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-50%',
            width: '200%',
            height: '100%',
            background: `linear-gradient(45deg, transparent 49%, ${colors.racing.logoBlue}05 49.5%, ${colors.racing.logoBlue}05 50.5%, transparent 51%)`,
            animation: 'scan 4s linear infinite',
          },
          '@keyframes scan': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' }
          }
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              color: colors.racing.logoBlue,
              fontWeight: 700,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              color: colors.racing.silver,
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
          >
            Contact us today for a free estimate or to schedule your service appointment.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.racing.logoBlue,
                color: colors.racing.white,
                fontWeight: 700,
                px: 4,
                py: 1.5,
                boxShadow: `0 4px 15px ${colors.racing.logoBlue}40`,
                '&:hover': {
                  backgroundColor: colors.racing.deepBlue,
                  boxShadow: `0 6px 20px ${colors.racing.logoBlue}60`,
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Contact Us
            </Button>
            <Button
              component="a"
              href="tel:555-0123"
              variant="outlined"
              size="large"
              sx={{
                borderColor: colors.racing.logoBlue,
                color: colors.racing.logoBlue,
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: colors.racing.logoBlue,
                  color: colors.racing.white,
                  borderColor: colors.racing.logoBlue,
                  transform: 'translateY(-2px)',
                }
              }}
            >
              Call: (555) 555-0123
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}