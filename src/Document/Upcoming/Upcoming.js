import BasicWorkshop from '../../Picture/2024/basic2024.jpg';
import Autocar from '../../Picture/2024/autocar2024.JPG';
import AutocarCompetition from '../../Picture/2022/2022AutocarCompetition3.jpg';
import JuniorTraining from '../../Picture/2023/2023JuniorTraining.jpeg';
import DepartmentTraining from '../../Picture/2023/2023DepartmentTraining.JPG';
import RBC from '../../Picture/2023/2023FullRoboconMalaysia.JPG';
import ABU from '../../Picture/2023/2023ABURobocon.jpeg';
import White from './White.png';

export const upcoming = [
    {
        id: 1,
        title: 'Basic Workshop 2024',
        status: 'ing',
        date: '25 - 26 October 2024',
        venue: 'L50, UTM Johor Bahru',
        time: '8.00 a.m. - 6.00 p.m.', 
        register: 'https://forms.gle/rKdZB81CYH8GqAF88',      
        link: '/our-event/plan',
        text: 'A two-day event introducing participants to the basics of mechanisms, electronics, and programming through hands-on exercises.',
        picture: BasicWorkshop,
      },
      {
        id: 2,
        title: 'Autocar Mentor-Mentee 2024',
        status: 'ing',
        date: '3 - 23 November 2023',
        venue: 'P10, FKE, UTM Johor Bahru',
        register: 'https://forms.gle/rKdZB81CYH8GqAF88',      
        link: '/our-event/plan',
        text: 'The Autocar mentor-mentee is a robotics activity where participants are given one month to design, build, and program an autonomous car robot.',
        picture: Autocar,
      },
      {
        title: 'Autocar Competition 2024',
        status: 'coming',
        date: 'Date: 25 November 2023',
        venue: 'Venue: P10, FKE, UTM Johor Bahru',      
        link: '/our-event/autocar',
        text: 'The Autocar Competition is a robotics competition where participants need to line up and play a game with each other.',
        picture: AutocarCompetition,
      },
      {
        id: 3,
        title: 'Apprentice Training 24/25',
        status: 'coming',
        venue: 'Venue: P10, FKE, UTM Johor Bahru',
        text: 'Apprentice Training is a foundational program where participants learn the basics of mechanics, programming, and electronics, preparing them to become junior members of the Robocon club.',
        picture: JuniorTraining,
      },
      {
        id: 4,
        title: 'Junior Training 2025',
        status: 'coming',
        venue: 'Venue: P10, FKE, UTM Johor Bahru',
        text: 'Junior Training is an advanced program that provides in-depth learning and specialized knowledge in specific areas within the field of robotics. ',
        picture: DepartmentTraining,
      },
      // {
        // id: 5,
        // title: 'Sharing Session 2024',
        // status: 'coming',
        // text: 'Robocon Malaysia is a national-level robotics competition that challenges teams of university students to design and build robots to compete in various tasks, showcasing their engineering and problem-solving skills.',
        // picture: RBC,
      // }, 
      {
        id: 6,
        title: 'ABU ROBOCON 2025',
        status: 'coming',
        venue: 'AIC Steppe Arena, Ulaanbaatar, Mongolia',
        date: '24 August 2025',
        text: 'ABU Robocon is an international robotics competition organized by the Asia-Pacific Broadcasting Union (ABU), where teams from different countries design and build robots to compete in a specific game challenge every year.',
        link: 'https://aburobocon2025.mnb.mn/en',
        picture: ABU,
      }
    
];