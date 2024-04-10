'use client'
import Link from "next/link";
import style1 from '@/style/main.module.css';
import style2 from '@/style/volka.module.css';
import AppTable from "@/components/app.table";
import { useEffect } from "react";
export default function Home() {

  const fetchData = async() =>{
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log("check res: " , data);
    }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <li className={style1['red']}>
          <Link href={"/facebook"}>
          <span className={style2['.red']}>Facebook</span>
          </Link>
        </li>
        <li className={style1['green']}>
          <Link href={"/tiktok"}>
            Tiktok
          </Link>
        </li>
        <li className={style1['red']}>
          <Link href={"/youtube"}>
            Youtube
          </Link>
        </li>
      </ul>
      <AppTable />
    </div>
  )
}
