export default function ManualComp({manual}) {
    return (
        <div className="px-4 py-8">
            <div className="flex flex-row">
            <label htmlFor="accordianMenu" className="cursor-pointer label">
                <p className="text-base p-2 border-b hover:border-black text-gray-400 border-gray-400">Introduction</p>
            </label>
            <label htmlFor="accordianMenu" className="cursor-pointer label">
                <p className="text-base p-2 border-b hover:border-black text-gray-400 border-gray-400">Chapter 1: Rights of Uninsured Patients</p>
            </label>
            </div>
            <section>
                <h1>
                    Introduction
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel rhoncus nunc, et viverra urna. Integer finibus porttitor nulla, quis ultricies elit finibus tincidunt. Vestibulum ut turpis nisl. Aliquam at nibh quis magna luctus tincidunt condimentum non urna. Praesent eget luctus mauris, quis tristique magna. Cras eu accumsan mauris. Vestibulum et feugiat velit. Ut semper condimentum lorem, id ultrices nisl pulvinar sit amet. Sed elementum mattis pretium. Suspendisse nec sapien nec nunc aliquam tincidunt ut eget turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec cursus, justo vitae vestibulum sagittis, eros ipsum consequat ipsum, tempor pretium metus sem non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra finibus dui et euismod. Curabitur mollis nisl eu blandit porttitor. Aenean porta condimentum euismod. Maecenas vehicula leo id tortor imperdiet, at eleifend augue volutpat. Quisque tincidunt feugiat convallis. Cras facilisis enim at tortor pharetra lacinia. Aliquam aliquet nunc a urna commodo, vitae pretium est ullamcorper. Phasellus vulputate felis ut sapien pharetra, sed pharetra ex posuere. Nunc semper lorem at nisl scelerisque bibendum. Praesent id mauris ut dui efficitur tristique. Etiam luctus lectus nec bibendum luctus.
                </p>
            </section>
        </div>
    );
}