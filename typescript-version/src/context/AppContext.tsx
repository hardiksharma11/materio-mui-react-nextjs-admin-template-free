import { createContext, useContext, ReactNode, useState, useEffect } from 'react';


interface SharedState {
    loggedInUser: User | null;
    setLoggedInUser: (user: User | null) => void;
    name: string;
}

interface User {
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    token: string;
    username: string;
}

const name = 'hardik';

const AppContext = createContext<SharedState>({} as SharedState);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

    useEffect(() => {
        const userInfoString = localStorage.getItem('user_info')
        if (userInfoString) {
            const userInfo: User = JSON.parse(userInfoString)
            setLoggedInUser(userInfo)
        }

    },[]);

const sharedState: SharedState = {
    loggedInUser,
    setLoggedInUser,
    name
};

return (
    <AppContext.Provider value={sharedState}>
        {children}
    </AppContext.Provider>
);
}

export function useAppContext(): SharedState {
    return useContext(AppContext);
}
