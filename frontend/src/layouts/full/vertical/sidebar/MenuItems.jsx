import {
  IconChartHistogram,
  IconUsers,
  IconTable,
  IconBook,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  /** Start - Juan DepEd */
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Analytics',
    icon: IconChartHistogram,
    href: '/admin/dashboard',
  },
  {
    navlabel: true,
    subheader: 'User Management',
  },
  {
    id: uniqueId(),
    title: 'Accounts',
    icon: IconUsers,
    href: '/admin/accounts',
  },
  {
    id: uniqueId(),
    title: 'Personnels',
    icon: IconUsers,
    href: '/admin/personnels',
  },
  {
    navlabel: true,
    subheader: 'Career Management',
  },
  {
    id: uniqueId(),
    title: 'Tracks',
    icon: IconTable,
    href: '/admin/tracks',
  },
  {
    id: uniqueId(),
    title: 'Strands',
    icon: IconTable,
    href: '/admin/strands',
  },
  {
    id: uniqueId(),
    title: 'Specializations',
    icon: IconTable,
    href: '/admin/specializations',
  },
  {
    navlabel: true,
    subheader: 'Document Management',
  },
  {
    id: uniqueId(),
    title: 'School Forms',
    icon: IconBook,
    href: '/admin/school-forms',
  },
  {
    navlabel: true,
    subheader: 'Enrollment Management',
  },
  {
    navlabel: true,
    subheader: 'Student Management',
  },
  {
    navlabel: true,
    subheader: 'Class Management',
  },
  {
    navlabel: true,
    subheader: 'Attendance Management',
  },
  {
    navlabel: true,
    subheader: 'Grade Management',
  },
  {
    navlabel: true,
    subheader: 'Event Management',
  },
  {
    navlabel: true,
    subheader: 'Account Settings',
  },
  {
    navlabel: true,
    subheader: 'System Settings & Security',
  },
  /** END - Juan DepEd */
];

export default Menuitems;
