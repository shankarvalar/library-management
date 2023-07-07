import React from "react";
import axios from "axios";
import Modal from "./Modal";
import HashLoader from "react-spinners/HashLoader";
import AuthDetails from "./Authdetails";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import "./Loader.css";

export default function Home() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [bookData, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const totalPages = Math.ceil(bookData.length / recordsPerPage);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = bookData.slice(indexOfFirstRecord, indexOfLastRecord);

    const searchBook = () => {

        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyADvdACNNVb-bOamKG1sxk5hdP_PM63K6Q' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Navbar />
            <div>
                {
                    loading ? (
                        <div className="loader">
                            <HashLoader
                                color={"#3641d6"}
                                loading={loading}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>) : (
                        <>

                            <Box

                                sx={{

                                    width: "100%",
                                    height: "550px"

                                }}>
                                <AuthDetails />


                                <div style={{ display: "flex", justifyContent: "center", padding: "4rem", margin: 1, }} >


                                    <input type="text" placeholder="Enter Your Book Name"
                                        value={search} onChange={e => setSearch(e.target.value)}
                                        style={{ padding: "1rem" }} />
                                    <button type="submit" onClick={searchBook}>search</button>


                                </div>
                                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} gap={7} >


                                    {/* {
                        <Card book={bookData} />
                    }
                    <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="secondary" /> */}
                                    {currentRecords?.length > 0 &&
                                        currentRecords.map((item) => {
                                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                                            let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                                            if (thumbnail != undefined && amount != undefined) {
                                                return (
                                                    <>

                                                        <Grid container
                                                            sx={{

                                                                width: "15rem",
                                                                p: 2,
                                                                display: 'flex',
                                                                flexDirection: 'column',

                                                                overflow: 'hidden'
                                                            }}

                                                            boxShadow={10}

                                                        >

                                                            <Grid item alignItems="start">
                                                                <div onClick={() => { setShow(true); setItem(item) }} >
                                                                    <img src={thumbnail} alt="img" />
                                                                    <div >
                                                                        <Stack>
                                                                            <Typography
                                                                                variant="h7">{item.volumeInfo.title}</Typography></Stack>
                                                                        <p className="amount">&#8377;{amount}</p>
                                                                        <Modal show={show} item={bookItem} onClose={() => setShow(true)} />



                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        </Grid >


                                                    </>
                                                )
                                            }

                                        })
                                    }
                                </Grid>
                            </Box >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ p: 4 }}
                            >
                                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="secondary" />
                            </Box>
                        </>)
                }
            </div>
        </>
    )
}



