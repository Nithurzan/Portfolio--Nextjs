import Link from "next/link"
import {FaGithub,FaLinkedin,FaFacebook,FaEmail} from "react-icons/fa"

const socials =[
    {icons : <FaGithub/>, path:"https://github.com/Nithurzan"},
    {icons : <FaLinkedin/>, path:"www.linkedin.com/in/nithurzan-yogalingam-597459332"},
    {icons : <FaFacebook/>, path:"https://web.facebook.com/yo.nithurzan"},
    
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
          return(
              <Link href={item.path} key={index} className={iconStyles}>
                  {item.icons}
              </Link>
          );
      })}
    </div>
  )
}

export default Social
