'use client'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'
const Tiktok = () => {
    const router = useRouter() // ReLogin smooth, not reload page 

    const handleBtn = ()=>{
        router.push("/")
    };

    return (
        <div>
            Tiktok Page
            <div>
                <Button variant="danger">Volka Main</Button>
                <Button onClick={handleBtn}>Back Home</Button>
            </div>
        </div>
    )
}

export default Tiktok;