// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TerraBloom/', // <-- repo name
  plugins: [react()],
});