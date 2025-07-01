# Phonebook App - goit-react-hw-03

A React-based phonebook application built with Vite, featuring contact management with local storage persistence.

## Features

- ✅ Add new contacts with form validation
- ✅ Search contacts by name (case-insensitive)
- ✅ Delete contacts
- ✅ Local storage persistence
- ✅ Form validation using Formik and Yup
- ✅ Responsive design with CSS modules

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Formik** - Form handling
- **Yup** - Form validation
- **nanoid** - Unique ID generation
- **CSS Modules** - Styling

## Project Structure

```
src/
├── components/
│   ├── ContactForm/
│   │   ├── ContactForm.jsx
│   │   └── ContactForm.module.css
│   ├── SearchBox/
│   │   ├── SearchBox.jsx
│   │   └── SearchBox.module.css
│   ├── ContactList/
│   │   ├── ContactList.jsx
│   │   └── ContactList.module.css
│   └── Contact/
│       ├── Contact.jsx
│       └── Contact.module.css
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd goit-react-hw-03
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file is included for proper routing configuration.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Or simply push to GitHub and connect your repository to Vercel for automatic deployments.

## Form Validation Rules

- **Name field:**
  - Required
  - Minimum 3 characters
  - Maximum 50 characters

- **Number field:**
  - Required
  - Minimum 3 characters
  - Maximum 50 characters

## Local Storage

The app automatically saves contacts to browser's local storage and restores them when the page is refreshed. Initial demo contacts are provided for first-time users.

## Browser Support

This application supports all modern browsers that support ES6+ features.

## License

This project is created for educational purposes as part of GoIT React course.