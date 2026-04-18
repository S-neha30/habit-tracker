"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [habits, setHabits] = useState([]);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    if (storedUser) setUser(storedUser);
    setHabits(storedHabits);
    setAuthReady(true);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const login = (email) => {
    const userData = { email };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addHabit = (title) => {
    const newHabit = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  
  const editHabit = (id, newTitle) => {
    const cleanedTitle = newTitle.trim();
    if (!cleanedTitle) return;

    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, title: cleanedTitle } : h
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        authReady,
        login,
        logout,
        habits,
        addHabit,
        toggleHabit,
        deleteHabit,
        editHabit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);