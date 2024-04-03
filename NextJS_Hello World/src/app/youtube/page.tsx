'use client'
import { useRouter } from 'next/navigation'
const Youtube = () =>{
    const router = useRouter() // ReLogin smooth, not reload page 
    const handleBtn = ()=>{
        router.push("/")
    }
    return (
        <div>
            Youtube Page
            <div>
                <button onClick={()=> handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default Youtube;