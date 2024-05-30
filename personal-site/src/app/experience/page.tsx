'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Handlee, Inter } from "next/font/google";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReactDOM from "react-dom/client";
import Button from '@mui/material/Button';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import About from "./about";
//import Experience from "./experience";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';



const handlee = Handlee({ weight:'400', subsets: ["latin"] });
const inter = Inter({ weight: '400', subsets: ["latin"] });

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return (
        <main className={styles.main}>
            <div  className={styles.left}>
                <Link href="/">
                    <div className={styles.card}>
                        <span className={styles.arrow}>&lt;-</span> <span>Back to home</span>
                    </div>
                </Link>
            </div>
            <div className={styles.flex}>
                <div className={handlee.className}>
                    <h1 className={styles.AboutHeader}>Experience</h1>
                </div>
                <div className={styles.list}>
                    <div className={inter.className}>
                        <div className={styles.description}>
                            <p onClick={handleChange}>Canadian Engineering Competition 2024 <span className={styles.arrowright}>-&gt;</span></p>
                            <p>Women In Science and Engineering (WISE) <span className={styles.arrowright}>-&gt;</span></p>
                            <p>Canadian Engineering <br/>Leadership Conference 2023 <span className={styles.arrowright}>-&gt;</span></p>
                            <p>Research Assistant <span className={styles.arrowright}>-&gt;</span></p>
                        </div>
                    </div>
                   
    <Box sx={{ height: 180 }}>
      <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Canadian Engineering Competition 2024
                                </Typography>
                                <Typography variant="body2" color="white">
                                    A national engineering competition that hosts over 200 students from engineering programs across Canada. 
                                    I co-led the coordination of the programming competition, including coming up with the theme and objectives, 
                                    writing the competition manual and briefing documents, compiling and running competitor code, 
                                    answering questions from competitors about the competition, and creating judging metrics. 
                                    <br/> Additionally, I was the lead for the first aid team at the conference, ensuring everyone felt safe and comfortable. 
                                    As an organizing committee member, I helped ensure the weekend went off without a hitch and that everyone had a great time!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>
                    
                </div>
            </div>
        </main>
    );
}
