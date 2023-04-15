import Link from '@/components/link'

export default function Links() {
    return (<div className='container mx-auto my-2 space-y-4'>
        <h1>Default Link</h1>
        <div className='flex space-x-8'>
            <Link color={'primary'} onClick={() => {console.log('hello')}}>Primary</Link>
            <Link color={'secondary'}>Secondary</Link>
            <Link color={'gray'}>Gray</Link>
            <Link color={'success'}>Success</Link>
            <Link color={'warning'}>Warning</Link>
            <Link color={'danger'}>Danger</Link>
        </div>
        <h1>Disabled Default Link</h1>
        <div className='flex space-x-8'>
            <Link color={'primary'} disabled={true}>Primary</Link>
            <Link color={'secondary'} disabled={true}>Secondary</Link>
            <Link color={'gray'} disabled={true}>Gray</Link>
            <Link color={'success'} disabled={true}>Success</Link>
            <Link color={'warning'} disabled={true}>Warning</Link>
            <Link color={'danger'} disabled={true}>Danger</Link>
        </div>
        <h1>Outlined Link</h1>
        <div className='flex space-x-8'>
            <Link color={'primary'} outlined={true}>Primary</Link>
            <Link color={'secondary'} outlined={true}>Secondary</Link>
            <Link color={'gray'} outlined={true}>Gray</Link>
            <Link color={'success'} outlined={true}>Success</Link>
            <Link color={'warning'} outlined={true}>Warning</Link>
            <Link color={'danger'} outlined={true}>Danger</Link>
        </div>
        <h1>Disabled Outlined Link</h1>
        <div className='flex space-x-8'>
            <Link color={'primary'} outlined={true} disabled={true}>Primary</Link>
            <Link color={'secondary'} outlined={true} disabled={true}>Secondary</Link>
            <Link color={'gray'} outlined={true} disabled={true}>Gray</Link>
            <Link color={'success'} outlined={true} disabled={true}>Success</Link>
            <Link color={'warning'} outlined={true} disabled={true}>Warning</Link>
            <Link color={'danger'} outlined={true} disabled={true}>Danger</Link>
        </div>
    </div>)
}
