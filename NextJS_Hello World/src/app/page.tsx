'use client'
import Link from "next/link";
import style1 from '@/style/main.module.css';
import style2 from '@/style/volka.module.css';
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {

  const fetcher = (url:string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,{
      //Catching data 
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  );

  console.table("Check dataaL: ",data);

  // const fetchData = async() =>{
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log("check res: " , data);
  //   }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>{data?.length}</div>
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
