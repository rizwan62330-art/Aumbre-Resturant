import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
// Demonstration only: accounts and sessions exist in memory and disappear on refresh.
// Replace this service with your backend before enabling real customer accounts.
const accounts = new Map();
async function digest(password, salt) {
  const bytes = new TextEncoder().encode(salt + password);
  const result = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(result), (x) =>
    x.toString(16).padStart(2, "0"),
  ).join("");
}
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  async function signup({ name, email, password }) {
    email = email.trim().toLowerCase();
    if (accounts.has(email))
      throw new Error(
        "An account with this email already exists. Please log in.",
      );
    const salt = crypto.randomUUID();
    const profile = {
      name: name.trim(),
      email,
    };
    accounts.set(email, {
      ...profile,
      salt,
      hash: await digest(password, salt),
    });
    setUser(profile);
  }
  async function login({ email, password }) {
    const account = accounts.get(email.trim().toLowerCase());
    if (!account || (await digest(password, account.salt)) !== account.hash) {
      throw new Error("Email or password is incorrect. Please try again.");
    }
    setUser({
      name: account.name,
      email: account.email,
    });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
