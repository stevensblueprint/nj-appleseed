export default function Practice({ number, content, icon }) {
  return (
    <div className="items-center sm:flex mx-8 mb-6 p-4 sm:mx-16 sm:mb-8 sm:p-8 bg-background-grey rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/50 hover:scale-[1.02] cursor-pointer group">
      <div className="flex items-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
        <h1 className="text-5xl sm:text-6xl text-dark-green font-bold mr-4 group-hover:text-primary transition-colors duration-300">
          {number < 10 ? `0${number}` : number}
        </h1>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <img
            src={icon}
            alt={`Practice ${number} icon`}
            className="w-6 h-6 sm:w-8 sm:h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
            }}
          />
        </div>
      </div>

      <p className="text-lg sm:text-xl font-semibold leading-relaxed text-text-color group-hover:text-gray-800 transition-colors duration-300">
        {content}
      </p>
    </div>
  );
}
