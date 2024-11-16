import { makeEnum } from '../utils/makeEnum';

const USER_ROLES_LIST = [
  'Administrator',
  'School Head',
  'Assistant Principal',
  'Registrar',
  'Admissions',
  'Subject Teacher',
  'Class Adviser',
  'Student',
  'Alumnus',
  'Parent/Guardian',
  'Guest',
];

export const USER_ROLES = makeEnum(USER_ROLES_LIST);
