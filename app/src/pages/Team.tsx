import { useState } from 'react';
import { Link } from 'react-router-dom';

interface StudentProps {
  name: string;
  role: string;
  school?: string;
}

interface MentorProps {
  name: string;
  role: string;
  bio: string;
  links?: { label: string; url: string; type: 'linkedin' | 'github' | 'video' | 'interview' }[];
}

const StudentCard = ({ name, role, school }: StudentProps) => {
  return (
    <div className="w-full bg-[#131214] border border-zinc-800/60 p-5 md:p-6 rounded-sm flex flex-col justify-center items-center text-center">
      <h3 className="text-xl font-black uppercase tracking-tight text-white leading-none">
        {name}
      </h3>
      <p className="text-[#fcc307] text-xs font-mono font-bold uppercase tracking-wider mt-2">
        {role}
      </p>
      {school && (
        <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wide mt-1.5">
          {school}
        </span>
      )}
    </div>
  );
};

const MentorCard = ({ name, role, bio, links }: MentorProps) => {
  const lowName = name.toLowerCase();
  let imagePath = `/mentors/${lowName.replace(/\s+/g, '-')}.jpg`;

  if (lowName.includes('slanec')) {
    imagePath = '/mentors/slanec.png';
  } else if (lowName.includes('paterson')) {
    imagePath = '/mentors/Paterson1.jpg';
  } else if (lowName.includes('lastowski')) {
    imagePath = '/mentors/Marty.png';
  } else if (lowName.includes('warren') || lowName.includes('lin')) {
    imagePath = '/mentors/Ren.webp'; // <-- Added override for Warren
  } else if (lowName.includes('rohan') || lowName.includes('gawde')) {
    imagePath = '/mentors/Rohan.jpg'; // <-- Added override for Rohan
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#131214] border border-zinc-800/60 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-6 text-left">
      <div className="relative flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#fcc307] bg-zinc-800">
          <img 
            src={imagePath} 
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder-avatar.jpg";
            }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none">
          {name}
        </h3>
        <p className="text-[#fcc307] text-xs font-mono font-bold uppercase tracking-wider mt-2 mb-3">
          {role}
        </p>
        <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed w-full max-w-none">
          {bio}
        </p>

        {links && links.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-4 justify-center md:justify-start w-full border-t border-zinc-800/80 pt-4">
            <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider">Resources:</span>
            {links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-[#fcc307] font-mono text-xs font-bold transition-colors uppercase bg-zinc-900/50 hover:bg-zinc-900 px-3 py-1.5 border border-zinc-800 rounded-sm"
              >
                {link.type === 'linkedin' && (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                )}
                {link.type === 'github' && (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                )}
                {link.type === 'video' && (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                )}
                {link.type === 'interview' && (
                  <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const [openArchive, setOpenArchive] = useState<string | null>(null);

  const currentStudents: StudentProps[] = [
    { name: "Isaac Schmidt", role: "Team Captain", school: "SRVHS '27" },
    { name: "Gray Garson", role: "Team Captain", school: "SRVHS '28" },
    { name: "Grayson Manz", role: "Fabrication Officer", school: "SRVHS '27" },
    { name: "Jayesh Rungta", role: "Design Officer", school: "CHS '29" },
    { name: "Wendy Zhao", role: "Programming Officer", school: "SRVHS '29" },
    { name: "Briar Chang", role: "Outreach Officer", school: "SRVHS '27" }
  ];

  const historicalData: Record<string, StudentProps[]> = {
    "2025-2026": [
      { name: "Rohan Gawde", role: "FRC Team Captain" },
      { name: "Briar Chang", role: "FRC Team Captain" },
      { name: "Caeden Cooley", role: "Senior Mechanical Officer" },
      { name: "Miles Malhevy", role: "Junior Mechanical Officer" },
      { name: "Anthony Le", role: "Senior Controls Officer" },
      { name: "Gray Garson", role: "Junior Controls Officer" },
      { name: "Majd Bohsali", role: "Autonomous Officer" },
      { name: "Ren Lin", role: "Vision Officer" },
      { name: "Reed Wong", role: "Electrical Lead" },
      { name: "Isaac Schmidt", role: "Mechanical Lead" },
      { name: "Jayesh Rungta", role: "Mechanical Lead" },
      { name: "Taylor Schannon", role: "Mechanical Lead" }
    ],
    "2024-2025": [
      { name: "Majd Bohsali", role: "FRC Team Captain" },
      { name: "Nicholas Luo", role: "Controls Officer" },
      { name: "Caeden Cooley", role: "Mechanical Officer" },
      { name: "Ren Lin", role: "Business Officer" },
      { name: "Briar Chang", role: "Programming Lead" },
      { name: "Gavin Ostler", role: "Programming Lead" },
      { name: "Reed Wong", role: "Electrical Lead" },
      { name: "Nick Carlson", role: "Fabrication Lead" },
      { name: "Max Gardiner", role: "Scouting & Strategy Lead" },
      { name: "Nora Paradiso", role: "Media Manager" },
      { name: "Saad Talib", role: "Media Manager" }
    ],
    "2023-2024": [
      { name: "Matthew Fletcher", role: "FRC Team Captain" },
      { name: "Ananth Venkatesh", role: "Controls Officer" },
      { name: "Finn Hugel", role: "Mechanical Officer" },
      { name: "Ramaya Gautaum", role: "Business Officer" },
      { name: "Majd Bohsali", role: "Programming Lead" },
      { name: "Rohan Gawde", role: "CAD & Design Lead" },
      { name: "Linnea Roe", role: "Fabrication Lead" },
      { name: "Joshua Choi", role: "Electrical Lead" },
      { name: "Dipti Gupta", role: "Finance Manager" },
      { name: "Dyson Gregory", role: "Media Manager" }
    ],
    "2022-2023": [
      { name: "Elliot Danko", role: "FRC Team Captain" },
      { name: "Laird Wheeler", role: "Controls Officer" },
      { name: "Saim Hasan", role: "Mechanical Officer" },
      { name: "Ananth Venkatesh", role: "Programming Lead" },
      { name: "Matthew Fletcher", role: "Mechanical Lead" },
      { name: "Ben Liebmann", role: "Electrical Lead" },
      { name: "Vlad Korneev", role: "Business Manager" }
    ],
    "2021-2022": [
      { name: "Spencer Level", role: "FRC Team Captain" },
      { name: "Laird Wheeler", role: "Controls Officer" },
      { name: "Elliot Danko", role: "Mechanical Officer" }
    ],
    "2020-2021": [
      { name: "Vikram Gopalan", role: "FRC Team Captain" },
      { name: "Ameesh Daryani", role: "FRC Team Captain" }
    ],
    "2019-2020": [
      { name: "Kanishk Gupta", role: "FRC Team Captain" },
      { name: "Radhika Gawde", role: "FRC Team Captain" },
      { name: "Karim El-Refai", role: "Controls Officer" },
      { name: "Carl Roe", role: "Mechanical Officer" },
      { name: "Spencer Level", role: "Programming Lead" },
      { name: "Danny Bray", role: "Subsystem Lead" },
      { name: "Ameesh Daryani", role: "Subsystem Lead" },
      { name: "Tessa Dempster", role: "Finance Manager" },
      { name: "Ashley Modena", role: "Outreach/Awards Manager" }
    ]
  };

  const mentorsData: MentorProps[] = [
    {
      name: "Wyatt Slanec",
      role: "SRVHS Teacher & Head Coach",
      bio: "Wyatt Slanec is the Auto & Tech teacher at SRVHS and Head Coach of Team 1280. Since joining the team in 2019, he has helped shape team culture, emphasize safety, and guide student leadership development."
    },
    {
      name: "Tim Paterson",
      role: "Head Mentor",
      bio: "Tim Paterson is a Head Mentor for Team 1280 with over 40 years of experience as a computer engineer. Since 2020, he has supported students with CAD, fabrication, and technical mentorship, and brings additional expertise from building combat robots for competitions such as BattleBots and RoboGames.",
      links: [
        { label: "Scoble Post", url: "https://x.com/Scobleizer/status/1875486795720487418", type: "interview" },
        { label: "VCF History Lecture", url: "https://www.youtube.com/watch?v=R2Qh0O3Dt10", type: "video" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/dosdaddy/", type: "linkedin" },
        { label: "GitHub", url: "https://github.com/TimPaterson", type: "github" },
        { label: "Combat Robots Channel", url: "https://www.youtube.com/@hexadecimatorheavyweightco3073", type: "video" }
      ]
    },
    {
      name: "Marty Lastowski",
      role: "Team Mentor",
      bio: "Marty Lastowski is a Team Mentor with a background in mechanical engineering and over 40 years of industry experience. He previously worked on medical device robotics at Intuitive Surgical and has long-term mentoring experience with FRC Team 971, contributing deep expertise in robotics design and engineering practices."
    },
    {
      name: "Rohan Gawde",
      role: "Alumni Mentor",
      bio: "Rohan Gawde served as Team Captain for the 2025–2026 season, leading a major transformation of the team's operations by setting high expectations and implementing systems for finance, robot fabrication, and member development. He remains involved as an alumni mentor while studying Mechanical Engineering at Rochester Institute of Technology (RIT) and competing with RIT Racing."
    },
    {
      name: "Warren Lin",
      role: "Alumni Mentor",
      bio: "Warren Lin served as Vision Officer for Team 1280 during the 2025–2026 season. He pioneered innovative vision processing solutions, including modifying a Mac mini for robotics applications, and continues to support the team as an alumni mentor."
    }
  ];

  const toggleArchive = (year: string) => {
    setOpenArchive(openArchive === year ? null : year);
  };

  return (
    <>
      <link rel="canonical" href="https://www.team1280.com/team" />
      <title>Meet the Team | Team 1280</title>

      {/* 1. Header Hero Section (Updated Background Image to /Team.jpg) */}
      <section className="relative h-[45vh] lg:h-[55vh] w-full overflow-hidden bg-[#1f1e23] flex flex-col items-center justify-center text-center px-4 md:px-12 border-b border-zinc-800/80">
        <img 
          src="/Team.jpg" 
          alt="Team 1280 Group Photo" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-[0.35]"
        />

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

        <div className="relative z-20 max-w-4xl flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-[#fcc307] text-xs md:text-sm font-bold uppercase tracking-widest font-mono">
            <span>The Minds Behind the Robots</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight">
            MEET THE <span className="text-[#fcc307]">TEAM</span>
          </h1>

          <div className="w-16 h-[2px] bg-[#fcc307] my-2"></div>

          <p className="text-zinc-300 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Meet the dedicated students, mentors, and faculty advisors FRC Team 1280 who push the boundaries of engineering, programming, and community leadership every single day.
          </p>
        </div>
      </section>

      {/* 2. Student Leadership Section */}
      <section className="bg-[#0f0e11] pt-16 md:pt-24 pb-4 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#fcc307]"></span>
              2026-27 Officers
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              STUDENT <span className="text-[#fcc307]">LEADERSHIP</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#fcc307] mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
            {currentStudents.map((student, index) => (
              <StudentCard key={index} {...student} />
            ))}
          </div>

          <div className="max-w-5xl mx-auto border-t border-zinc-800/60 pt-6">
            {Object.keys(historicalData).map((year) => (
              <div key={year} className="mb-3">
                <button
                  onClick={() => toggleArchive(year)}
                  className="w-full flex items-center justify-between bg-[#131214] border border-zinc-800/60 px-5 py-4 rounded-sm text-left group transition-colors hover:border-zinc-700"
                >
                  <span className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400 group-hover:text-[#fcc307] transition-colors">
                    View {year} Student Leadership Archive
                  </span>
                  <svg 
                    className={`w-4 h-4 text-zinc-500 group-hover:text-[#fcc307] transition-transform duration-200 ${openArchive === year ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openArchive === year && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 p-4 bg-zinc-900/20 border border-dashed border-zinc-800 rounded-sm">
                    {historicalData[year].map((student, index) => (
                      <StudentCard key={index} {...student} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Coaches & Mentors Section */}
      <section className="bg-[#0f0e11] pt-8 pb-16 md:pb-24 px-4 md:px-12 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest font-mono mb-3">
              <span className="w-6 h-[2px] bg-[#fcc307]"></span>
              Leadership
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              COACHES & <span className="text-[#fcc307]">MENTORS</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#fcc307] mt-4"></div>
          </div>

          <div className="flex flex-col gap-2">
            {mentorsData.map((mentor, index) => (
              <MentorCard key={index} {...mentor} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Support and Mentorship Call-to-Action */}
      <section className="bg-[#fcc307] py-16 px-4 md:px-12 text-center flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#1f1e23]">
            Want to Mentor?
          </h3>
          <p className="text-[#1f1e23]/90 text-sm sm:text-base font-bold tracking-wide max-w-xl">
            Our team thrives under the guidance of industry professionals, parents, and alumni. Support the next generation of innovators.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#1f1e23] text-[#fcc307] font-black uppercase text-xs sm:text-sm tracking-widest rounded-sm hover:bg-black transition-all shadow-md"
            >
              Contact Coaching Staff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;