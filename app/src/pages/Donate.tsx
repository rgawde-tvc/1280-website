import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <>
      <link rel="canonical" href="https://www.team1280.com/donate" />
      <title>Donate | Team 1280</title>

      {/* 1. Header Hero Section */}
      <section className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden bg-[#1f1e23] flex flex-col items-center justify-center text-center px-4 md:px-12 border-b border-zinc-800/80">
        
        {/* Background Image Layer */}
        <img 
          src="/Donate2.png" 
          alt="Team 1280 Sponsorship" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.35]"
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
            <span>Support The Team</span>
          </div>

          {/* Large Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            EMPOWER THE <span className="text-[#fcc307]">FUTURE</span>
          </h1>

          {/* Thin Centered Yellow Divider */}
          <div className="w-16 h-[2px] bg-[#fcc307] my-2"></div>

          {/* Contextualized Subtext Description */}
          <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Team 1280 is a non-profit organization. Your contribution — monetary or in-kind — is tax deductible and goes directly toward building our next competition robot and supporting STEM development.
          </p>
        </div>
      </section>

      {/* 2. Sponsor Options Grid Section */}
      <section className="bg-[#151417] py-16 md:py-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
          
          {/* Card 1: Corporate Sponsorship */}
          <div className="bg-[#1f1e23] border border-zinc-800/60 p-8 md:p-12 flex flex-col justify-between items-start text-left rounded-sm transition-all duration-300 hover:border-zinc-700">
            <div>
              <div className="w-10 h-10 bg-zinc-800/50 flex items-center justify-center rounded-sm text-[#fcc307] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                CORPORATE <span className="text-[#fcc307]">SPONSORSHIP</span>
              </h2>

              <div className="w-10 h-[2px] bg-[#fcc307] mb-6"></div>

              <p className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
                We accept monetary and equipment donations from companies of all sizes. In return, sponsors receive branding on the robot, team apparel, access to our talent pipeline, and recognition across all our media channels. As a non-profit organization, we provide tax credit documentation.
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-3 mt-auto">
              <a 
                href="/Team1280_Sponsorship_Deck.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 bg-[#fcc307] text-[#1f1e23] font-black uppercase text-xs tracking-widest rounded-sm hover:bg-yellow-500 transition-all shadow-md flex items-center justify-center gap-2 font-mono"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Sponsor Packet
              </a>
              <Link 
                to="/contact"
                className="w-full sm:w-auto text-center px-6 py-3 bg-transparent border border-zinc-700 text-white font-black uppercase text-xs tracking-widest rounded-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 font-mono"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Card 2: Friends & Family */}
          <div className="bg-[#1f1e23] border border-zinc-800/60 p-8 md:p-12 flex flex-col justify-between items-start text-left rounded-sm transition-all duration-300 hover:border-zinc-700">
            <div>
              <div className="w-10 h-10 bg-zinc-800/50 flex items-center justify-center rounded-sm text-[#fcc307] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                FRIENDS & <span className="text-[#fcc307]">FAMILY</span>
              </h2>

              <div className="w-10 h-[2px] bg-[#fcc307] mb-6"></div>

              <p className="text-zinc-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
                Alumni, family members, and individual supporters are a huge part of what makes Team 1280 possible. If you would like to support the team personally, reach out to us directly and we will walk you through the options.
              </p>
            </div>

            <div className="w-full flex mt-auto">
              <a 
                href="https://sanramon.myschoolcentral.com/(S(aeaqvelf0oprmjwfetdxbhxu))/Index.aspx#/1222473/product/35244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-6 py-3 bg-transparent border border-[#fcc307] text-[#fcc307] font-black uppercase text-xs tracking-widest rounded-sm hover:bg-[#fcc307]/10 transition-all flex items-center justify-center gap-2 font-mono"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Donate Now
              </a>
            </div>
          </div>

        </div>

        {/* Allocation Grid Section */}
        <div className="max-w-6xl mx-auto text-center mt-12 mb-8">
          <div className="flex flex-col items-center gap-1 mb-10">
            <div className="flex items-center gap-2 text-[#fcc307] text-xs font-bold uppercase tracking-widest font-mono">
              <span className="w-4 h-[1px] bg-[#fcc307]"></span>
              <span>What Your Support Funds</span>
              <span className="w-4 h-[1px] bg-[#fcc307]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              WHERE THE MONEY <span className="text-[#fcc307]">GOES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-zinc-800/60 bg-[#1f1e23]/30 rounded-sm divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/60">
            {/* Parts */}
            <div className="p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-[#1f1e23]/60">
              <h3 className="text-[#fcc307] text-2xl font-black uppercase tracking-wide mb-2">Parts</h3>
              <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium leading-relaxed max-w-[200px]">
                Raw materials, fasteners, composites, bearings
              </p>
            </div>
            {/* Travel */}
            <div className="p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-[#1f1e23]/60">
              <h3 className="text-[#fcc307] text-2xl font-black uppercase tracking-wide mb-2">Travel</h3>
              <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium leading-relaxed max-w-[200px]">
                Transportation to regional events and competitions
              </p>
            </div>
            {/* Software */}
            <div className="p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-[#1f1e23]/60">
              <h3 className="text-[#fcc307] text-2xl font-black uppercase tracking-wide mb-2">Software</h3>
              <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium leading-relaxed max-w-[200px]">
                CAD, simulation, and analysis tool licenses
              </p>
            </div>
            {/* Equipment */}
            <div className="p-8 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-[#1f1e23]/60">
              <h3 className="text-[#fcc307] text-2xl font-black uppercase tracking-wide mb-2">Equipment</h3>
              <p className="text-zinc-400 text-xs tracking-wider uppercase font-medium leading-relaxed max-w-[200px]">
                Machinery tooling, diagnostic gear, hardware updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Call To Action Banner Section */}
      <section className="bg-[#fcc307] py-16 md:py-20 px-4 md:px-12 text-center flex flex-col items-center justify-center text-[#1f1e23]">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Ready to Sponsor?
          </h3>
          <p className="text-zinc-900 text-sm sm:text-base font-bold max-w-xl leading-relaxed">
            Download our sponsorship packet or reach out directly to coordinate your contribution.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
            {/* Sponsor Packet Button */}
            <a
              href="/Team1280_Sponsorship_Deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#1f1e23] text-white font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md flex items-center justify-center gap-2 font-mono"
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
              Sponsor Packet PDF
            </a>

            {/* Email Us Button */}
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-zinc-800/60 text-[#1f1e23] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-[#1f1e23]/10 transition-all flex items-center justify-center gap-2 font-mono"
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
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;