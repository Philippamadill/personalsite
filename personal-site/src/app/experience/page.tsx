'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Handlee, Inter } from "next/font/google";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, duration } from '@mui/material';
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
    const [checkedCEC, setCheckedCEC] = React.useState(false);

    const handleChangeCEC = () => {
      setCheckedCEC((prev) => !prev);
      setCheckedWISE(false);
    };
    const [checkedWISE, setCheckedWISE] = React.useState(false);

    const handleChangeWISE = () => {
      setCheckedWISE((prev) => !prev);
      setCheckedCEC(false);
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
                            <p onClick={handleChangeCEC}>Canadian Engineering Competition 2024 <span className={styles.arrowright}>-&gt;</span></p>
                            <p onClick={handleChangeWISE}>Women In Science and Engineering (WISE) <span className={styles.arrowright}>-&gt;</span></p>
                            <p>Canadian Engineering <br/>Leadership Conference 2023 <span className={styles.arrowright}>-&gt;</span></p>
                            <p>Research Assistant <span className={styles.arrowright}>-&gt;</span></p>
                        </div>
                    </div>
                   <div>
    <Box sx={{ height: 180 }}>
      <Box sx={{ }}>
        <Fade in={checkedCEC} style={{ transitionDuration: checkedCEC ? '3s' :'3s'}}>
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

    <Box sx={{ height: 180 }}>
      <Box sx={{  }}>
        <Fade in={checkedWISE} style={{ transitionDuration: checkedWISE ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Women In Science and Engineering (WISE)
                                </Typography>
                                <Typography variant="body2" color="white">
                                    The University of Calgary's Women In Science and Engineering (WISE) club has been on campus since 1990, promoting diversity 
                                    and inclusivity in STEM fields.<br/><br/>I have been involved as WISE since 2020 in various roles, working from junior events 
                                    coordinator to events coordinator to VP Events and finally President. I successfully organized such events as our annual 
                                    research night that exposes undergrads to all the amazing research happening on campus, our annual networking night that
                                    brings together upwards of 25 companies looking for interns and new grads to network with students, social events like 
                                    trivia and crafting, and more! <br/><br/>WISE's commitment to increase opportunities in STEM professionally, academically, and 
                                    socially for those who may have fewer opportunities is something I'm extremely passionate about and being involved has drastically
                                    improved my undergraduate experience!
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>
                 </div>   
                </div>
            </div>
        </main>
    );
}
