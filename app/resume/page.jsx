"use client";
import { FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaFigma } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";


//about data

const about ={
  title:"About me",
  describtion: 
  "I am a passionate and motivated individual currently pursuing a Bachelor of Information Technology at Colombo University. With hands-on experience in web development and backend technologies like Spring Boot, I have successfully completed projects that showcase my learning and teamwork. In my free time, I enjoy reading books, which helps me stay curious and inspired. I am eager to explore new challenges and grow as a developer.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Nithurzan",
    },
    {
      fieldName: "Address",
      fieldValue: "Jaffna,Srilanka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 757575158",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Month Trainee",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Srilankan",
    },
    {
      fieldName: "Language",
      fieldValue: "Tamil, English",
    },
  ],
};

//experience data
const experience ={
  icon: "/assets/resume/cap.svg",
  title: "MyExperience",
  describtion:
    "I have completed an internship program focusing on Spring Boot development, where I gained hands-on experience in building and managing backend systems. Currently, I am working on a team project to develop a Defect Tracker application at the Samuel Gnanam IT Centre in Jaffna, enhancing my skills in collaboration and real-world software development.",
  items:[
    {
      company:"Samuel gnanam IT Center",
      position: "Trainee software developer",
      duration: "May 2024 - Aug 2024",
    },
   
  ],
};

//education data
const education ={
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  describtion:
    "I am currently pursuing a Bachelor of Information Technology at Colombo University. Through my studies, I am gaining foundational knowledge in programming, databases, and software development",
  items:[
    {
      institution:"Samuel gnanam IT Center",
      degree: "Information Technology",
      duration: "Still following",
    },
   
  ]
};

//skill data
const skill = {
  title: "My Skills",
  describtion :
    "I have a basic understanding of web development using HTML, CSS, and React. I am also learning to use Tailwind CSS for styling and creating responsive designs. As a beginner, I have already completed some frontend projects, which helped me improve my skills in building simple, user-friendly web applications.",
    skillList:[
      {
        icon : <FaHtml5/>,
        name : "Html 5",
      },
      {
        icon : <FaCss3/>,
        name : "Css 3",
      },
      {
        icon : <FaJs/>,
        name : "Javascript",
      },
      {
        icon : <FaReact/>,
        name : "React",
      },
      {
        icon : <FaNodeJs/>,
        name : "Node JS",
      },
      {
        icon : <FaFigma/>,
        name : "Figma",
      },
      {
        icon : <SiTailwindcss/>,
        name : "Tailwind css",
      },
      {
        icon : <SiNextdotjs/>,
        name : "NextJs",
      },

    ]
}


import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial= {{opacity : 0}}
      animate={{
        opacity : 1,
        transition :{ delay : 2.4, duration : 0.4, ease : "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* {content} */}
          <div className="min-h-[70vh] w-full">

            {/* {experience} */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.describtion}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return(
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          


            {/* {education} */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.describtion}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return(
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.duration}</h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            
            {/* {skills} */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skill.describtion}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skill.skillList.map((skill,index)=>{
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            
            {/* {about me} */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.describtion}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return(
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div>
  );
}

export default Resume
