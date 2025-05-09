import React from "react";
import ReactMarkdown from "react-markdown";

export default function GenericDropdown({ contents, index }) {
  return (
    <div className="flex flex-col justify-center items-center w-full border-b-[1px] border-black pt-10">
      <input
        type="checkbox"
        id={`accordion-item-${index}`}
        className="hidden peer"
      />
      <label
        htmlFor={`accordion-item-${index}`}
        className="py-5 px-2 group cursor-pointer font-bold text-dark-green w-full flex justify-between items-center gap-4 md:gap-0"
      >
        <p className="text-3xl leading-8">{contents.title}</p>
        <img
          src="/assets/vector/dropdown_arrow.svg"
          alt="Down Arrow"
          className="h-[46px] w-[29px] peer-checked:group-[]:rotate-180"
        />
      </label>
      <div className="overflow-hidden max-h-0 peer-checked:max-h-screen w-full transition-all duration-300 px-3 peer-checked:pt-2 peer-checked:pb-[25px]">
        <div className="text-lg max-w-none"><ReactMarkdown>{contents.body}</ReactMarkdown></div>
      </div>
    </div>
  );
}
