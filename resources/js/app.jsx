import React from 'react';
import './bootstrap';
import '../css/index.scss'
import "macro-css";
import ReactDOM from 'react-dom/client';
import LoginForm from './Pages/LoginForm';
import UserCreate from "@/Pages/UserCreate";
import AdminPanel from "./Pages/AdminPanel";

ReactDOM.createRoot(document.getElementById('app')).render(
<LoginForm/>
);
