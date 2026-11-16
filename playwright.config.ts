
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  timeout: 120000,

  expect: {
    timeout: 20000
  },

  retries: 1,

  workers: 1,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

//* use: {
   //baseURL: 'https://beta.jswmotors.com',
   //httpCredentials: {
   //username: 'jswbeta-user1',
   //password: 'User1@betajsw1'
  //*

 //*use: {
    //baseURL: 'https://www.jswmotors.com',
    //browserName: 'chromium',
    //headless: true,
    //screenshot: 'only-on-failure',
    //video: 'retain-on-failure',
    //trace: 'retain-on-failure',
    //actionTimeout: 40000,
    //navigationTimeout: 120000
 //},*//
   
 use: {
   baseURL: 'https://stage.jswmotors.com',
   httpCredentials: {
   username: 'jswdev-user1',
   password: 'User1@jswdev1'
   },
  
   headless: true,
   screenshot: 'only-on-failure',
   video: 'retain-on-failure',
   trace: 'retain-on-failure',

   actionTimeout: 40000,
   navigationTimeout: 120000
 },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome']
      }
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 7']
      }
    }
  ]
});