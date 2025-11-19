/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), flowbiteReact(), tailwindcss()],
  // server: {
  //   port: 3000,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: process.env.VITE_API_URL,
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //     '/auth': {
  //       target: process.env.VITE_API_URL,
  //       changeOrigin: true,
  //       secure: false
  //     },
  //     '/signup-api': {
  //       target: process.env.VITE_API_URL,
  //       changeOrigin: true,
  //       secure: false
  //     },
  //   },
  // }
})