# Karagene

## About project

This is a fully customized E-Commerce web application for a medical and laboratory equipment import/export company called Karagene Tashkhis.

### Features

- A fully customized admin panel to create, delete and update content of the website.
- Enhanced security and authentication for the admin panel.
- A combination of SSR and SSG is used to implement the pages of the website.
- A fully customized postgressql database system with role based authentication to edit the content of the website.
- Advanced analytics and data visualization of the admin panel.

### Stack

- React
- Next.JS
- TailwindCSS
- Supabase
- GSAP

## How it works?

This project is implemented using next.js, It means that most of the content and pages of the website is server side rendered, and the data is cached for fast loading and performance on the client side.

### Content and Pages

The website is connected to a supabase database that has the content of the website stored in it, such as products, content of the pages, and any other information you see on the website.

- In build time, The next.js server will fetch the data from supabase database using rest API request, and will build the pages and cache some of the data
- Some data will never change, or hardly change, so the pages or components that use that data, is Server side generated, like the about us page.

### Authentication

The authentication process:

- User or admins enter their credentials, React engine on the client side will signal the server and will run a server action.
- The server action will connect to supabase authentication manager, and will return a response, Success or Failure.

## How to use it?

You have to have a database in the format that is provided in the **/public/mock** folder.
After cloning the project, run it in dev mode.
The site url in env has to be set to your local address, so that next.js can fetch the mock data.
After you made your own database, you can change the site url to your database rest endpoint.

Good luck
