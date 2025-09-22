"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

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
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: theme.shadows[4]
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: 64 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                flexGrow: { xs: 1, md: 0 },
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'primary.main',
                textDecoration: 'none',
                mr: { md: 4 },
              }}
            >
              Vue&apos;s Auto Repair
            </Typography>

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
                    color: 'text.primary',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
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
                color: 'text.primary'
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
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
            Vue&apos;s Auto Repair
          </Typography>
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={toggleDrawer}
                  sx={{
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'primary.light' + '20',
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{
                      fontWeight: 500,
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