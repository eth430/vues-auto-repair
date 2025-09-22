"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import { colors } from '@/theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          background: `linear-gradient(135deg, ${colors.racing.modernGray} 0%, ${colors.racing.gunmetal} 100%)`,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${colors.racing.gridLine}`,
          boxShadow: `0 4px 20px rgba(0, 212, 255, 0.1)`,
          borderRadius: 0,
          '& .MuiPaper-root': {
            borderRadius: 0,
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: 64 }}>
            {/* Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 4 },
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  filter: 'brightness(1.1)',
                }
              }}
            >
              <img
                src="/logo-no-background.png"
                alt="Vue's Auto Repair"
                style={{
                  height: '40px',
                  width: 'auto',
                  maxWidth: '200px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 1,
              ml: 'auto'
            }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: colors.racing.chrome,
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    position: 'relative',
                    '&:hover': {
                      color: colors.racing.logoBlue,
                      backgroundColor: 'transparent',
                      textShadow: `0 0 10px ${colors.racing.logoBlue}60`,
                      transform: 'translateY(-1px)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(45deg, transparent 30%, ${colors.racing.logoBlue}20 50%, transparent 70%)`,
                        opacity: 0,
                        animation: 'speed-lines 0.6s ease-out',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '2px',
                        background: colors.racing.logoBlue,
                        boxShadow: `0 0 8px ${colors.racing.logoBlue}`,
                        animation: 'glow-pulse 1.5s ease-in-out infinite alternate',
                      }
                    },
                    '@keyframes speed-lines': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateX(-100%)',
                      },
                      '50%': {
                        opacity: 1,
                      },
                      '100%': {
                        opacity: 0,
                        transform: 'translateX(100%)',
                      },
                    },
                    '@keyframes glow-pulse': {
                      '0%': {
                        boxShadow: `0 0 8px ${colors.racing.logoBlue}`,
                      },
                      '100%': {
                        boxShadow: `0 0 15px ${colors.racing.logoBlue}, 0 0 25px ${colors.racing.logoBlue}40`,
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Mobile menu button */}
            <IconButton
              sx={{ 
                display: { xs: 'block', md: 'none' },
                color: 'white',
                position: 'relative',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.1) rotate(5deg)',
                  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background: `linear-gradient(45deg, ${colors.racing.logoBlue}40, transparent)`,
                    borderRadius: '50%',
                    animation: 'spin-glow 0.8s ease-out',
                  }
                },
                '@keyframes spin-glow': {
                  '0%': {
                    transform: 'rotate(0deg) scale(0.8)',
                    opacity: 0,
                  },
                  '50%': {
                    opacity: 1,
                  },
                  '100%': {
                    transform: 'rotate(360deg) scale(1.2)',
                    opacity: 0,
                  },
                },
              }}
              onClick={toggleDrawer}
              edge="end"
            >
              {isOpen ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            background: `linear-gradient(135deg, ${colors.racing.gunmetal} 0%, ${colors.racing.modernGray} 100%)`,
            borderLeft: `1px solid ${colors.racing.gridLine}`,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/logo-no-background.png"
              alt="Vue's Auto Repair"
              style={{
                height: '32px',
                width: 'auto',
                maxWidth: '180px',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={toggleDrawer}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    border: `1px solid ${colors.racing.gridLine}`,
                    '&:hover': {
                      backgroundColor: colors.racing.logoBlue + '20',
                      borderColor: colors.racing.logoBlue,
                      boxShadow: `0 0 15px ${colors.racing.logoBlue}40`,
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    slotProps={{
                      primary: {
                        style: {
                          fontWeight: 500,
                          color: colors.racing.chrome,
                        }
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}