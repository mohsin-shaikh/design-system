import Link from 'next/link'
import Button from '@/components/button'

export default function Home() {
    return (<div className='container mx-auto my-2 space-y-1'>
        <Link href={'./button'}>
            <Button>Go to Buttons Page</Button>
        </Link>
    </div>)
}
