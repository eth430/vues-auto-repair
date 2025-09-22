'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card,
  Avatar
} from '@mui/material';
import { colors } from '@/theme';

export default function About() {
  return (
    <Box 
      component="main" 
      sx={{ 
        minHeight: '100vh', 
        py: 6, 
        px: 2 
      }}
    >
      {/* Hero Section */}
      <Box sx={{ background: colors.racing.white, py: 4 }}>
        <Container maxWidth="md">
          <Typography 
            variant="h1" 
            textAlign="center" 
            gutterBottom 
            sx={{ 
              mb: 4,
              color: colors.racing.logoBlue,
              fontWeight: 900,
            }}
          >
            About Us
          </Typography>
        </Container>
      </Box>
      
      {/* Main Content */}
      <Container maxWidth="md">
        
        {/* Hero Image Placeholder */}
        <Box sx={{ background: colors.racing.lightGray, py: 6, my: 6, borderRadius: 2 }}>
          <Box
            sx={{
              width: '100%',
              height: 256,
              background: `linear-gradient(135deg, ${colors.racing.white} 0%, ${colors.racing.pearl} 100%)`,
              border: `2px solid ${colors.racing.logoBlue}`,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              mx: 'auto',
            }}
          >
            <Typography 
              sx={{ 
                color: colors.racing.logoBlue,
                fontSize: '1.2rem',
                fontWeight: 600,
              }}
            >
              Shop Image
            </Typography>
          </Box>
        </Box>

        {/* Our Story */}
        <Box component="section" sx={{ mb: 6, background: colors.racing.white, p: 4, borderRadius: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              color: colors.racing.logoBlue,
              fontWeight: 700,
            }}
          >
            Our Story
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              color: colors.racing.silver,
              fontWeight: 500,
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Founded in 2010, Vue&apos;s Auto Repair began with a simple mission: to provide honest, 
            reliable automotive service at fair prices. What started as a small garage with two 
            mechanics has grown into a full-service facility trusted by thousands of customers.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              color: colors.racing.silver,
              fontWeight: 500,
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            We believe in treating every customer like family and every vehicle as if it were our own. 
            This philosophy has earned Vue&apos;s Auto Repair a reputation as the go-to shop in our community.
          </Typography>
        </Box>

        {/* Values */}
        <Box component="section" sx={{ mb: 6, background: `linear-gradient(135deg, ${colors.racing.midnight} 0%, ${colors.racing.asphalt} 100%)`, p: 4, borderRadius: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
            }}
          >
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
            <Card 
              sx={{
                backgroundColor: colors.racing.carbon,
                border: `1px solid ${colors.racing.gridLine}`,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.racing.logoBlue,
                  boxShadow: `0 5px 20px ${colors.racing.logoBlue}30`,
                }
              }}
            >
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Integrity
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.chrome }}
              >
                We never recommend unnecessary repairs and always provide honest assessments 
                of your vehicle&apos;s needs.
              </Typography>
            </Card>
            <Card 
              sx={{
                backgroundColor: colors.racing.carbon,
                border: `1px solid ${colors.racing.gridLine}`,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.racing.logoBlue,
                  boxShadow: `0 5px 20px ${colors.racing.logoBlue}30`,
                }
              }}
            >
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Quality
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.chrome }}
              >
                We use only the best parts and employ skilled technicians who take pride 
                in their work.
              </Typography>
            </Card>
            <Card 
              sx={{
                backgroundColor: colors.racing.carbon,
                border: `1px solid ${colors.racing.gridLine}`,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.racing.logoBlue,
                  boxShadow: `0 5px 20px ${colors.racing.logoBlue}30`,
                }
              }}
            >
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Transparency
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.chrome }}
              >
                Every repair comes with a detailed explanation and upfront pricing, 
                so you know exactly what you&apos;re paying for.
              </Typography>
            </Card>
            <Card 
              sx={{
                backgroundColor: colors.racing.carbon,
                border: `1px solid ${colors.racing.gridLine}`,
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: colors.racing.logoBlue,
                  boxShadow: `0 5px 20px ${colors.racing.logoBlue}30`,
                }
              }}
            >
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Community
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.chrome }}
              >
                We&apos;re proud to be part of this community and give back through local 
                sponsorships and charity work.
              </Typography>
            </Card>
          </Box>
        </Box>

        {/* Team */}
        <Box component="section" sx={{ mb: 6, background: colors.racing.white, p: 4, borderRadius: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              color: colors.racing.logoBlue,
              fontWeight: 700,
              textAlign: 'center',
              mb: 4,
            }}
          >
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
                  backgroundColor: colors.racing.carbon,
                  border: `2px solid ${colors.racing.logoBlue}`,
                  color: colors.racing.logoBlue,
                  fontSize: '0.875rem',
                  boxShadow: `0 0 20px ${colors.racing.logoBlue}40`,
                }}
              >
                Photo
              </Avatar>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.asphalt }}
              >
                John Smith
              </Typography>
              <Typography 
                variant="body2" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Owner & Master Technician
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.silver }}
              >
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
                  backgroundColor: colors.racing.carbon,
                  border: `2px solid ${colors.racing.logoBlue}`,
                  color: colors.racing.logoBlue,
                  fontSize: '0.875rem',
                  boxShadow: `0 0 20px ${colors.racing.logoBlue}40`,
                }}
              >
                Photo
              </Avatar>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.asphalt }}
              >
                Mike Johnson
              </Typography>
              <Typography 
                variant="body2" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Lead Mechanic
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.silver }}
              >
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
                  backgroundColor: colors.racing.carbon,
                  border: `2px solid ${colors.racing.logoBlue}`,
                  color: colors.racing.logoBlue,
                  fontSize: '0.875rem',
                  boxShadow: `0 0 20px ${colors.racing.logoBlue}40`,
                }}
              >
                Photo
              </Avatar>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.asphalt }}
              >
                Sarah Williams
              </Typography>
              <Typography 
                variant="body2" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Service Manager
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.silver }}
              >
                Customer service expert
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Certifications */}
        <Card 
          sx={{ 
            background: `linear-gradient(135deg, ${colors.racing.carbon} 0%, ${colors.racing.asphalt} 100%)`,
            border: `2px solid ${colors.racing.logoBlue}`,
            boxShadow: `0 10px 30px ${colors.racing.logoBlue}30`,
            p: 4
          }}
        >
          <Typography 
            variant="h2" 
            textAlign="center" 
            gutterBottom
            sx={{
              color: 'white',
              textShadow: `0 0 25px ${colors.racing.logoBlue}70`,
            }}
          >
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
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                ASE Certified
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.chrome }}
              >
                National Institute for Automotive Service Excellence
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                ⭐
              </Typography>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Best Auto Shop 2023
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.chrome }}
              >
                Local Business Awards
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ mb: 1 }}>
                🛡️
              </Typography>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                BBB A+ Rating
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ color: colors.racing.chrome }}
              >
                Better Business Bureau
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}