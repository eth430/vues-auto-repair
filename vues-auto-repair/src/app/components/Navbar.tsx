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
                      }
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
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'scale(1.1)',
                }
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