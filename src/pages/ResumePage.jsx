import React, { useEffect } from "react";
import Container from "@/components/Container";
import { RESUME } from "@/data/resumeData";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TOC() {
  const items = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "publications", label: "Publications" }
  ];
  return (
    <nav className="space-y-2">
      {items.map((i) => (
        <button
          key={i.id}
          onClick={() => scrollToId(i.id)}
          className="block w-full text-left rounded-md px-3 py-2 text-sm hover:bg-slate-100"
        >
          {i.label}
        </button>
      ))}
    </nav>
  );
}

export default function ResumePage() {
  useEffect(() => {
    const id = decodeURIComponent(location.hash.replace("#", ""));
    if (id) scrollToId(id);
  }, []);

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <TOC />
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-2 space-y-10">
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                {RESUME.experience?.map((e) => (
                  <div key={`${e.company}-${e.role}`} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex flex-wrap justify-between gap-2">
                      <div className="font-medium">{e.role} · {e.company}</div>
                      <div className="text-sm text-slate-600">{e.period}</div>
                    </div>
                    <div className="text-sm text-slate-600">{e.location}</div>
                    <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                      {e.highlights?.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {RESUME.skills?.map((s) => (
                  <span key={s} className="rounded-xl border px-3 py-1 text-sm">{s}</span>
                ))}
              </div>
            </section>

            <section id="education" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {RESUME.education?.map((ed) => (
                  <div key={`${ed.school}-${ed.degree}`} className="rounded-xl border border-slate-200 p-4">
                    <div className="font-medium">{ed.school}</div>
                    <div className="text-sm text-slate-700">{ed.degree}</div>
                    {ed.year ? <div className="text-sm text-slate-600">{ed.year}</div> : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="publications" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold mb-4">Publications</h2>
              <div className="space-y-3">
                {RESUME.publications?.map((p) => (
                  <div key={p.title} className="rounded-xl border border-slate-200 p-4">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {p.title}
                      </a>
                    ) : (
                      <div className="font-medium">{p.title}</div>
                    )}
                    {p.venue ? <div className="text-sm text-slate-700">{p.venue}</div> : null}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </Container>
    </section>
  );
}
