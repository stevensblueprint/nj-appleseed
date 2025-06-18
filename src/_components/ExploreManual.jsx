export default function ExploreSection() {
    return (
      <section className="bg-background-grey py-12 md:py-24">
        <div className="px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green mb-12">
            EXPLORE OUR SITE
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <img 
                src="/assets/book.png" 
                alt="Manual Books"
                className="w-full max-w-md h-auto mb-8"
              />
              
              <div className="flex items-center gap-6">
                <h3 className="text-5xl font-bold text-primary">
                  READ THE<br />MANUAL
                </h3>
                
                <svg className="w-20 h-20" viewBox="0 0 64 64" fill="none">
                  <path d="M20 32L44 32M44 32L36 24M44 32L36 40" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="/faqs" className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/assets/faq.png" 
                  alt="FAQ"
                  className="w-28 h-28 mb-4 object-contain"
                />
                <button className="bg-red-700 text-white px-8 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[180px]">
                  FAQs
                </button>
                <p className="text-center mt-3 text-gray-700 text-sm">
                  Get answers to Frequently Asked Questions
                </p>
              </a>
              
              <a href="/best-practices" className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/assets/best.png" 
                  alt="Best Practices"
                  className="w-28 h-28 mb-4 object-contain"
                />
                <button className="bg-red-700 text-white px-8 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[180px]">
                  BEST PRACTICES
                </button>
                <p className="text-center mt-3 text-gray-700 text-sm">
                  Follow these best Practices
                </p>
              </a>
          
              <a href="/resources" className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/assets/tools.png" 
                  alt="Resources & Tools"
                  className="w-28 h-28 mb-4 object-contain"
                />
                <button className="bg-red-700 text-white px-8 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[180px]">
                  RESOURCES & TOOLS
                </button>
                <p className="text-center mt-3 text-gray-700 text-sm">
                  Legal services, websites, and additional support
                </p>
              </a>
              
              <a href="/videos" className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow">
                <img 
                  src="/assets/videos.png" 
                  alt="Videos"
                  className="w-28 h-28 mb-4 object-contain"
                />
                <button className="bg-red-700 text-white px-8 py-2.5 rounded font-bold text-base hover:bg-red-800 transition-colors w-full max-w-[180px]">
                  VIDEOS
                </button>
                <p className="text-center mt-3 text-gray-700 text-sm">
                  Helpful videos on handling medical debt
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}