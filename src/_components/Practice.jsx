export default function Practice({ number, content}) {
  return (
    <div className="items-center sm:flex mx-8 mb-8 p-4 sm:mx-16 sm:mb-16 sm:p-12 bg-background-grey rounded-3xl">
      <h1 className={`text-6xl text-dark-green font-bold`}>
        {number < 10 ? `0${number}` : number}
      </h1> 
      <p className="text-lg py-2 sm:py-0 sm:px-4">{content}</p>
    </div>
  )
}