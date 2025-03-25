export default function OurMission() {
  return (
    <section className="flex flex-col md:flex-row px-6 py-12 max-w-6xl mx-auto gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-light text-[#8A9A5B] mb-6">Our Mission</h1>
        
        <article className="text-gray-800 mb-8">
          Introduction to the purpose and content of the website. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed vulputate nisi ut bibendum egestas.
          Suspendisse neque elit, aliquam et interdum at, luctus in neque. Quisque id elit
          sed ante pretium consequat. Donec eget felis turpis. Vestibulum ipsum libero,
          placerat in dictum sed, aliquam a metus. Aliquam vitae scelerisque nibh. Quisque
          sit amet luctus ligula
        </article>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <a href="/nja" className="bg-red-800 text-white py-4 rounded text-center hover:bg-red-900 transition-colors">
            NJA
          </a>
          <a href="/njca" className="bg-red-800 text-white py-4 rounded text-center hover:bg-red-900 transition-colors">
            NJCA
          </a>
        </div>
        
        <a href="/healthcare-coalition" className="bg-red-800 text-white py-4 rounded w-full block text-center hover:bg-red-900 transition-colors">
          NJ for Healthcare Coalition
        </a>
      </div>
      
      <div className="flex-1 bg-gray-200 flex items-center justify-center min-h-64">
        <img 
          src="/assets/placeholder.png" 
          alt="mission placeholder" 
          className="w-3/4 h-auto object-contain"
        />
      </div>
    </section>
  );
}