export default function Header() {
    return (
        <header className="relative">
            <div className="flex flex-row justify-between p-6">
            <div>
                <a href="/">
                <img className="border-2" src="/assets/image.png" alt="NJAppleseed Placeholder Logo"></img>
                </a>
            </div>
            <div className="max-lg:hidden flex flex-row gap-6"> 
                <a href="/about" className="text-md p-5 font-semibold">ABOUT</a>
                <a href="/faqs" className="text-md p-5 font-semibold">FAQs</a>
                <a href="/manual" className="text-md p-5 font-semibold">MANUAL</a>
                <a href="/videos" className="text-md p-5 font-semibold">VIDEOS</a>
                <a href="/resources" className="text-md p-5 font-semibold">RESOURCES & TOOLS</a>
            </div>
            <div className="lg:hidden"> 
                <a>
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6 h16 M4 12 h16 M4 18 h16"></path>
                </svg>
                </a>
            </div>
            </div>
        </header>
    );
}