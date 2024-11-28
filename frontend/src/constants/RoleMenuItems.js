import {
  IconChartHistogram,
  IconUsers,
  IconTable,
  IconBook,
  IconPoint,
  IconSchool,
  IconNote,
} from '@tabler/icons';
import { uniqueId } from 'lodash';

export const ADMIN_MENU_ITEMS = [
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
    subheader: 'Forms & Certificates',
  },
  {
    id: uniqueId(),
    title: 'School Forms',
    icon: IconBook,
    href: '/admin/school-forms/',
    children: [
      {
        id: uniqueId(),
        title: 'SHSF-1',
        icon: IconPoint,
        href: '/admin/school-forms/shsf1',
      },
      {
        id: uniqueId(),
        title: 'SHSF-2',
        icon: IconPoint,
        href: '/admin/school-forms/shsf2',
      },
      {
        id: uniqueId(),
        title: 'SHSF-4',
        icon: IconPoint,
        href: '/admin/school-forms/shsf4',
      },
      {
        id: uniqueId(),
        title: 'SHSF-5A',
        icon: IconPoint,
        href: '/admin/school-forms/shsf5a',
      },
      {
        id: uniqueId(),
        title: 'SHSF-5B',
        icon: IconPoint,
        href: '/admin/school-forms/shsf5b',
      },
      {
        id: uniqueId(),
        title: 'SHSF-6',
        icon: IconPoint,
        href: '/admin/school-forms/shsf6',
      },
      {
        id: uniqueId(),
        title: 'SHSF-7',
        icon: IconPoint,
        href: '/admin/school-forms/shsf7',
      },
      {
        id: uniqueId(),
        title: 'SF-8',
        icon: IconPoint,
        href: '/admin/school-forms/sf8',
      },
    ],
  },
  {
    navlabel: true,
    subheader: 'School Management',
  },
  {
    id: uniqueId(),
    title: 'School',
    icon: IconSchool,
    href: '/admin/school',
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
];

export const REGISTRAR_MENU_ITEMS = [
  {
    navlabel: true,
    subheader: 'Admissions',
  },
  {
    id: uniqueId(),
    title: 'Analytics',
    icon: IconChartHistogram,
    href: '/registrar/dashboard',
  },
];

export const STUDENT_MENU_ITEMS = [
  {
    navlabel: true,
    subheader: 'Complete Registration',
  },
  {
    id: uniqueId(),
    title: 'Enhanced BEEF',
    icon: IconNote,
    href: '/student/enhanced-beef',
  },
];
