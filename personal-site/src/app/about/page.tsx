import Image from "next/image";
import styles from "./page.module.css";
import { Handlee } from "next/font/google";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import About from "./about";
//import Experience from "./experience";
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const handlee = Handlee({ weight:'400', subsets: ["latin"] });

export default function Home() {
  
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
        <h1 className = {styles.AboutHeader}>About me</h1>        
        </div>  
        <div className={styles.bio}>
        <Image className={styles.Headshot}
            src="/Headshot - Philippa Madill.jpg"
            alt="Picture of Philippa" 
            width={277}
            height= {415}/>
            
            <div className = {styles.description}>
                <p> Philippa Madill is a software engineering and computer science student at the University of Calgary, set to graduate in spring 2025.
                <br/><br/><span className={styles.LinkedIn}><Link href={"https://www.linkedin.com/in/philippa-madill"} target="_blank"><LinkedInIcon></LinkedInIcon></Link>  <Link href={"mailto: philippamadill@gmail.com"}><MailOutlineIcon></MailOutlineIcon></Link></span>
                </p>
                </div>
                </div>
                </div>
                <div className={styles.LinkedIn}>
                </div>
        </main>
        );
        }