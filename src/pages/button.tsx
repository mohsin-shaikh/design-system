import Button from '@/components/button'

export default function Buttons() {
    return (<div className='container mx-auto my-2 space-y-4'>
        <div className='text-xl'>Default Button</div>
        <div className='flex space-x-8'>
            <Button color={'primary'} onClick={() => {console.log('hello')}}>Primary</Button>
            <Button color={'secondary'}>Secondary</Button>
            <Button color={'gray'}>Gray</Button>
            <Button color={'success'}>Success</Button>
            <Button color={'warning'}>Warning</Button>
            <Button color={'danger'}>Danger</Button>
        </div>
        <div className='text-xl'>Disabled Default Button</div>
        <div className='flex space-x-8'>
            <Button color={'primary'} disabled={true}>Primary</Button>
            <Button color={'secondary'} disabled={true}>Secondary</Button>
            <Button color={'gray'} disabled={true}>Gray</Button>
            <Button color={'success'} disabled={true}>Success</Button>
            <Button color={'warning'} disabled={true}>Warning</Button>
            <Button color={'danger'} disabled={true}>Danger</Button>
        </div>
        <div className='text-xl'>Outlined Button</div>
        <div className='flex space-x-8'>
            <Button color={'primary'} outlined={true}>Primary</Button>
            <Button color={'secondary'} outlined={true}>Secondary</Button>
            <Button color={'gray'} outlined={true}>Gray</Button>
            <Button color={'success'} outlined={true}>Success</Button>
            <Button color={'warning'} outlined={true}>Warning</Button>
            <Button color={'danger'} outlined={true}>Danger</Button>
        </div>
        <div className='text-xl'>Disabled Outlined Button</div>
        <div className='flex space-x-8'>
            <Button color={'primary'} outlined={true} disabled={true}>Primary</Button>
            <Button color={'secondary'} outlined={true} disabled={true}>Secondary</Button>
            <Button color={'gray'} outlined={true} disabled={true}>Gray</Button>
            <Button color={'success'} outlined={true} disabled={true}>Success</Button>
            <Button color={'warning'} outlined={true} disabled={true}>Warning</Button>
            <Button color={'danger'} outlined={true} disabled={true}>Danger</Button>
        </div>
    </div>)
}
