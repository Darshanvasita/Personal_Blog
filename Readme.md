# Blogtastic - Your Daily Dose of Inspiration

A full-stack blogging platform built with React and Firebase, allowing users to create, read, update and delete blog posts with Google authentication.

## 🚀 Features

- 📝 Create and publish blog posts with rich text content
- 🖼️ Image upload support via Cloudinary
- 👤 Google Authentication for secure access
- 📱 Responsive design for all devices
- 🎨 Multiple blog categories:
  - Sports
  - Music
  - Business
  - Fashion and beauty
  - Travel
  - Art and design
- ⚡ Real-time updates using Firebase
- 🔒 Protected routes for authenticated users
- 🔍 Category-wise blog filtering

## 🛠️ Tech Stack

- React.js
- Firebase (Authentication & Realtime Database)
- React Router DOM
- React Hook Form
- Bootstrap 5
- Cloudinary
- Swiper.js
- AOS (Animate On Scroll)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blogtastic.git
```

2. Install dependencies:
```bash
cd blogtastic
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add your Firebase and Cloudinary credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. Run the development server:
```bash
npm run dev
```

## 📝 Project Structure

```
src/
├── comp/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── pages/
│       ├── auth/
│       │   ├── PrivateRoute.jsx
│       │   └── Signin.jsx
│       ├── Blog.jsx
│       ├── Create.jsx
│       ├── Update.jsx
│       ├── Read.jsx
│       └── ...
├── firebase.js
├── App.jsx
└── main.jsx
```

## 🔐 Authentication

The application uses Firebase Authentication with Google Sign-in. Protected routes ensure that only authenticated users can:
- Create new blog posts
- Update existing posts
- Delete posts
- Access the admin dashboard

## 🎨 Styling

- Bootstrap 5 for responsive layout
- Custom CSS for unique styling
- AOS for scroll animations
- Swiper for image carousels

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- Firebase for backend services
- Cloudinary for image hosting
- Bootstrap team for the UI framework
- React community for amazing tools and libraries

## 📧 Contact

- Developer: Darshan Vasita
- Email: darshanvasita12.com
- Project Link: https://github.com/Darshanvasita/Personal_Blog

---
Made with ❤️ by Darshan