'use client';

import { useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';

export default function ThemedComponent() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        MUI Theme Example
      </Typography>
      
      <Card sx={{ mb: 3, maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Using useTheme Hook
          </Typography>
          <Typography variant="body1" paragraph>
            Current primary color: {theme.palette.primary.main}
          </Typography>
          <Typography variant="body2" paragraph>
            Current spacing unit: {theme.spacing(1)}px
          </Typography>
          <Typography variant="body2" paragraph>
            Border radius: {theme.shape.borderRadius}px
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </Box>

      {/* Example of mixing MUI theme with inline styles */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: theme.shape.borderRadius,
          p: theme.spacing(2),
          mb: 3,
        }}
      >
        <Typography variant="body1">
          This box uses theme values directly in sx prop
        </Typography>
      </Box>

      {/* Example of using theme with custom styles */}
      <div
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          marginBottom: theme.spacing(2),
        }}
      >
        <Typography variant="h3">
          Custom styled div using theme
        </Typography>
        <Typography variant="body1">
          This demonstrates using theme values in regular style objects
        </Typography>
      </div>

      {/* Responsive breakpoints example */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          [theme.breakpoints.up('md')]: {
            p: 4,
            backgroundColor: 'primary.light',
          },
        }}
      >
        <Typography variant="body1">
          This box changes style based on screen size using theme breakpoints
        </Typography>
      </Box>
    </Box>
  );
}