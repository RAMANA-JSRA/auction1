# **Online Auction System ‑ MERN**                                                                                Sep 2023 ‑ Nov 2023
## E‑commerce, Team Project*
### Deployment link:  https://ramana-jsra.github.io/auction1/
```
1. Enabled real‑time bidding functionality using WebSockets, allowing users to place bids and receive immediate updates on auction
status without refreshing the page.
2. Implemented secure user authentication with JWT and bcrypt, ensuring safe access to the platform. Integrated a payment gateway like Stripe or PayPal for secure and convenient payment processing during auction transactions.
3. Developed a responsive user interface using React.js, facilitating seamless interaction across devices. Implemented CRUD operations via a RESTful API built with Express.js and MongoDB to manage auctions, items, and user profiles efficiently.
```

## Overview
This is a full-stack online auction system built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to place bids on items, manage auctions, and handle authentication securely.

## Features
- User authentication and authorization
- Real-time bidding with live updates
- Countdown timer for auctions
- Product categories and search functionality
- Image uploads via Cloudinary

## Technologies Used

### Frontend (React)
- **React 18** - JavaScript library for building UI
- **Ant Design** (`antd`) - UI component library
- **React Router DOM** - Routing library for navigation
- **Redux Toolkit** - State management
- **Axios** - HTTP requests to backend
- **JWT Decode** - Decoding JWT tokens for authentication

### Backend (Node.js + Express)
- **Express.js** - Web framework for handling API requests
- **MongoDB + Mongoose** - Database for storing user and auction data
- **jsonwebtoken (JWT)** - Token-based authentication
- **bcrypt** - Password hashing for security
- **Cloudinary + Multer** - Image storage and file upload handling
- **CORS & dotenv** - Security and environment management

## Installation and Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js** (Latest LTS version)
- **MongoDB** (Locally or via a cloud service like MongoDB Atlas)

### Steps to Run the Project

#### 1. Clone the Repository
```sh
git clone https://github.com/ramana-jsra/online-auction-system.git
cd online-auction-system
```

#### 2. Setup Backend (Server)
```sh
cd server
npm install
```

- Create a `.env` file in the `server` directory and add the following:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

- Start the backend server:
```sh
npm start
```

#### 3. Setup Cloudinary
Cloudinary is used for storing images. Follow these steps to configure it:

1. Sign up at [Cloudinary](https://cloudinary.com/).
2. Navigate to the **Dashboard** and copy your Cloud Name, API Key, and API Secret.
3. Add these credentials to the `.env` file in the `server` directory:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. Install Cloudinary dependencies in the server:
   ```sh
   npm install cloudinary multer multer-storage-cloudinary
   ```
5. Use Cloudinary in your Node.js application to handle image uploads.

#### 4. Setup Frontend (Client)
```sh
cd ../client
npm install
```

- Create a `.env` file in the `client` directory and add:
```env
REACT_APP_API_URL=http://localhost:4000
```

- Start the frontend application:
```sh
npm start
```

## Project Structure
```
/online-auction-system
  ├── client/   # React Frontend
  ├── server/   # Node.js Backend
  ├── .env      # Environment variables
  ├── package.json # Dependencies
```

## Usage
- Register/Login to the platform.
- Create auctions and upload images via Cloudinary.
- Place bids on available auctions.
- View auction history and user profiles.
- Monitor countdown timers for auction expirations.

## Future Improvements
- Enhance real-time bidding with WebSockets.
- Implement payment gateway for transactions.
- Improve UI/UX for a better user experience.

## Contributing
Contributions are welcome! Feel free to submit a pull request with improvements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
