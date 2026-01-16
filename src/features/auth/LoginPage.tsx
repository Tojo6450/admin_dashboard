import React, { useState } from 'react';
import { Box, Card, Flex, Heading, Text, TextField, Button } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginSuccess, loginFailure } from './authSlice';
import { useNavigate, Navigate } from 'react-router-dom';
import dummyData from '../../data/dummyData.json';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated, error } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === dummyData.auth.email && password === dummyData.auth.password) {
      dispatch(loginSuccess({ email }));
      navigate('/dashboard'); 
    } else {
      dispatch(loginFailure("Invalid email or password."));
    }
  };

  return (
    <Flex align="center" justify="center" style={{ height: '100vh', background: 'var(--gray-2)' }} p="4">
      {/* Increased Card size to "4" and maxWidth to 500px for a "bigger" look */}
      <Card size="4" style={{ width: '100%', maxWidth: '500px', padding: '1rem' }}>
        <form onSubmit={handleLogin}>
          {/* Increased gap to "6" for more vertical breathing room (longer form) */}
          <Flex direction="column" gap="6">
            <Box mb="2">
              <Heading size="8" align="center" weight="bold" color="indigo">
                Healthcare Admin
              </Heading>
              <Text size="2" color="gray" align="center" as="div" mt="2">
                Enter your credentials to access the provider portal
              </Text>
            </Box>
            
            <Box>
              <Text as="label" size="3" weight="bold" mb="2" >
                Email Address
              </Text>
              <TextField.Root 
                size="3" // Larger input box
                placeholder="admin@healthcare.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </Box>

            <Box>
              <Text as="label" size="3" weight="bold" mb="2" >
                Password
              </Text>
              <TextField.Root 
                size="3" // Larger input box
                type="password" 
                placeholder="••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </Box>

            {error && (
              <Text color="red" size="2" align="center" weight="bold">
                {error}
              </Text>
            )}

            {/* Size "3" button is larger and more clickable */}
            <Button size="3" variant="solid" type="submit" style={{ cursor: 'pointer' }}>
              Sign In to Dashboard
            </Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
};