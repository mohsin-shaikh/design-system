import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";


const UIPage = () => {
    return (<div className='container mx-auto my-2 space-y-4'>
        <div className='flex space-x-2'>
            <Button onClick={() => alert('hello')}>Solid</Button>
            <Button variant={'outline'} onClick={() => alert('hello')}>Outlined</Button>
            <Button variant={'ghost'} onClick={() => alert('hello')}>Ghost</Button>
            <Button variant={'soft'} onClick={() => alert('hello')}>Soft</Button>
            <Button variant={'link'} onClick={() => alert('hello')}>Link</Button>

            {/* <Button href="/">Home Page</Button>
            <Link href="/">Home Page</Link> */}
        </div>
    </div>);
}

export default UIPage;
