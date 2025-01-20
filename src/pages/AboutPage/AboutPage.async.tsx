import { lazy } from "react";

// Correct the lazy loading with a promise that resolves the component import
export const AboutPageAsync = lazy(() =>
    new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('./AboutPage')), 1500); // Simulate delay of 1500ms
    })
);
