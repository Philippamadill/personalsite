import Image from "next/image";
import styles from "./page.module.css";
import { Handlee } from "next/font/google";
import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import About from "./about";
//import Experience from "./experience";
import Link from 'next/link';
const handlee = Handlee({ weight:'400', subsets: ["latin"] });

export default function Home() {
  
  return (
    <main className={styles.main}>
       
      <div className={handlee.className}>
        <h1 className={styles.name}>Philippa Madill</h1>     
        </div>
      <div className={styles.flex}>
       
        <div
          className={styles.card}>
            <Link href="/about">
          <h2>
            About Me <span>-&gt;</span>
          </h2>
          <p>Who is Philippa Madill?</p>
          </Link>
        </div>

        <div
          className={styles.card}
        >
          <Link href="/experience">
          <h2>
            Experience <span>-&gt;</span>
          </h2>
          <p>What has Philippa done?</p>
          </Link>
        </div>

        </div>
      
    </main>
  );
}
