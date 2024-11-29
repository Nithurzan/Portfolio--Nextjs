import Link from "next/link"
import {FaGithub,FaLinkedin,FaFacebook,FaEmail} from "react-icons/fa"

const socials =[
    {icons : <FaGithub/>, path:""},
    {icons : <FaLinkedin/>, path:""},
    {icons : <FaFacebook/>, path:""},
    
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
