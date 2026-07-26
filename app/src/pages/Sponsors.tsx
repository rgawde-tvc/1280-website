import { Link } from 'react-router-dom';

const SponsorUs = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com/sponsor" />
      <title>Sponsor Us | Team 1280</title>

      {/* 1. Sponsor Header Hero Section */}
      <section className="relative h-[50vh] lg:h-[60vh] w-full overflow-hidden bg-[#1f1e23] flex flex-col items-center justify-center text-center px-4 md:px-12 border-b border-zinc-800/80">
        
        {/* Background Image Layer */}
        <img 
          src="/Sponsors.jpg" 
          alt="Team 1280 Team Support" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.25]"
        />

        {/* Blueprint Grid Overlay Pattern */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none z-10" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #fcc307 1px, transparent 1px),
              linear-gradient(to bottom, #fcc307 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Header Content Wrapper */}
        <div className="relative z-20 max-w-4xl flex flex-col items-center gap-4">
          
          {/* Section Subtitle */}
          <div className="flex items-center gap-2 text-[#fcc307] text-xs md:text-sm font-bold uppercase tracking-widest font-mono">
            <span>Our Partners</span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            OUR <span className="text-[#fcc307]">SPONSORS</span>
          </h1>

          {/* Thin Centered Yellow Divider */}
          <div className="w-16 h-[2px] bg-[#fcc307] my-2"></div>

          {/* Contextualized Subtext Description */}
          <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Team 1280 is made possible by the generous support of industry partners who share our passion for engineering excellence.
          </p>

          {/* Action Buttons Group */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            {/* Become a Sponsor Button */}
            <Link
              to="/donate" 
              className="w-full sm:w-auto px-8 py-3.5 bg-[#fcc307] text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-yellow-400 transition-all shadow-md font-mono"
            >
              Become a Sponsor
            </Link>

            {/* Sponsor Packet Button */}
            <a
              href="/Team1280_Sponsorship_Deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-500 text-white font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-white/10 hover:border-white transition-all font-mono flex items-center justify-center gap-2"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Sponsor Packet (PDF)
            </a>
          </div>

        </div>
      </section>

      {/* 2. Logo Showcase Grid */}
      <section className="bg-[#151417] py-16 md:py-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
            
            {/* Academic Boosters */}
            <a 
              href="https://srvhs.srvusd.net/Students-and-Families/Booster-Groups/Academic-Boosters/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/boosters-logo.png" 
                alt="SRVHS Academic Boosters Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

            {/* Site Council */}
            <a 
              href="https://srvhs.srvusd.net/School-Info/About/Site-Council/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/site-council-logo.png" 
                alt="SRVHS Site Council Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

            {/* PTSA */}
            <a 
              href="https://srvhs.srvusd.net/Students-and-Families/SRVHS-PTSA/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/ptsa-logo.png" 
                alt="SRVHS PTSA Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

            {/* Intuitive Foundation */}
            <a 
              href="https://www.intuitive-foundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/intuitive-logo.png" 
                alt="Intuitive Foundation Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

            {/* FRC Tees */}
            <a 
              href="https://frctees.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/frc-tees-logo.png" 
                alt="FRC Tees Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

            {/* Fabworks */}
            <a 
              href="https://www.fabworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-64 px-12 flex items-center justify-center bg-[#1f1e23] rounded-sm border border-zinc-800/60 hover:border-[#fcc307]/40 transition-all duration-300 group block"
            >
              <img 
                src="/logos/fabworks-logo.svg" 
                alt="Fabworks Logo" 
                className="max-h-40 max-w-full object-contain opacity-80 brightness-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300"
              />
            </a>

          </div>
        </div>
      </section>

      {/* 3. Bottom Call To Action Section */}
      <section className="bg-[#fcc307] py-16 md:py-20 px-4 md:px-12 flex flex-col items-center justify-center text-center text-[#1f1e23]">
        <div className="max-w-4xl flex flex-col items-center gap-3">
          
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            Fuel Our Innovation
          </h2>

          <p className="text-zinc-900 text-sm md:text-base font-semibold max-w-2xl leading-relaxed">
            All donations are tax-deductible. We are a registered 501(c)(3) organization. Our official certificate is available upon request.
          </p>

          {/* Action Row */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            
            {/* Become a Sponsor */}
            <Link
              to="/donate"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1f1e23] text-white font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md font-mono"
            >
              Become a Sponsor
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-800/60 text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-[#1f1e23]/10 transition-all font-mono flex items-center justify-center gap-2"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Contact Us
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorUs;