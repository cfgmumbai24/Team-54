import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (name, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/donor/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });
      // console.log('Response Status',response.status)

      const json = await response.json();
      // console.log('Response JSON:',json)

      if (!response.ok) {
        throw new Error(json.error || "Login failed");
      }

      localStorage.setItem("donor", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    } catch (error) {
      // console.error('Error during login: ', error)
      setError(error.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
