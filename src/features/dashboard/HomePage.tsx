import { Box, Card, Container, Flex, Grid, Heading, Section, Text } from '@radix-ui/themes';
import { PersonIcon, IdCardIcon, CalendarIcon, HomeIcon } from '@radix-ui/react-icons';
import { useAppSelector } from '../../app/hooks';
import Header from '../../layouts/Header';

export const HomePage = () => {
  const stats = useAppSelector((state) => state.dashboard);

  const cards = [
    { label: "Total Patients", value: stats.patients, color: "blue", icon: <PersonIcon width="24" height="24" /> },
    { label: "Total Doctors", value: stats.doctors, color: "green", icon: <IdCardIcon width="24" height="24" /> },
    { label: "Total Appointments", value: stats.appointments, color: "orange", icon: <CalendarIcon width="24" height="24" /> },
    { label: "Active Clinics", value: stats.clinics, color: "crimson", icon: <HomeIcon width="24" height="24" /> }
  ];

  return (
    <Box style={{ background: 'var(--gray-2)', minHeight: '100vh' }}>
      <Header /> 
      <Container size="4">
        <Section p={{ initial: "3", md: "4" }}>
          <Box mb="6">
            <Heading size={{ initial: "7", md: "8" }} weight="bold" mb="2">
              Dashboard Overview
            </Heading>
            <Text color="gray" size={{ initial: "2", md: "3" }}>
              Real-time analytics for your healthcare facility.
            </Text>
          </Box>

          <Grid columns={{ initial: "1", md: "2" }} gap="4" width="auto">
            {cards.map((card, index) => (
              <Card key={index} size="3" variant="surface">
                <Flex align="center" gap="4">
                  <Box 
                    style={{ 
                      backgroundColor: `var(--${card.color}-3)`, 
                      color: `var(--${card.color}-9)`,
                      padding: '12px',
                      borderRadius: '8px'
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Flex direction="column">
                    <Text size="3" weight="bold" color="gray" style={{ textTransform: 'uppercase' }}>
                      {card.label}
                    </Text>
                    <Text size={{ initial: "7", md: "9" }} weight="bold" color={card.color as "blue"}>
                      {card.value.toLocaleString()}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
};