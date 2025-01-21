import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme; // Optional
    setTheme: (theme: Theme) => void; // Required
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT, // Default theme (optional)
    setTheme: () => {}, // Provide a no-op function as a placeholder
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
