export default function Header() {
    return (
        <header className="relative">
            <div className="bg-pink-300 flex flex-row justify-between h-16">
            <div>
                <a className="">
                <img src="/assets/placeholderlogo.png" className="h-8">
                </img>
                </a>
            </div>
            <div> 
                <a>About</a>
                <a>FAQs</a>
                <a>Manuals</a>
                <a>Videos</a>
                <a>Resources & Tools</a>
            </div>
            </div>
        </header>
    );
}