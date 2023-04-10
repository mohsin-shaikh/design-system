import Button from '@/components/button'


export default function Home() {
    return (<div className='container mx-auto'>
        <h1>Design System</h1>
        <Button label='Submit' onClick={() => alert()} />
    </div>)
}
