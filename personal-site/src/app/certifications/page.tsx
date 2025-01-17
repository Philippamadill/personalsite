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
    const [checkedNL, setCheckedNL] = React.useState(false);

    const handleChangeNL = () => {
      setCheckedNL((prev) => !prev);
      setCheckedLSI(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedLSI, setCheckedLSI] = React.useState(false);

    const handleChangeLSI = () => {
      setCheckedLSI((prev) => !prev);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedSI, setCheckedSI] = React.useState(false);

    const handleChangeSI = () => {
    setCheckedSI((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedO2, setCheckedO2] = React.useState(false);

    const handleChangeO2 = () => {
    setCheckedO2((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedBLS, setCheckedBLS] = React.useState(false);

    const handleChangeBLS = () => {
    setCheckedBLS((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedFAI, setCheckedFAI] = React.useState(false);

    const handleChangeFAI = () => {
    setCheckedFAI((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedYL, setCheckedYL] = React.useState(false);

    const handleChangeYL = () => {
    setCheckedYL((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
    };
    const [checkedCPR, setCheckedCPR] = React.useState(false);

    const handleChangeCPR = () => {
    setCheckedCPR((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedIFA(false);
    };
    const [checkedIFA, setCheckedIFA] = React.useState(false);

    const handleChangeIFA = () => {
    setCheckedIFA((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
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
                    <h1 className={styles.AboutHeader}>Certifications</h1>
                </div>
                <div className={styles.list}>
                    <div className={inter.className}>
                        <div className={styles.description}>
                            <p onClick={handleChangeNL}>National Lifeguard (Pool) <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            {/*<p onClick={handleChangeLSI}>Lifesaving Instructor/Examiner <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeSI}>Swim Instructor/Examiner <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeO2}>Oxygen Administration <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeBLS}>Basic Life Support <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            */}<p onClick={handleChangeFAI}>Lifesaving First Aid Instructor/Examiner <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeYL}>Youth Leader <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeCPR}>Lifesaving CPR Instructor/Examiner <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeIFA}>Intermediate First Aid, CPR-C, AED <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize:13}}></ArrowForwardIcon></span></p>
                        </div>
                    </div>
                   <div>
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box className={styles.box1} sx={{ }}>
        <Fade in={checkedNL} style={{ transitionDuration: checkedNL ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea className={styles.CEC}>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    National Lifeguard (Pool)
                                </Typography>
                               <Image className={styles.img} src={"/image(5).png"} alt="NL certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedLSI} style={{ transitionDuration: checkedLSI ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifesaving Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/image(1).png"} alt="LSI certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>  
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedSI} style={{ transitionDuration: checkedSI ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Swim Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/image(3).png"} alt="SI certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>    
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedO2} style={{ transitionDuration: checkedO2 ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Oxygen Administration
                                </Typography>
                               <Image className={styles.img} src={"/Screenshot 2024-05-31 090445.png"} alt="O2 certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedBLS} style={{ transitionDuration: checkedBLS ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Basic Life Support
                                </Typography>
                               <Image className={styles.img} src={"/BLS.png"} alt="BLS certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedFAI} style={{ transitionDuration: checkedFAI ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifesaving First Aid Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/First Aid Instructor.png"} alt="First Aid Instructor certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedYL} style={{ transitionDuration: checkedYL ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Youth Leader
                                </Typography>
                               <Image className={styles.img} src={"/Youth Leader.png"} alt="Youth Leader certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedCPR} style={{ transitionDuration: checkedCPR ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifesaving CPR Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/CPR instruct.png"} alt="Lifesaving CPR Instructor/Examiner certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedIFA} style={{ transitionDuration: checkedIFA ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Intermediate First Aid, CPR-C, AED
                                </Typography>
                               <Image className={styles.img} src={"/First Aid.png"} alt="Intermediate First Aid, CPR-C, AED certification card" width= "500" height="250"></Image>
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
