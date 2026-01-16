import { Flex, Button, DropdownMenu, Text, Heading, Box, Avatar } from '@radix-ui/themes';
import { ExitIcon, ChevronDownIcon} from '@radix-ui/react-icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { logout } from '../features/auth/authSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
     <Box 
      px={{ initial: "4", md: "6" }} 
      style={{ 
        height: '72px', 
        borderBottom: '1px solid var(--gray-5)', 
        background: 'var(--color-background)',
        position: 'sticky',
        top: 0,
        zIndex: 100 
      }}
    >
      <Flex justify="between" align="center" height="100%">
        <Heading size={{ initial: "3", md: "5" }} weight="bold" color="indigo">
          Healthcare Admin
        </Heading>

        <Flex gap="3" align="center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" color="indigo" size={{ initial: "2", md: "3" }} style={{ cursor: 'pointer' }}>
                <Avatar 
                  size="1" 
                  fallback="A" 
                  radius="full" 
                  color="indigo" 
                  variant="soft" 
                />
                <Text size={{ initial: "2", md: "3" }}>Admin</Text>
                <ChevronDownIcon />
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content variant="soft" color="indigo" sideOffset={8} align="end">
              <Box p="3" style={{ minWidth: '200px' }}>
                <Text size="1" color="gray" weight="bold" style={{ textTransform: 'uppercase' }}>
                  Logged in as
                </Text>
                <br />
                <Text size="2" weight="bold">
                  {user?.email || 'admin@healthcare.com'} 
                </Text>
              </Box>
              
              <DropdownMenu.Separator />
              
              <DropdownMenu.Item 
                color="red" 
                onClick={() => dispatch(logout())}
                style={{ cursor: 'pointer' }}
              >
                <Flex align="center" gap="2">
                  <ExitIcon />
                  <Text weight="bold">Logout</Text>
                </Flex>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;