import React from "react";
import { Link } from "@mui/material";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Home from "./home";
export default function AuthDetails() {
    const [authuser, setAuthuser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthuser(user);
            }
            else {
                setAuthuser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);
    const signOutuser = () => {
        signOut(auth).then(() => {
            console.log("sign outted")
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <>


        </>
    );
};