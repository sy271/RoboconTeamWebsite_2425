
export const links = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about-us',
      subLinks: [
        { name: 'About', path: '/about-us/about' },
        { name: 'Management', path: '/about-us/management' },
        { name: 'Department', path: '/about-us/department' },
      ],
    },
    { 
      name: 'Achievement', 
      path: '/achievement' 
    },
    {
      name: 'Event',
      path: '/our-event',
      subLinks: [
        { name: 'Upcoming', path: '/our-event/upcoming' },
        { name: 'Previous', path: '/our-event/previous' },
      ],
    },
    { name: 'Partnership', 
      path: '/our-partnership',
      subLinks: [
        { name: 'Partner', path: '/our-partnership/partner' },
        { name: 'Review', path: '/our-partnership/review' },
      ],
    },
    { name: 'Contact', path: '/contact-us' },
];