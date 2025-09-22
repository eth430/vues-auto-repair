'use client';

import { useTheme } from '@mui/material/styles';
import { 
  Box, 
  Container, 
  Typography, 
  Card,
  Avatar
} from '@mui/material';

export default function About() {
  const theme = useTheme();
  
  return (
    <Box component="main" sx={{ minHeight: '100vh', py: 6, px: 2 }}>
      <Container maxWidth="md">
        <Typography variant="h1" textAlign="center" gutterBottom sx={{ mb: 4 }}>
          About Us
        </Typography>
        
        {/* Hero Image Placeholder */}
        <Box
          sx={{
            width: '100%',
            height: 256,
            backgroundColor: theme.palette.grey[200],
            borderRadius: 2,
            mb: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography color="text.secondary">Shop Image</Typography>
        </Box>

        {/* Our Story */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Founded in 2010, Vue&apos;s Auto Repair began with a simple mission: to provide honest, 
            reliable automotive service at fair prices. What started as a small garage with two 
            mechanics has grown into a full-service facility trusted by thousands of customers.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We believe in treating every customer like family and every vehicle as if it were our own. 
            This philosophy has earned Vue&apos;s Auto Repair a reputation as the go-to shop in our community.
          </Typography>
        </Box>

        {/* Values */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Our Values
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h3" gutterBottom>
                Integrity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We never recommend unnecessary repairs and always provide honest assessments 
                of your vehicle&apos;s needs.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" gutterBottom>
                Quality
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We use only the best parts and employ skilled technicians who take pride 
                in their work.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" gutterBottom>
                Transparency
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Every repair comes with a detailed explanation and upfront pricing, 
                so you know exactly what you&apos;re paying for.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" gutterBottom>
                Community
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We&apos;re proud to be part of this community and give back through local 
                sponsorships and charity work.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Team */}
        <Box component="section" sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Meet Our Team
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
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 128,
                  height: 128,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: theme.palette.grey[200],
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                }}
              >
                Photo
              </Avatar>
              <Typography variant="h6" gutterBottom>
                John Smith
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Owner & Master Technician
              </Typography>
              <Typography variant="caption" color="text.secondary">
                20+ years experience
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 128,
                  height: 128,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: theme.palette.grey[200],
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                }}
              >
                Photo
              </Avatar>
              <Typography variant="h6" gutterBottom>
                Mike Johnson
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Lead Mechanic
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ASE Certified
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 128,
                  height: 128,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: theme.palette.grey[200],
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                }}
              >
                Photo
              </Avatar>
              <Typography variant="h6" gutterBottom>
                Sarah Williams
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Service Manager
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Customer service expert
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Certifications */}
        <Card 
          sx={{ 
            backgroundColor: theme.palette.primary.light + '10',
            p: 4
          }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Certifications & Awards
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              textAlign: 'center',
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                🏆
              </Typography>
              <Typography variant="h6" gutterBottom>
                ASE Certified
              </Typography>
              <Typography variant="caption" color="text.secondary">
                National Institute for Automotive Service Excellence
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                ⭐
              </Typography>
              <Typography variant="h6" gutterBottom>
                Best Auto Shop 2023
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Local Business Awards
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                🛡️
              </Typography>
              <Typography variant="h6" gutterBottom>
                BBB A+ Rating
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Better Business Bureau
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}