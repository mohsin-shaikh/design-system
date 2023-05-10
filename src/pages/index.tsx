import Link from 'next/link'
import Button from '@/components/button'

export default function Home() {
    return (<div className='container mx-auto my-2 space-x-4'>
        <Link href={'./button'}>
            <Button>Go to Buttons Page</Button>
        </Link>
        <Link href={'./link'}>
            <Button>Go to Links Page</Button>
        </Link>
    </div>)
}
