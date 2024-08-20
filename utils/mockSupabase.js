export const mockSupabase = {
  auth: {
    signInWithPassword: async ({ email, password }) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'test@example.com' && password === 'password123') {
        return { data: { user: { id: '1', email } }, error: null };
      }
      return { data: null, error: { message: 'Invalid login credentials' } };
    },
    signUp: async ({ email, password }) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'existing@example.com') {
        return { data: null, error: { message: 'Email already in use' } };
      }
      
      if (email.includes('@') && password.length >= 8) {
        return { data: { user: { id: '2', email } }, error: null };
      }
      return { data: null, error: { message: 'Invalid email or password' } };
    }
  }
};