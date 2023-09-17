import { BiLogoPython, BiLogoJava, BiLogoCPlusPlus } from "react-icons/bi";
import { FaPhp } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

const programminglanguage = [
    {
        id: 1,
        language: 'Python',
        icon: <BiLogoPython size={50} style={{ color: '#00b386' }} />,
    },
    {
        id: 2,
        language: 'Java',
        icon: <BiLogoJava size={50} style={{ color: '#b32400' }} />,
    },
    {
        id: 3,
        language: 'JavaScript',
        icon: <TbBrandJavascript size={50} style={{ color: '#cccc00' }} />,
    },
    {
        id: 4,
        language: 'PHP',
        icon: <FaPhp size={50} style={{ color: ' #990099' }} />,
    },
    {
        id: 5,
        language: 'C++',
        icon: <BiLogoCPlusPlus size={50} style={{ color: '#6666ff' }} />,
    },
]

export default programminglanguage;