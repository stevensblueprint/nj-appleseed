function getIconForPractice(number, content) {
  const lowerContent = content.toLowerCase();

  if (number === 1 && lowerContent.includes("insurance")) {
    return "/assets/vector/letter.svg";
  } else if (number === 2 && lowerContent.includes("medicaid")) {
    return "/assets/vector/hospital.svg";
  } else if (number === 3 && lowerContent.includes("federally qualified")) {
    return "/assets/vector/website.svg";
  } else if (number === 4 && lowerContent.includes("credit card")) {
    return "/assets/vector/letter.svg";
  } else if (number === 5 && lowerContent.includes("third-party")) {
    return "/assets/vector/website.svg";
  } else if (number === 6 && lowerContent.includes("emergency")) {
    return "/assets/vector/hospital.svg";
  } else if (number === 7 && lowerContent.includes("network")) {
    return "/assets/vector/website.svg";
  } else if (number === 8 && lowerContent.includes("charity care")) {
    return "/assets/vector/hospital.svg";
  } else if (number === 9 && lowerContent.includes("review the bill")) {
    return "/assets/vector/letter.svg";
  } else if (number === 10 && lowerContent.includes("copies")) {
    return "/assets/vector/letter.svg";
  } else if (number === 11 && lowerContent.includes("collection")) {
    return "/assets/vector/letter.svg";
  } else if (number === 12 && lowerContent.includes("sued")) {
    return "/assets/vector/hospital.svg";
  }
}

export default function Practice({ number, content }) {
  const iconSrc = getIconForPractice(number, content);

  return (
    <div className="items-center sm:flex mx-8 mb-8 p-6 sm:mx-16 sm:mb-16 sm:p-12 bg-background-grey rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/50 hover:scale-[1.02] cursor-pointer group">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <img
            src={iconSrc}
            alt={`Practice ${number} icon`}
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
            }}
          />
        </div>
      </div>

      <h1 className="text-6xl sm:text-7xl text-dark-green font-bold mb-4 sm:mb-0 sm:mr-6 group-hover:text-primary transition-colors duration-300 flex-shrink-0">
        {number < 10 ? `0${number}` : number}
      </h1>

      <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-text-color group-hover:text-gray-800 transition-colors duration-300">
        {content}
      </p>
    </div>
  );
}
