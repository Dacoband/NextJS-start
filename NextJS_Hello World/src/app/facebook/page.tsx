'use client'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button'

const Facebook = () => {
    const router = useRouter();

    const handleBtn = () => {
        router.push("/");
    };

    return (
        <div>
            Facebook Page
            <div>
                <Button variant="danger">Volka Main</Button>
                <Button onClick={handleBtn}>Back Home</Button>
            </div>
        </div>
    );
};

export default Facebook;
