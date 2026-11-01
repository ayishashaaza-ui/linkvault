
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <h1 className="text-2xl font-bold text-violet-400">
          LinkVault.
        </h1>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="hover:text-violet-400">Home</a>
          <a href="#features" className="hover:text-violet-400">Features</a>
          <a href="#about" className="hover:text-violet-400">About</a>
        </div>

        <div className="flex gap-3">
          <a href="/login" className="rounded-lg px-4 py-2 hover:text-violet-400">
            Login
          </a>
          <a href="/register" className="rounded-lg bg-violet-600 px-5 py-2 hover:bg-violet-700">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="px-8 py-24 text-center md:px-16">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-violet-400">
          Your personal knowledge space
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Save Everything.
          <span className="block text-violet-400">
            Find Anything.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
          Keep your favourite links, articles and videos in one
          organized space. Save useful content and find it whenever
          you need it.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/register" className="rounded-lg bg-violet-600 px-7 py-3 font-semibold hover:bg-violet-700">
            Start Organizing →
          </a>
          <a href="#features" className="rounded-lg border border-slate-700 px-7 py-3 hover:bg-slate-900">
            Explore Features
          </a>
        </div>

        {/* Preview */}
        <div className="mx-auto mt-20 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900 p-5 text-left shadow-2xl">
          <div className="mb-5 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-400"></span>
          </div>

          <div className="rounded-xl bg-slate-800 p-6">
            <p className="text-sm text-slate-400">Your Library</p>
            <h3 className="mt-2 text-2xl font-semibold">Saved Resources</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-slate-700 p-4">
                <p className="text-violet-300">Article</p>
                <p className="mt-2 font-semibold">Learning Resources</p>
              </div>
              <div className="rounded-lg bg-slate-700 p-4">
                <p className="text-violet-300">Video</p>
                <p className="mt-2 font-semibold">Useful Tutorials</p>
              </div>
              <div className="rounded-lg bg-slate-700 p-4">
                <p className="text-violet-300">Website</p>
                <p className="mt-2 font-semibold">Developer Tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-900 px-8 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            Everything in One Place
          </h2>
          <p className="mt-4 text-center text-slate-400">
            Make managing your saved resources easier.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["🔖", "Save Links", "Keep useful links together."],
              ["🏷️", "Organize", "Group resources using tags."],
              ["🔍", "Search Easily", "Find saved content quickly."],
              ["✨", "Quick Summaries", "Understand content faster."]
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-xl border border-slate-700 bg-slate-950 p-6">
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold">Your Knowledge, Organized.</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
          LinkVault helps students, researchers and professionals
          manage useful online resources without losing track of them.
        </p>
        <a href="/register" className="mt-8 inline-block rounded-lg bg-violet-600 px-7 py-3 font-semibold hover:bg-violet-700">
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-7 text-center text-sm text-slate-500">
        © 2026 LinkVault. Your personal knowledge space.
      </footer>
    </main>
  );
}
