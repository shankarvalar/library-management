import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import "./Loader.css";

export default function Loader() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (
        <>
            <div className="loader">
                <HashLoader
                    color={"#3641d6"}
                    loading={loading}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    )
}