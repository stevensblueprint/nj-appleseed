export default function GenericDropdown ({ contents, index }) {
    return  (
    <div className="flex flex-col justify-center items-center w-full border-b-[1px] border-black">
      <input
        type="checkbox"
        id={`accordion-item-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`accordion-item-${index}`}
        className="py-5 px-2 group cursor-pointer font-bold text-dark-green w-full flex justify-between items-center gap-4 md:gap-0"
      >
        <p className="text-xl leading-6">{contents.title}</p>
        <img
          src="/assets/vector/dropdown_arrow.svg"
          alt="Down Arrow"
          className="h-[46px] w-[29px] peer-checked:group-[]:rotate-180"
        />
      </label>
      <div className="overflow-hidden max-h-0 peer-checked:max-h-screen w-full transition-all duration-300 px-3 peer-checked:pt-2 peer-checked:pb-[20px]">
        <div className="prose prose-p:text-xl prose-p:leading-6 max-w-none">
            {contents.body}
        </div>
      </div>
    </div>
    );
}