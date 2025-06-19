import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Dropdown from './dropdown'
import Image from 'next/image'

type routetype ={
    "name" : string,
    "route" : string
}

const route : routetype[] = [
    {
        "name" : "Home",
        "route" : "/"
    },{
        "name" : "Services",
        "route" : '/services'
    },{
        "name" : "AboutUs",
        "route" : "/about"
    },{
        "name" : "ContactUs",
        "route" : "/contact"
    }
]

export default function Header(){
    return(<header className="h-16 w-full flex justify-center fixed top-6 z-50">
        <div className="flex justify-between items-center w-11/12 rounded-lg px-6 border border-slate-900 backdrop-blur-2xl">
            <Image src="/icon.avif" alt="logo" height={100} width={100} className='hidden md:block max-h-8 max-w-8'/>
            <div className='hidden md:flex gap-4 text-base font-semibold'>
                {route.map((items, index)=>(
                    <div key={index}><Link href={items.route} className='text-white hover:text-blue-600 hover:underline'>{items.name}</Link></div>
                ))}
            </div>
            <div className='md:hidden'>
                <Dropdown route={route} />
            </div>    
            <div>
                <SignedOut>
                    <div className='bg-neutral-700 hover:bg-neutral-600 text-white rounded-sm px-4 py-1'>
                        <SignInButton />
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </header>)
}