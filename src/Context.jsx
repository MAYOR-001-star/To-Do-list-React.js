import React, { createContext, useState, useContext } from'react';

const AppContext = createContext();

const Context = ({ children }) => {
    const [currentView, setCurrentView] = useState('addTask');

    const showTodo = () => setCurrentView('todo');
    const showCompleted = () => setCurrentView('completed');
    const showAddTask = () => setCurrentView('addTask');

    return (
        <AppContext.Provider value={{
            currentView, 
            showTodo, 
            showCompleted, 
            showAddTask 
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);

export { Context };
