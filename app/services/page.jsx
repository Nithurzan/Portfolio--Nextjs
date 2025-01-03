"use client"

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"

const services =[
  {
    num: "01",
    titile :"Web Designing",
    describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus totam voluptatibus earum",
    href:""
  },
  {
    num: "02",
    titile :"Power BI",
    describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus totam voluptatibus earum",
    href:""
  },
  {
    num: "03",
    titile :"Data analys",
    describtion: "Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus totam voluptatibus earum",
    href:""
  },
  
]

import {motion} from "framer-motion"

const Services = () => {
  return( 
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition:{ delay:2.4 ,duration:0.4, ease:"easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return (
              <div key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* {top} */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl fornt-extrabold text-outline text-transparent 
                  group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all 
                  duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* {title} */}
                <h2 className="text-[42px] font-bold text-white leading-none group-hover:text-accent 
                transition-all duration-500">{service.titile}</h2>
                {/* {describtion} */}
                <p className="text-white/60">{service.describtion}</p>
                {/* {border} */}
                <div className="border border-white/20 w-full"></div>
              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );

}

export default Services
