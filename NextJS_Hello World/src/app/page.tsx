import Link from "next/link";
import style1 from '@/style/main.module.scss';
import style2 from '@/style/volka.module.scss';
export default function Home() {
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
    </div>
  )
}
