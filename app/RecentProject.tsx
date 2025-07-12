"use client";

import React from "react";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function RecentProject() {
  return (
    <section className="py-16 px-4 md:px-8" id="projects">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Project</h2>
        <p className="text-lg text-gray-300 mb-10">
          Ini adalah salah satu proyek terbaru kami dengan efek 3D interaktif.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a2e] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.des}</p>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.iconLists.map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon}
                      alt="tech-icon"
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Lihat Proyek
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
