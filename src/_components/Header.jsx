const navigationLinks = [
    { href: "/about", text: "ABOUT" },
    { href: "/faqs", text: "FAQs" },
    { href: "/manual", text: "MANUAL" },
    { href: "/videos", text: "VIDEOS" },
    { href: "/resources", text: "RESOURCES & TOOLS" },
  ];

export default function Header() {
    return (
        <header className="relative px-4">
            <div className="flex flex-col">
            <input
                type="checkbox"
                id="accordianMenu"
                title="Mobile Menu"
                className="hidden peer"
                />
            <div className="flex flex-row justify-between p-6">
            <div>
                <a href="/">
                <img src="/assets/image.png" alt="Placeholder Logo"></img>
                </a>
            </div>     
            <div className="md:hidden"> 
            <label htmlFor="accordianMenu" className="cursor-pointer label">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6 h16 M4 12 h16 M4 18 h16"></path>
                </svg>
            </label>
            </div>
            <div className="max-md:hidden flex flex-row gap-6"> 
                {desktopNavigationLinks()}
            </div>
            </div>
            <div className="md:hidden overflow-hidden peer-checked:max-h-screen max-h-0 flex flex-col gap-3 transition-all duration-300 px-3">
                {mobileNavigationLinks()}
            </div>
            </div>
        </header>
    );
}

function desktopNavigationLinks(){
    return navigationLinks.map((link) => (
        <a href={link.href} className="text-base p-5 font-semibold hover:font-bold hover:underline underline-offset-4 decoration-2">
            {link.text}
        </a>
    ))
}

function mobileNavigationLinks(){
    return navigationLinks.map((link) => (
        <a href={link.href} className="text-base px-5 py-2 font-semibold hover:font-bold hover:underline underline-offset-4 decoration-2">
            {link.text}
        </a>
    ))
}