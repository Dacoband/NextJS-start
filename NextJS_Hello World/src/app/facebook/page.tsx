'use client'
import { useRouter } from 'next/navigation'
const Facebook = () => {
    const router = useRouter() // ReLogin smooth, not reload page 
    const handleBtn = ()=>{
        router.push("/")
    }
    return (
        <div>
            Facebook Page
            <div>
                <button onClick={()=> handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Facebook;