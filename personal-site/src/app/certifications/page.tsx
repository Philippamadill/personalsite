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
import ArrowDownward from '@mui/icons-material/ArrowDownward';


const handlee = Handlee({ weight:'400', subsets: ["latin"] });
const inter = Inter({ weight: '400', subsets: ["latin"] });

export default function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [checkedAquatics, setCheckedAquatics] = React.useState(false);
    const handleChangeAquatics = () => {
      setCheckedAquatics((prev) => !prev);
      setCheckedNL(false);
      setCheckedLSI(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
      setCheckedPoolops(false);
      setCheckedIPL(false);
      setCheckedDegrees(false);
      setCheckedEngineering(false);
      setCheckedCPSC(false);
    }; 
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
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
      setCheckedPoolops(false);
      setCheckedIPL(false);
      setCheckedAquatics(false);
      setCheckedDegrees(false);
      setCheckedEngineering(false);
      setCheckedCPSC(false);
    };
    const [checkedPoolops, setCheckedPoolops] = React.useState(false);

    const handleChangePoolops = () => {
    setCheckedPoolops((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
      setCheckedIPL(false);
    };
    const [checkedIPL, setCheckedIPL] = React.useState(false);

    const handleChangeIPL = () => {
    setCheckedIPL((prev) => !prev);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedIFA(false);
      setCheckedPoolops(false);
    };
    
    const [checkedDegrees, setCheckedDegrees] = React.useState(false);

    const handleChangeDegrees = () => {
    setCheckedDegrees((prev) => !prev);
      setCheckedIFA(false);
      setCheckedLSI(false);
      setCheckedNL(false);
      setCheckedSI(false);
      setCheckedO2(false);
      setCheckedBLS(false);
      setCheckedFAI(false);
      setCheckedYL(false);
      setCheckedCPR(false);
      setCheckedPoolops(false);
      setCheckedIPL(false);
      setCheckedAquatics(false);
      setCheckedEngineering(false);
      setCheckedCPSC(false);
    };

    const [checkedEngineering, setCheckedEngineering] = React.useState(false);  
    const handleChangeEngineering = () => {
    setCheckedEngineering((prev) => !prev);
      setCheckedIFA(false);
      setCheckedAquatics(false);
      setCheckedCPSC(false);
    };

    const [checkedCPSC, setCheckedCPSC] = React.useState(false);  
    const handleChangeCPSC = () => {
    setCheckedCPSC((prev) => !prev);
      setCheckedIFA(false);
      setCheckedAquatics(false);
      setCheckedEngineering(false);
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
                            <p onClick={handleChangeDegrees}>Degrees <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeAquatics}>Aquatics Certifications <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize: 13}}></ArrowForwardIcon></span></p>
                            <p onClick={handleChangeIFA}>Intermediate First Aid, CPR-C, AED <span className={styles.arrowright}><ArrowForwardIcon sx={{fontSize:13}}></ArrowForwardIcon></span></p>
                            </div>
                    </div>
                   <div>
    <div>
      <Fade in={checkedAquatics} style={{ transitionDuration: checkedAquatics ? '3s' :'3s'}}>
          <div className= {styles.aquatics}>
          <h2 className={styles.cardHeader}>Aquatics Certifications</h2>
          <div className={styles.cardcontent4}>
            <div className={styles.options1}>
          <p onClick={handleChangeNL}>National Lifeguard (Pool) <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options1}>
          <p onClick={handleChangeLSI}>Lifesaving Instructor/Examiner <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options1}>
          <p onClick={handleChangeSI}>Swim Instructor/Examiner <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options1}>
          <p onClick={handleChangeFAI}>Lifesaving First Aid Instructor/Examiner <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options1}>
          <p onClick={handleChangeCPR}>Lifesaving CPR Instructor/Examiner <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options1}>
          <p onClick={handleChangePoolops}>Swimming Pool Operator 1 <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
           </div>
          <div className={styles.options1a}>
          <p onClick={handleChangeIPL}>International Pool Lifeguard <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
           </div>
          </div>
          </div>                                     
      </Fade>


    </div>

    <div>
      <Fade in={checkedDegrees} style={{ transitionDuration: checkedDegrees ? '3s' :'3s'}}>
          <div>
          <h2 className={styles.cardHeader}>Degrees</h2>
          <div className={styles.cardcontent1}>
            <div className={styles.options}>
          <p onClick={handleChangeEngineering}>BSc Software Engineering (with Distinction) <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
          <div className={styles.options}>
          <p onClick={handleChangeCPSC}>BSc(Hons.) Computer Science <span className={styles.arrowright}><ArrowDownward sx={{fontSize: 13}}></ArrowDownward></span></p>
          </div>
        
          </div>
          </div>                                     
      </Fade>


    </div>
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box className={styles.box1} sx={{ }}>
        <Fade in={checkedNL} style={{ transitionDuration: checkedNL ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
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
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifesaving Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/lifesaving instructor.png"} alt="LSI certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>  
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedSI} style={{ transitionDuration: checkedSI ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Swim Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/swim instructor.png"} alt="SI certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>    
    
   
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedFAI} style={{ transitionDuration: checkedFAI ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
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
        <Fade in={checkedCPR} style={{ transitionDuration: checkedCPR ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Lifesaving CPR Instructor/Examiner
                                </Typography>
                               <Image className={styles.img} src={"/CPR instructor.png"} alt="Lifesaving CPR Instructor/Examiner certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box1}>
        <Fade in={checkedIFA} style={{ transitionDuration: checkedIFA ? '3s' :'3s'}}>
            <Card className={styles.cardcontent} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Intermediate First Aid, CPR-C, AED
                                </Typography>
                               <Image className={styles.img} src={"/first aid and cpr.png"} alt="Intermediate First Aid, CPR-C, AED certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedPoolops} style={{ transitionDuration: checkedPoolops ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    Swimming Pool Operator 1
                                </Typography>
                               <Image className={styles.img} src={"/pool ops.png"} alt="Pool operator certification card" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box>  
    <Box sx={{ height: 180 }} className={styles.box}>
      <Box sx={{ }} className={styles.box}>
        <Fade in={checkedIPL} style={{ transitionDuration: checkedIPL ? '3s' :'3s'}}>
            <Card className={styles.cardcontent2} sx={{ maxWidth: 600 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                    International Pool Lifeguard
                                </Typography>
                               <Image className={styles.img} src={"/ipl.jpg"} alt="International Pool Lifeguard" width= "500" height="250"></Image>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 

    <Box sx={{ height: 180 }}>
      <Box sx={{ }}>
        <Fade in={checkedEngineering} style={{ transitionDuration: checkedEngineering ? '3s' :'3s'}}>
            <Card className={styles.cardcontent3} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                Bachelor of Science in Software Engineering (With Distinction)
                                </Typography>
                                <Image className={styles.img} src={"/BSc Software.png"} alt="copy of degree parchment" width= "400" height="250"></Image>
                                <Typography variant="body2" color="white">
                                    Granted by the University of Calgary in May 2025. Final GPA 3.46. My Capstone project involved incorporating a brain computer interface into a power mobility device to allow children with 
                                    quadriplegic cerebral palsy to gain independent movement in physical space. This was a multidisciplinary project bewtwwen Software, Biomedical, and Mechanical Engineering and earned our team 
                                    second place in the Biomedical category at the annual Capstone Design fair.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Fade>
      
      </Box>
    </Box> 

    <Box sx={{ height: 180 }}>
      <Box sx={{ }}>
        <Fade in={checkedCPSC} style={{ transitionDuration: checkedCPSC ? '3s' :'3s'}}>
            <div className= {styles.CPSC}>
            <Card className={styles.cardcontent3} sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardContent className={styles.CEC}>
                                <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                Bachelor of Science (Honours) in Computer Science
                                </Typography>
                                <Image className={styles.img} src={"/BSc Hons CPSC.png"} alt="copy of degree parchment" width= "400" height="250"></Image>
                                <Typography variant="body2" color="white">
                                    Granted by the University of Calgary in May 2025. Final GPA 3.46. My honours thesis was titled "Brain-Computer Interface Operation in Virtual Reality for Children with Complex Mobility Needs".
                                    The project involved developing a virtual reality digital twin of a physical power mobility device to allow children with quadriplegic cerebral palsy to simulate movement in a safe environment 
                                    before transitioning skills to the real world. My work was published in the 11th International BCI Meeting in Banff, Canada in June 2025.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </div>
            </Fade>
      
      </Box>
    </Box> 
                 </div>   
                </div>
            </div>
        </main>
    );
}
