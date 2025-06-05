"use client";

import {motion} from "framer-motion";
import React  from "react";
import { useState } from "react";
import {BsArrowUpRight,BsGithub} from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

import WorkSliderButtons from "@/components/WorkSliderButtons";


const projects =[
  {
    num : "01",
    category : "Frontend",
    titile : "Portfolio",
    describtion : 
      "I have created a personal portfolio website using Next.js, React.js, and Tailwind CSS. The project showcases my web development skills, including responsive design and dynamic content rendering. By leveraging Next.js for server-side rendering and React.js for building interactive components, I’ve created a seamless and visually appealing user experience. Tailwind CSS has helped me efficiently style the pages with a modern, clean design.",
    stack : [{name : "React JS"},{name : "Tailwind CSS"},{name: "NextJS"}],
    image : "/assets/work/portfolio.png",
    live : "https://portfolio-nextjs-virid-two.vercel.app/",
    github : "https://github.com/Nithurzan/Portfolio--Nextjs",
  },
  {
    num : "02",
    category : "Frontend",
    titile : "Ecommerce website",
    describtion : 
      "I have developed an eCommerce frontend using React.js and Tailwind CSS, focusing on creating a seamless and user-friendly shopping experience. The project includes features such as product listings, filtering, sorting, and a responsive design optimized for various screen sizes. React.js was used to build dynamic components for smooth interactions, while Tailwind CSS provided a utility-first approach to styling, ensuring a clean and modern look. ",
    stack : [{name : "ReactJS"},{name : "Tailwind CSS"}],
    image : "/assets/work/ecommerce.png",
    live : "https://ecommerce-eight-gilt.vercel.app/",
    github : "https://github.com/Nithurzan/ecommerce-",
  },
  {
    num : "03",
    category : "Frontend",
    titile : "To-Do list",
    describtion : 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut molestiae, fuga a ratione odit ullam maiores esse, ",
    stack : [{name : "ReactJS"},{name : "Tailwind CSS"}],
    image : "/assets/work/todolist.png",
    live : "https://to-do-list-pi-beige-21.vercel.app/",
    github : "https://github.com/Nithurzan/To-do-list",
  },
  {
    num : "04",
    category : "Fullstack",
    titile : "Nutrio - ecommerce",
    describtion : 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut molestiae, fuga a ratione odit ullam maiores esse, ",
    stack : [{name : "ReactJS"},{name : "Tailwind CSS"},{name : "MongoDB"},{name : "ExpresJS"},{name : "NodeJS"}],
    image : "/assets/work/nutrio.png",
    live : "https://nutrio-amber.vercel.app/",
    github : "https://github.com/Nithurzan/Nutrio.git",
  },
  {
    num : "05",
    category : "Fullstack",
    titile : "Expense Tracker",
    describtion : 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut molestiae, fuga a ratione odit ullam maiores esse, ",
    stack : [{name : "NextJS"},{name : "Tailwind CSS"},{name : "MongoDB"},{name : "FastAPI"}],
    image : "/assets/work/expense-tracker.png",
    live : ":#",
    github : "https://github.com/Nithurzan/expense-tracker",
  },
];

const Work = () => {
  const [project , setProject] = useState(projects[0]);
  const handleSlideChange = (Swiper) => {
    //get current slide index
    const currentIndex = Swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial ={{opacity:0}}
      animate = {{
        opacity : 1,
        transition : {delay : 2.4, duration : 0.4, ease : "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* {outline num} */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* {project category} */}
              <h2 className="text-[42px] font-bold leading-none text-white group:hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* {project describtion} */}
              <p className="text-white/60">
                {project.describtion}
              </p>
              {/* {stack} */}
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return(
                    <li 
                      key={index}
                      className="text-xl text-accent"
                    >
                      {item.name}
                      {/* {remove the last comma} */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* {border} */}
              <div className="border border-white/20"></div>
              {/* {button} */}
              <div className="flex items-center gap-4">
                {/* {Live project button} */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-white/20 rounded-full flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* {github} */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-white/20 rounded-full flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>


          {/* {} */}
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* {overlay} */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* {image} */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} 
                          fill 
                          className="object-cover" 
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* {slider button} */}
             <WorkSliderButtons  
               containerStyles="flex gab-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
               btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
             />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>

  );
}

export default Work
