# react-admin-image-uploader

Create step by step code: React app with two main modules:
•	Admin (basic http authentication with one user)  - uploading via form images to the server directory and create  images with sizes 150 px (width), 300, 600, 1024, 1920 and save in directories (img150, img300 etc.). Other form fields: Author, date, Country, city, address, views. Data are stored in mariadb database, must be included react database configuration
•	Main view:
o	Menu header with pages (Home, About, Terms, Download, Send picture, Partners, They wrote about us)
o	Home: show all uploaded images as a grid, every time user scroll, new images are appear. On click image new page is show with big image and thumbnails others
o	About: static html page
o	Terms: static html page
o	Download: static html page
o	Partners: static html page
o	They wrote about us: static html page
o	Send picture: static html page



## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/react-admin-image-uploader.git
cd react-admin-image-uploader
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
