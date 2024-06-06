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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



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
      setCheckedCELC(false);
      setCheckedilab(false);
      setCheckedGuard(false);
    };
    const [checkedWISE, setCheckedWISE] = React.useState(false);

    const handleChangeWISE = () => {
      setCheckedWISE((prev) => !prev);
      setCheckedCEC(false);
      setCheckedCELC(false);
      setCheckedilab(false);
      setCheckedGuard(false);
    };
    const [checkedCELC, setCheckedCELC] = React.useState(false);

    const handleChangeCELC = () => {
      setCheckedCELC((prev) => !prev);
      setCheckedCEC(false);
      setCheckedWISE(false);
      setCheckedilab(false);
      setCheckedGuard(false);
    };
    const [checkedilab, setCheckedilab] = React.useState(false);

    const handleChangeilab = () => {
      setCheckedilab((prev) => !prev);
      setCheckedCEC(false);
      setCheckedWISE(false);
      setCheckedCELC(false);
      setCheckedGuard(false);
    };
    const [checkedGuard, setCheckedGuard] = React.useState(false);

    const handleChangeGuard = () => {
      setCheckedGuard((prev) => !prev);
      setCheckedCEC(false);
      setCheckedWISE(false);
      setCheckedCELC(false);
      setCheckedilab(false);
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
                            
                            <p onClick={handleChangeCEC}>Canadian Engineering Competition 2024 <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeWISE}>Women In Science and Engineering (WISE) <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeCELC}>Canadian Engineering <br/>Leadership Conference 2023 <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeilab}>Research Assistant <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeGuard}>Lifeguard/Swim Instructor <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
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
                                    brings together upwards of 20 companies looking for interns and new grads to network with students, social events like 
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
    <Box sx={{ height: 180 }}>
      <Box sx={{  }}>
        <Fade in={checkedCELC} style={{ transitionDuration: checkedCELC ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Canadian Engineering Leadership Conference (CELC) 2023
                                </Typography>
                                <Typography variant="body2" color="white">
                                    As part of the programming team for CELC 2023, I was responsible for planning and facilitating all the sessions 
                                    themed around technology that took place over the week long conference. As an organizing committee member I helped 
                                    put out metaphorical fires that arose over the week, helped run social events, and ensured everyone's safety as part 
                                    of the first aid team.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }}>
      <Box sx={{  }}>
        <Fade in={checkedilab} style={{ transitionDuration: checkedilab ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Research Assistant
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Over the summer of 2024, I have been working in the University of Calgary's 
                                    Interactions Lab (iLab) as an undergraduate research assistant. My project focuses 
                                    on social human-robot interaction and my duties have included literature review, 
                                    programming robots, and designing a user study.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>
    <Box sx={{ height: 180 }}>
      <Box sx={{  }}>
        <Fade in={checkedGuard} style={{ transitionDuration: checkedGuard ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifeguard/Swim Instructor
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Since 2019, I have worked intermittently as a lifeguard and swim instructor at pools in Drayton Valley and Entwistle.
                                    I progressed from junior to senior lifeguard positions, taking on additional duties such as maintaining chemical 
                                    levels, leading shifts, training new staff, opening and closing the facility, handling issues with patrons, and more!
                                    As an instructor I have taught all levels of swimming lessons, from baby lessons to teen lessons, and have been 
                                    certified to teach Red Cross, Lifesaving Society, and Starfish Swim School programs. <br/><br/>Teaching and guarding 
                                    have taught me invaluable lessons, such as how to be adaptable, how to lead a team, how to handle high-stress situations, 
                                    and how to communicate effectively with adults, toddlers, and everyone in between!
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
