export default function Header() {
    return (
        <header className="relative">
            <div className="bg-pink-300 flex flex-row justify-between h-16">
            <div>
                <a className="">
                <img src="/assets/placeholderlogo.png" alt="NJAppleseed Logo" width="300" height="500">
                </img>
                </a>
            </div>
            <div> 
                <a href="/about">About</a>
                <a href="/faqs">FAQs</a>
                <a href="/manual">Manuals</a>
                <a href="/videos">Videos</a>
                <a href="/resources">Resources & Tools</a>
            </div>
            <div> 
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