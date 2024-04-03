'use client'
import { useRouter } from 'next/navigation'
const Tiktok = () => {
    const router = useRouter() // ReLogin smooth, not reload page 
    const handleBtn = ()=>{
        router.push("/")
    }
    return (
        <div>
            Tiktok Page
            <div>
                <button onClick={()=> handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Tiktok;