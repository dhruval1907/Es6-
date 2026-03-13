import { Link } from "react-router-dom";

export default function About() {
  const team = [
    { name: "Priya Nair", role: "Travel Editor", initial: "P" },
    { name: "James Okonkwo", role: "Productivity Writer", initial: "J" },
    { name: "Sofia Lindqvist", role: "Photography Lead", initial: "S" },
    { name: "Marcus Chen", role: "Tech & Productivity", initial: "M" },
  ];

  return (
    <main className="w-full min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <div className="w-full h-[200px] bg-stone-900 flex flex-col items-center justify-center">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-2">Our Story</p>
        <h1 className="text-white font-serif text-4xl font-bold">About The Ink Post</h1>
      </div>

      {/* Mission */}
      <div className="w-full max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 text-center">
          Why We Write
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed text-center mb-4">
          The Ink Post was founded on a simple belief: that long-form, thoughtful writing still matters in a world of tweets and soundbites.
        </p>
        <p className="text-stone-500 text-base leading-relaxed text-center">
          We cover the things that enrich everyday life — how you travel, how you focus, what you eat, how you learn. Each piece is researched, considered, and written for readers who actually want to think.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-stone-200" />

      {/* Team */}
      <div className="w-full max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif font-bold text-stone-900 text-center mb-10">
          Meet the Writers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-3 p-6 border border-stone-200 bg-white hover:border-amber-400 transition-colors duration-200">
              <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center text-white font-bold text-xl font-serif">
                {member.initial}
              </div>
              <div className="text-center">
                <p className="font-semibold text-stone-800 text-sm">{member.name}</p>
                <p className="text-xs text-stone-400 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full h-[200px] bg-amber-50 border-y border-amber-100 flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl font-serif font-bold text-stone-800">
          Have something to say?
        </h3>
        <p className="text-stone-500 text-sm">We're always looking for new voices.</p>
        <Link
          to="/write"
          className="h-11 px-8 bg-stone-800 text-white text-sm font-semibold rounded-sm flex items-center hover:bg-amber-600 transition-colors no-underline"
        >
          Write for Us →
        </Link>
      </div>
    </main>
  );
}
