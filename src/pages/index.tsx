import Button from '@/components/button'


export default function Home() {
    return (<div className='container mx-auto my-2'>
        <div className='flex space-x-1'>
            <Button
                onClick={() => alert()}
                variant={'primary'}
            >
                Primary
            </Button>
            <Button
                onClick={() => alert()}
                variant={'primary'}
                disabled={true}
            >
                Disabled
            </Button>
        </div>
    </div>)
}
