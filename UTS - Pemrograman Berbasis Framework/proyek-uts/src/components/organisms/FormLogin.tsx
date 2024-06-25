// FormLogin.js

"use client";
import React, { useState } from "react";
import { log, auth } from "@/app/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Button from "@/components/atoms/button";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            // Query Firestore to check if the user exists
            const q = query(collection(log, "users"), where("email", "==", email), where("password", "==", password));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
                // User exists, proceed with Firebase Authentication
                // await signInWithEmailAndPassword(auth, email, password);
                // Redirect to dashboard or home page
                window.location.href = "/dashboard";
            } else {
                setError("User does not exist.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded text-black"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border rounded text-black"
                required
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default FormLogin;
