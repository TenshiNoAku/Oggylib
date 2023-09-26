import React from 'react';
import './bootstrap';
import '../css/index.scss'
import "macro-css";
import ReactDOM from 'react-dom/client';
import LoginForm from './Pages/LoginForm';
import UserCreate from "@/Pages/UserCreate";
import AdminPanel from "./Pages/AdminPanel";
import Book from "./Pages/book"

ReactDOM.createRoot(document.getElementById('app')).render(
    <Book/>
);
