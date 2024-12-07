// Contexto de usuario
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const loginUser = (userData) => {
    setUser(userData); // Establece los datos del usuario al iniciar sesión
  };

  const logoutUser = () => {
    setUser(null); // Limpia el estado del usuario al cerrar sesión
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
