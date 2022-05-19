import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";

const siteConfig = {
  author: {
    name: 'Tejesh Chauragade',
    accounts: [
      {
        url: 'https://github.com/IMTejesh95',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/IMTejesh95',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://linkedin.com/in/imtejesh95',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      {
        url: 'mailto:chauragade.tejesh@gmail.com',
        label: 'Mail Tejesh',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
