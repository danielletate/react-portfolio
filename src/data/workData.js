import WorkImg1 from '../assets/projects/netflix-clone.jpg';
import WorkImg2 from '../assets/projects/budget-buddy.png';
import WorkImg3 from '../assets/projects/jeffco-dems.jpg';
import WorkImg4 from '../assets/projects/mike-rachlin.jpg';

export const ProjectsData = [
  {
    id: 1,
    name: 'Netflix Clone',
    image: WorkImg1,
    github: 'https://github.com/danielletate/netflix-clone',
    description:
      'React application built using Tailwind CSS and Firebase. User can create an account, Login and Logout, and "favorite" movies.',
    live: 'https://netflix-clone-87396.web.app/',
  },
  {
    id: 2,
    name: 'Budget Buddy',
    image: WorkImg2,
    github: 'https://github.com/danielletate/budget-buddy',
    description:
      'CRUD budgeting app that allows users to create individual budgets and add expenses. Built with React and Tailwind CSS, and implements custom hooks.',
    live: 'https://celebrated-treacle-932136.netlify.app',
  },
  {
    id: 3,
    name: 'Jefferson County Democratic Party',
    image: WorkImg3,
    description:
      "Website designed and built using the Squarespace platform. Incorporates custom CSS and 'countdown' widget.",
    live: 'https://www.jeffcodems.org/',
  },
  {
    id: 4,
    name: 'Mike Rachlin Music',
    image: WorkImg4,
    description: '',
    live: '',
  },
];
