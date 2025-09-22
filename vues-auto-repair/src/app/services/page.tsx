'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent 
} from '@mui/material';
import { colors } from '@/theme';

interface ServiceItemProps {
  title: string;
  description: string;
  price?: string;
  icon?: React.ReactNode;
}

function ServiceItem({ title, description, price, icon }: ServiceItemProps) {
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
          boxShadow: `0 15px 35px ${colors.racing.logoBlue}30`,
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {icon && (
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
              color: colors.racing.logoBlue,
            }}
          >
            {icon}
          </Box>
        )}
        <Typography 
          variant="h3" 
          gutterBottom
          sx={{ color: 'white' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2, 
            color: colors.racing.chrome,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        {price && (
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              color: colors.racing.logoBlue,
              textShadow: `0 0 10px ${colors.racing.logoBlue}60`,
            }}
          >
            Starting at {price}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

const services = [
  {
    title: "Oil Change & Filter",
    description: "Regular oil changes keep your engine running smoothly and extend its life. We use high-quality oils and filters.",
    price: "$39.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Brake Service",
    description: "From brake pad replacement to complete brake system overhauls. Your safety is our priority.",
    price: "$149.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Engine Diagnostics",
    description: "Modern computer diagnostics to identify and fix engine issues quickly and accurately.",
    price: "$89.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Tire Services",
    description: "Tire rotation, balancing, alignment, and replacement. We carry all major tire brands.",
    price: "$24.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "AC Service",
    description: "Keep cool with our comprehensive AC inspection, repair, and recharge services.",
    price: "$79.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Transmission Service",
    description: "Transmission fluid changes, repairs, and rebuilds to keep your vehicle shifting smoothly.",
    price: "$299.99",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function Services() {
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
            Our Services
          </Typography>
          <Typography 
            variant="body1" 
            textAlign="center"
            sx={{ 
              mb: 6, 
              maxWidth: '750px', 
              mx: 'auto',
              color: colors.racing.asphalt,
              fontSize: '1.1rem',
            }}
          >
            We offer a comprehensive range of automotive services to keep your vehicle running at its best. 
            All work is backed by our satisfaction guarantee.
          </Typography>
        </Container>
      </Box>
      
      {/* Services Grid */}
      <Box sx={{ background: `linear-gradient(135deg, ${colors.racing.midnight} 0%, ${colors.racing.asphalt} 100%)`, py: 8 }}>
        <Container maxWidth="lg">

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: 4,
              mb: 8,
            }}
          >
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Why Choose Us Section */}
      <Box sx={{ background: colors.racing.lightGray, py: 8 }}>
        <Container maxWidth="lg">

          <Card 
            sx={{ 
              background: colors.racing.white,
              border: `3px solid ${colors.racing.logoBlue}`,
              borderRadius: 3,
              p: 4,
              boxShadow: `0 10px 30px ${colors.racing.logoBlue}20`,
            }}
          >
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
              Why Choose Us?
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
            <Box sx={{ p: 2 }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Certified Technicians
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.silver, fontWeight: 500 }}
              >
                Our ASE-certified mechanics have years of experience and ongoing training 
                to handle all makes and models.
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Quality Parts
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.silver, fontWeight: 500 }}
              >
                We use only OEM or high-quality aftermarket parts that meet or exceed 
                manufacturer specifications.
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Warranty Protection
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.silver, fontWeight: 500 }}
              >
                All our work comes with a comprehensive warranty for your peace of mind 
                and protection.
              </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ color: colors.racing.logoBlue }}
              >
                Transparent Pricing
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ color: colors.racing.silver, fontWeight: 500 }}
              >
                No hidden fees or surprises. We provide detailed estimates and explain 
                all work before we begin.
              </Typography>
            </Box>
          </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}