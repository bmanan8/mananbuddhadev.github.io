import React from "react";
import { motion } from "framer-motion";
import { MapPin, FileText, FileDown, Award, Briefcase, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import SocialBar from "@/components/SocialBar";
import ProjectItem from "@/components/ProjectItem";
import { PROFILE } from "@/data/profile";
import { ACHIEVEMENTS } from "@/data/achievements";
import { Badge } from "@/components/ui/badge";
import SocialLinks from "@/components/SocialBar";
import { SOCIAL_LINKS } from "@/data/socialLinks.js";

export default function HomePage() {
  return (
    <>
      <section className="py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{PROFILE.role}</h1>
                <h4 className="text-2xl sm:text-xl tracking-tight">{PROFILE.headshot}</h4>
                <p className="mt-3 text-slate-600 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {PROFILE.location}
                </p>
                <p className="mt-6 text-lg leading-7 text-slate-700">{PROFILE.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/resume">
                    <Button className="rounded-2xl">
                      <FileText className="mr-2 h-4 w-4" /> View full resume
                    </Button>
                  </Link>
                  <a href={PROFILE.resumePdfUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary" className="rounded-2xl">
                      <FileDown className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="mt-10">
                <SocialBar />
              </div>
            <div className="mt-10 rounded-2xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5" /> Highlights
              </div>
              {ACHIEVEMENTS.map((a) => (
                <div key={a.title} className="mb-5">
                  <p className="font-medium">{a.title}</p>
                  <p className="text-sm text-slate-600">{a.meta}</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                    {a.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-200 p-4 mb-6">
                <SocialLinks location={PROFILE.location} links={SOCIAL_LINKS} />
              </div>
               <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="h-5 w-5" /> Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Python",
                      "C#",
                      "R",
                      "Scala",
                      "AWS",
                      "Azure",
                      "SQL",
                      "NoSQL",
                      "PyTorch",
                      "TensorFlow",
                      "Spark",
                    ].map((t) => (
                      <Badge key={t} variant="secondary" className="rounded-xl">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
