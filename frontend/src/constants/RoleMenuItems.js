import {
  IconChartHistogram,
  IconUsers,
  IconTable,
  IconBook,
  IconPoint,
  IconSchool,
  IconNote,
  IconStars,
  IconCalendarEvent,
  IconLoader,
  IconUserCircle,
  IconCertificate,
  IconReceipt,
  IconStack,
  IconListSearch,
  IconNotebook,
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
    title: 'Career',
    icon: IconListSearch,
    href: '/admin/career',
    children: [
      {
        id: uniqueId(),
        title: 'Tracks',
        icon: IconPoint,
        href: '/admin/career/tracks',
      },
      {
        id: uniqueId(),
        title: 'Strands',
        icon: IconPoint,
        href: '/admin/career/strands',
      },
      {
        id: uniqueId(),
        title: 'Specializations',
        icon: IconPoint,
        href: '/admin/career/specializations',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Subject',
    icon: IconNotebook,
    href: '/admin/subject',
    children: [
      {
        id: uniqueId(),
        title: 'Core',
        icon: IconPoint,
        href: '/admin/subject/core',
      },
      {
        id: uniqueId(),
        title: 'Applied',
        icon: IconPoint,
        href: '/admin/subject/applied',
      },
      {
        id: uniqueId(),
        title: 'Specialized',
        icon: IconPoint,
        href: '/admin/subject/specialized',
      },
    ],
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
    subheader: 'Enrollment',
  },
  {
    id: uniqueId(),
    title: 'Enhanced BEEF',
    icon: IconNote,
    href: '/student/enhanced-beef',
  },
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Graduation Tracking',
    icon: IconStack,
    href: '/student/tracking',
  },
  {
    id: uniqueId(),
    title: 'Grades',
    icon: IconStars,
    href: '/student/grades',
  },
  {
    id: uniqueId(),
    title: 'Attendance Records',
    icon: IconCalendarEvent,
    href: '/student/attendance',
  },
  {
    id: uniqueId(),
    title: 'Progress Reports',
    icon: IconLoader,
    href: '/student/progress',
  },
  {
    navlabel: true,
    subheader: 'Personal Information',
  },
  {
    id: uniqueId(),
    title: 'Profile',
    icon: IconUserCircle,
    href: '/student/profile',
  },
  {
    navlabel: true,
    subheader: 'Request Management',
  },
  {
    id: uniqueId(),
    title: 'Certification',
    icon: IconCertificate,
    href: '/student/request/certificate',
  },
  {
    id: uniqueId(),
    title: 'School Records',
    icon: IconReceipt,
    href: '/student/request/school-records',
  },
];

export const ALUMNI_MENU_ITEMS = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Alumni Tracking',
    icon: IconStack,
    href: '/alumni/tracking',
  },
  {
    id: uniqueId(),
    title: 'Grades',
    icon: IconStars,
    href: '/alumni/grades',
  },
  {
    id: uniqueId(),
    title: 'Attendance Records',
    icon: IconCalendarEvent,
    href: '/alumni/attendance',
  },
  {
    id: uniqueId(),
    title: 'Progress Reports',
    icon: IconLoader,
    href: '/alumni/progress',
  },
  {
    navlabel: true,
    subheader: 'Personal Information',
  },
  {
    id: uniqueId(),
    title: 'Profile',
    icon: IconUserCircle,
    href: '/alumni/profile',
  },
  {
    navlabel: true,
    subheader: 'Request Management',
  },
  {
    id: uniqueId(),
    title: 'Certification',
    icon: IconCertificate,
    href: '/alumni/request/certificate',
  },
  {
    id: uniqueId(),
    title: 'School Records',
    icon: IconReceipt,
    href: '/alumni/request/school-records',
  },
];
