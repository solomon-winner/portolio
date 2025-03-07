import Begena from '../assets/Begena.png';
import TBRR from '../assets/tbrrDash.png';
import SM from '../assets/Social_Media.png';
import Brana from '../assets/brana.png';
import YB from '../assets/YB.png';
import YBD from '../assets/YBD.png';
import Eudr from '../assets/Eudr.jpg';
import Ecommerce from '../assets/E-commerce.png';

export const projects = [
    { 
      title: 'Tree-Based Restoration Registry',
      role: 'Front-end Developer',
      description: 'Developed a platform to manage deforestation data and restoration efforts for the Ethiopian Prime Minister\'s Office. It allows users to track deforested areas, record reforestation progress, and visualize restoration projects on an interactive map. And view the data on the population living there',
      stack: ['React', 'ArcGIS'],
      img:TBRR,
      link: 'https://ethtbrr.net/'
    },
    { 
      title: 'European Union Deforestation Registry',
      role: 'Full-Stack Developer, UI/UX Designer',
      description: 'EUDR stands for the European Union Deforestation Regulation. It aims to regulate Ethiopian coffee suppliers, cooperatives, and unions. The EU seeks to ensure that imported coffee is not grown on deforested land. To achieve this, the system uses geospatial data to track where the coffee is grown and monitors each step from the farmer to Europe, verifying whether the supplier meets their requirements.It is not deployed yet',
      stack: ['React','ArcGIS', 'Node.js', 'MongoDB', 'Express'],
      img:Eudr,
      link: 'https://eudr-mu.vercel.app/'
    },
    { 
      title: 'Brana Bookstore Platform',
      role: 'Mobile App Developer',
      description: 'Developed a mobile app allowing users to browse and order books with integrated delivery services. The app features a user-friendly catalog, secure payment options, and order tracking, enhancing the overall shopping experience.',
      stack: ['Flutter', 'Node.js', 'MongoDB'],
      img:Brana,
      github: 'https://github.com/solomon-winner/brana',
      api: 'https://github.com/solomon-winner/branaBack',
    },
    { 
      title: 'Song Management System',
      role: 'Full-Stack Developer',
      description: 'Created a system to manage songs, albums, and artists, including features like tracking and organizing music information. It supports album creation, song metadata management, and provides search functionality for users to easily find their favorite tracks.',
      stack: ['TypeScript', 'Node.js', 'MongoDB'],
      img:Begena,
      github: 'https://github.com/solomon-winner/SongInfo'
    },
    { 
      title: 'E-Commerce Platform',
      role: 'Full-Stack Developer',
      description: 'Built an end-to-end e-commerce platform with features like product listing, shopping cart, and user management. Users can browse products, add items to their cart, check out, and track orders, while admins can manage inventory and process orders.',
      stack: ['React', 'Node.js', 'MongoDB'],
      img: Ecommerce,
      github: 'https://github.com/solomon-winner/E-commerce'
    },
    {
      title: 'Social Media',
      role: 'Full-Stack Developer',
      description: 'Developed a social media platform with features like user profiles, posts, comments, and likes. Users can create posts, follow other users, and interact with content through comments and likes, fostering a sense of community and connection.',
      stack: ['React', 'Node.js', 'MySQL'],
      img: SM,
      github: 'https://github.com/solomon-winner/mySocial-media'
    },
    {
      title: 'website for Legendary Gospel Singer Yossef Bekele',
      role: 'Full stack Developer',
      description: 'Developed a website for the legendary gospel singer Yossef Bekele. The website features a testimony, songs list, and upcoming events, allowing fans to stay updated on his latest music and performances. It is not deployed in his name officially yet.',
      stack: ['React', 'MongoDB', 'Node.js'],
      img: YB,
      link: 'https://prototype-pied-nu.vercel.app/'
    },
    {
      title: 'Dashboard to manage the Website of Yossef Bekele',
      role: 'Full stack Developer',
      description: 'Developed a dashboard to manage the website of the legendary gospel singer Yossef Bekele. The dashboard allows admins to update the website content, manage songs, and track user engagement, providing insights to improve the user experience.',
      stack: ['React', 'Node.js', 'MongoDB'],
      img: YBD,
      link: 'https://dashboard-prototype-xi.vercel.app/'
    }
  ];
  