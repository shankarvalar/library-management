// import React from "react";
// import { useState } from "react";
// import Modal from "./Modal";
// import { Box, Grid, Stack, Typography } from "@mui/material";
// const Card = ({ book }) => {

//     const [show, setShow] = useState(false);
//     const [bookItem, setItem] = useState();
//     const [currentPage, setCurrentPage] = useState(1);
//     const recordsPerPage = 3;
//     const totalPages = Math.ceil(book.length / recordsPerPage);

//     const handlePageChange = (event, page) => {
//         setCurrentPage(page);
//     };

//     const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords = book.slice(indexOfFirstRecord, indexOfLastRecord);

//     console.log(book)
//     return (
//         <>
//             {
//                 book.map((item) => {
//                     let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//                     let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
//                     if (thumbnail != undefined && amount != undefined) {
//                         return (
//                             <>
//                                 {/* <Box sx={{ p: 2, width: "9rem", height: "18rem", display: "flex", justifyContent: "center", overflow: "block" }} boxShadow={20} >
//                                     <Stack >
//                                         <div onClick={() => { setShow(true); setItem(item) }}>
//                                             <img style={{ width: "7rem", height: "7rem", alignItems: "center" }} src={thumbnail} alt="" />
//                                             <div style={{ paddingLeft: "1rem" }}>
//                                                 <Typography
//                                                     variant="p">{item.volumeInfo.title}</Typography>
//                                                 <p className="amount">&#8377;{amount}</p>

//                                                 <Modal show={show} item={bookItem} onClose={() => setShow(false)} />

//                                             </div>
//                                         </div>
//                                     </Stack>
//                                 </Box> */}
//                                 <Grid item
//                                     sx={{ width: "13rem", p: 2 }}

//                                     boxShadow={10}

//                                 >

//                                     <Stack alignItems="start">
//                                         <div onClick={() => { setShow(true); setItem(item) }} >
//                                             <img src={thumbnail} alt="img" />
//                                             <div >
//                                                 <Stack>
//                                                     <Typography
//                                                         variant="h7">{item.volumeInfo.title}</Typography></Stack>
//                                                 <p className="amount">&#8377;{amount}</p>
//                                                 <Modal show={show} item={bookItem} onClose={() => setShow(true)} />



//                                             </div>
//                                         </div>
//                                     </Stack>
//                                 </Grid >


//                             </>
//                         )
//                     }

//                 })
//             }

//         </>
//     )
// }
// export default Card;