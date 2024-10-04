import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    base: '/quiz/',
    resolve: {
        alias: {
            '@': '/src',
            '@styles': '/src/app/styles',
        },
    },
});
