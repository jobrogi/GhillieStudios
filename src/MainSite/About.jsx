import React from "react";

const About = () => (
  <section
    id="about"
    className="w-full bg-panel-light text-text-invert py-28 px-6 scroll-mt-24"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-text-invert">
        Who We Are
      </h2>

      <div className="h-1 w-1/2 mx-auto bg-bg-100 rounded-full mb-6"></div>

      <p className="text-lg md:text-xl leading-relaxed text-neutral-700">
        Ghillie Studios is a small, independent team building games — and the
        powerful systems behind them. Every tool we release comes straight from
        our own development workflow: battle-tested, production-ready, and
        created with intention.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-700">
        If we build something that solves a real problem or speeds up
        development, we don’t keep it to ourselves. We refine it, polish it, and
        share it with the community — because great tools should help more than
        one project.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-700">
        Whether you’re working solo, with a team, or shipping your first game,
        we design our plugins and systems to get out of your way — and help you
        build faster, smarter, and more creatively.
      </p>

      <p className="mt-10 text-sm italic text-neutral-500">
        “We ship what we use — and only what we’d use again.”
      </p>
    </div>
  </section>
);

export default About;
