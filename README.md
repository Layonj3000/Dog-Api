<h1 align="center"> Dog App 🐾 </h1>

## 📜 Description

This is a web application project built with Node.js and Express that allows users to search for random dog breed images. The application uses the public [Dog CEO](https://dog.ceo/dog-api/) API to fetch dog breed images. The project is also configured to run in Docker and is hosted on AWS cloud.

<p align="center">
  <img src="assets/dogapp.gif" height="400">
</p>

## ✅ Features

- [x] **Search Dog Breed Images:** Users can type or select a dog breed and get a random image of that breed.
- [x] **Dog Breed Auto-complete:** The application provides breed suggestions as the user types.
- [x] **New Responsive Design:** Interface optimized for different devices, with modern styling.

## 🚀 Development

**📂 Folder Structure**

```
├── src
│   ├── controllers
│   │   ├── dogController.js      # Logic for fetching dog images
│   │   └── homeController.js     # Logic for rendering the homepage
│   │
│   ├── middlewares
│   │   └── notFound.js           # Middleware for handling 404 errors
│   │
│   ├── public
│   │   └── styles.css            # CSS styling file
│   │
│   ├── routes
│   │   └── rotas.js              # Application route definitions
│   │
│   ├── templates
│   │   └── 404.ejs               # Template for 404 page
│   │
│   └── views
│       └── index.ejs             # EJS template for the homepage
├── app.js                        # Node.js server code
│
├── docker-compose.yml            # Docker Compose configuration
│
├── Dockerfile                    # Docker configuration
│
├── package.json                  # Project dependencies
│
└── package-lock.json             # Exact versions of dependencies
```

**⚙️ Technologies Used**

- **Node.js:** JavaScript runtime environment  
- **Express:** Web framework for Node.js  
- **EJS:** Template engine for rendering HTML pages  
- **Axios:** HTTP client for making API requests  
- **Docker:** For containerizing the application  
- **Docker Compose:** For orchestrating Docker containers  

## 💻 Running the Application Locally

**Prerequisites:**  
- `Node.js` or `Docker` and `Docker Compose`

**Steps to run the application**

- **Clone the repository:**
```
git clone https://github.com/Layonj3000/Dog-APP.git
```

- **If you prefer running with Node.js, install the dependencies and start the project:**
```
npm install
node app.js
```

- **Or if you prefer running with Docker, build the Docker image and run the container:**
```
docker-compose build
docker-compose up
```

- **Access the application locally:**
Open your browser and go to http://localhost:3000

## 🌐 AWS Architecture

- The step-by-step guide for deploying the application to AWS can be found at: [Link](https://katfrd.notion.site/ECR-e-EC2-na-AWS-36efd2d1cf5943479d64c2982f3dfb59)

- The image below illustrates the architecture. The web application is packaged as a Docker image and stored in an ECR repository. The image is pulled from ECR to an EC2 instance. The user interacts with the application via the internet through a public IPv4 address, and the application makes requests to an external API (Dog API) to fetch data. The Internet Gateway enables communication between the EC2 instance and the internet.

<p align="center">
  <img src="assets/arquiteturaAWS.png" height="400">
</p>

## 👨‍💻 Authors
<div>
  <table style="margin: 0 auto;">
    <tr>
      <td><a href="https://github.com/katfr"><img loading="lazy" src="https://avatars.githubusercontent.com/u/86882743?v=4" width="115"><br><sub>Katarina Lydia</sub></a></td>
      <td><a href="https://github.com/Layonj300"><img loading="lazy" src="https://avatars.githubusercontent.com/u/106559843?v=4" width="115"><br><sub>Layon Reis</sub></a></td>
      <td><a href="https://github.com/lloureiro2"><img loading="lazy" src="https://avatars.githubusercontent.com/u/48761420?v=4" width="115"><br><sub>Leonardo Loureiro</sub></a></td>
      <td><a href="https://github.com/ManoellaReis"><img loading="lazy" src="https://media.licdn.com/dms/image/v2/D5603AQFlJdXVPhVe5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722983069276?e=1765411200&v=beta&t=UI-T86SWskykrsHVe-fF8o61U4saMY4wtXC-Z-60GMA" width="115"><br><sub>Manoella Reis</sub></a></td>
    </tr>
  </table>
</div>
