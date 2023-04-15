import Button from '@/components/button'


export default function Home() {
    return (<div className='container mx-auto my-2 space-y-1'>
        <h1>Default Button</h1>
        <div className='flex space-x-1'>
            <Button onClick={() => alert()} color={'primary'}>Primary</Button>
            <Button onClick={() => alert()} color={'secondary'}>Secondary</Button>
            <Button onClick={() => alert()} color={'success'}>Success</Button>
            <Button onClick={() => alert()} color={'warning'}>Warning</Button>
            <Button onClick={() => alert()} color={'danger'}>Danger</Button>
        </div>
        <h1>Disabled Default Button</h1>
        <div className='flex space-x-1'>
            <Button onClick={() => alert()} color={'primary'} disabled={true}>Primary</Button>
            <Button onClick={() => alert()} color={'secondary'} disabled={true}>Secondary</Button>
            <Button onClick={() => alert()} color={'success'} disabled={true}>Success</Button>
            <Button onClick={() => alert()} color={'warning'} disabled={true}>Warning</Button>
            <Button onClick={() => alert()} color={'danger'} disabled={true}>Danger</Button>
        </div>
        <h1>Outlined Button</h1>
        <div className='flex space-x-1'>
            {/* Outlined */}
            <Button onClick={() => alert()} color={'primary'} outlined={true}>Primary</Button>
            <Button onClick={() => alert()} color={'secondary'} outlined={true}>Secondary</Button>
            <Button onClick={() => alert()} color={'success'} outlined={true}>Success</Button>
            <Button onClick={() => alert()} color={'warning'} outlined={true}>Warning</Button>
            <Button onClick={() => alert()} color={'danger'} outlined={true}>Danger</Button>
        </div>
        <h1>Disabled Outlined Button</h1>
        <div className='flex space-x-1'>
            {/* Disabled */}
            <Button onClick={() => alert()} color={'primary'} outlined={true} disabled={true}>
                Primary
            </Button>
            <Button onClick={() => alert()} color={'secondary'} outlined={true} disabled={true}>
                Secondary
            </Button>
            <Button onClick={() => alert()} color={'success'} outlined={true} disabled={true}>
                Success
            </Button>
            <Button onClick={() => alert()} color={'warning'} outlined={true} disabled={true}>
                Warning
            </Button>
            <Button onClick={() => alert()} color={'danger'} outlined={true} disabled={true}>
                Danger
            </Button>
        </div>
    </div>)
}
