// Definition for the User object after login
export interface User {
  email: string;
}

// Definition for the Dashboard statistics
export interface DashboardStats {
  patients: number;
  doctors: number;
  appointments: number;
  clinics: number;
}

// Global State shape for Redux
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}