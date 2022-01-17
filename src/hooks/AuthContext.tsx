import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
import * as AuthSession from 'expo-auth-session';


interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    user: User;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    };
    type: string;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const { setItem, removeItem } = useAsyncStorage('@User');

    async function signInWithGoogle() {
        try {
            const RESPONSE_TOKEN = 'token';
            const SCOPE = encodeURI('profile email');
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TOKEN}&scope=${SCOPE}`;
            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                console.log(' ESSE É O ACCESS_TOKEN', response)
                const userInfo = await response.json();
                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture,
                };
                setUser(userLogged);
                await setItem(JSON.stringify(userLogged))
            }

        } catch (error) {
            throw new Error(error as string);
        } 
    }

    async function signOut() {
        await removeItem();
        setUser({} as User);
    }


    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth }

