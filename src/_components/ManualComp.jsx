export default function ManualComp({manual}) {
    return (
        <section className="px-6 py-12 max-w-6xl mx-auto">
            {/* Include all the input values here */}
            {manual.map(( chapter ) => (
                <input 
                id={chapter.id} 
                type="radio" name="manualtabs" 
                title={`${chapter.id}-tab`} 
                className={`hidden peer/${chapter.id}`} />
            ))}

            {/* Div holding all the labels */}
            <div className="flex flex-row items-end overflow-scroll">
            {manual.map(( chapter ) => (
            <label htmlFor={chapter.id} className="cursor-pointer pb-1">
                <p className={`text-nowrap text-base p-2 border-b-2 hover:border-black hover:text-black peer-checked/${chapter.id}:text-black text-gray-400 border-gray-400`}>{chapter.heading}</p>
            </label>
            ))}
            </div>

            {/* Every piece of the manual */}
            {manual.map(( chapter ) => (
                <section className={`peer-checked/${chapter.id}:py-6 overflow-hidden max-h-0 peer-checked/${chapter.id}:max-h-none`}>
                    <h1 className="text-4xl text-semibold text-green py-6">{chapter.heading}</h1>
                    <p className="text-lg"> {chapter.text}</p>
                </section>
            ))}
        </section>
    );
}