export default function ManualComp({manual}) {
    return (
        <section className="px-6 py-12 max-w-6xl mx-auto">
            {/* Include all the input values here */}
            <input id="intro" type="checkbox" title="intro-tab" className="hidden peer/intro"/>
            
            {/* Div holding all the labels */}
            <div className="flex flex-row items-end">
            <label htmlFor="intro" className="cursor-pointer label">
                <p className="text-base p-2 border-b peer-checked/intro:border-black peer-checked/intro:text-black hover:border-black hover:text-black text-gray-400 border-gray-400">Introduction</p>
            </label>
            <label htmlFor="accordianMenu" className="cursor-pointer label">
                <p className="text-base p-2 border-b hover:border-black text-gray-400 border-gray-400">Chapter 1: Rights of Uninsured Patients</p>
            </label>
            </div>

            {/* Every piece of the manual */}
            <section className="py-6 overflow-hidden max-h-0 peer-checked/intro:max-h-none">
                <h1 className="text-4xl text-semibold text-[#919F63] py-6">
                Introduction
                </h1>
                <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel rhoncus nunc, et viverra urna. Integer finibus porttitor nulla, quis ultricies elit finibus tincidunt. Vestibulum ut turpis nisl. Aliquam at nibh quis magna luctus tincidunt condimentum non urna. Praesent eget luctus mauris, quis tristique magna. Cras eu accumsan mauris. Vestibulum et feugiat velit. Ut semper condimentum lorem, id ultrices nisl pulvinar sit amet. Sed elementum mattis pretium. Suspendisse nec sapien nec nunc aliquam tincidunt ut eget turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec cursus, justo vitae vestibulum sagittis, eros ipsum consequat ipsum, tempor pretium metus sem non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra finibus dui et euismod. Curabitur mollis nisl eu blandit porttitor. Aenean porta condimentum euismod. Maecenas vehicula leo id tortor imperdiet, at eleifend augue volutpat. Quisque tincidunt feugiat convallis. Cras facilisis enim at tortor pharetra lacinia. Aliquam aliquet nunc a urna commodo, vitae pretium est ullamcorper. Phasellus vulputate felis ut sapien pharetra, sed pharetra ex posuere. Nunc semper lorem at nisl scelerisque bibendum. Praesent id mauris ut dui efficitur tristique. Etiam luctus lectus nec bibendum luctus.
                </p>
            </section>
        </section>
    );
}