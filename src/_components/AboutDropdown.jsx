import ReactMarkdown from "react-markdown";

export default function GenericDropdown({ contents, index }) {
  return (
    <div className="flex flex-col justify-center items-center w-full border-b-[1px] border-black pt-8">
      <input
        type="checkbox"
        id={`accordion-item-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`accordion-item-${index}`}
        className="py-2 md:py-5 group cursor-pointer font-bold text-primary w-full flex justify-between items-center gap-4 md:gap-0"
      >
        <img
          src={contents.logo}
          alt={contents.title}
          className="h-full w-full max-w-[150px] md:max-w-[300px] object-contain"
        />
        <img
          src="/assets/vector/dropdown_arrow.svg"
          alt="Down Arrow"
          className="h-[46px] w-[29px] peer-checked:group-[]:rotate-180"
        />
      </label>
      <div className="overflow-hidden max-h-0 peer-checked:max-h-screen w-full transition-all duration-300 px-3 peer-checked:pt-2 peer-checked:pb-4">
        <div className="prose prose-p:text-xl prose-p:leading-6 max-w-none">
          <ReactMarkdown>{contents.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
