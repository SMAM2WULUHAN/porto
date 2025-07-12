import { projects } from '../data';
import React from 'react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-cardeffect";

const RecentProject = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold text-white">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <CardContainer key={id} className="max-w-sm">
            <CardBody
              className="p-6 rounded-3xl shadow-lg group hover:shadow-xl transition duration-200"
              style={{
                zIndex: 10, // Pastikan elemen berada di atas
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 35%",
                border: "2px solid #FFFFFF", // Border putih
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // Tambahkan efek shadow
              }}
            >
              <CardItem translateZ={30}>
                <img
                  src={img}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md"
                />
              </CardItem>
              <CardItem translateZ={20}>
                <h2 className="text-xl font-semibold text-purple mt-4">{title}</h2>
              </CardItem>
              <CardItem translateZ={10}>
                <p className="text-gray-300 mt-2">{des}</p>
              </CardItem>
              <CardItem>
                <div className="flex gap-2 justify-center mt-4">
                  {iconLists.map((icon, index) => (
                    <img key={index} src={icon} alt="icon" className="w-8 h-8" />
                  ))}
                </div>
              </CardItem>
              <CardItem>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-purple underline hover:text-white items-center"
                >
                  View Project
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
