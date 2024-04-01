/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public'
  })
  
  module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        scope: '/',
        sw: 'service-worker.js',
        disable: process.env.NODE_ENV === 'development'
      }
  })
