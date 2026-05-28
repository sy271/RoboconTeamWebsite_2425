import { SiGmail, SiMessenger, SiFacebook, SiInstagram, SiYoutube, SiLinkedin, SiDiscord, SiHomeassistant } from 'react-icons/si';

const contacts = [
    {
      index: 1,
      logo: <SiGmail className='contact_icon' />,
      name: 'Email',
      account: <p>utmroboconsecretary<br/>@gmail.com</p>,
      link: 'mailto:utmroboconsecretary@gmail.com?subject=Hello%20UTM%20Robocon&body=I%20would%20like%20to%20contact%20you%20regarding...',
    },
    {
      index: 2,
      logo: <SiMessenger className='contact_icon' />,
      name: 'Messenger',
      account: 'UTM Robocon Team',
      link: 'https://m.me/utmrbc',
    },
    {
        index: 8,
        logo: <SiFacebook className='contact_icon' />,
        name: 'Facebook',
        account: 'UTM Robocon Team',
        link: 'https://www.facebook.com/utmrbc',
    },
    {
      index: 3,
      logo: <SiInstagram className='contact_icon' />,
      name: 'Instagram',
      account: '@utm.rbc',
      link: 'https://www.instagram.com/utm.rbc/',
    },
    {
      index: 4,
      logo: <SiYoutube className='contact_icon' />,
      name: 'Youtube',
      account: 'UTM Robocon',
      link: 'https://www.youtube.com/@utmrbcteam' ,
    },
    {
      index: 5,
      logo: <SiDiscord className='contact_icon' />,
      name: 'Discord',
      account: 'UTM ROBOCON Team',
      link: 'https://discord.gg/Zcg2s83ett',
    },
    {
      index: 6,
      logo: <SiHomeassistant className='contact_icon' />,
      name: 'Address',
      account: 'P10, UTM Robocon, UTM Johor Bahru, 81310 Skudai, Johor',
      link: ' https://maps.app.goo.gl/svPfvYXJjGt66PSc6',
    }
  ];

  export default contacts;
  