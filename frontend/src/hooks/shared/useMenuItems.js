import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUserRole } from '../../store/user/UserSelector';
import { USER_ROLES } from '../../constants/UserRoles';
import {
  ADMIN_MENU_ITEMS,
  ALUMNI_MENU_ITEMS,
  REGISTRAR_MENU_ITEMS,
  STUDENT_MENU_ITEMS,
} from '../../constants/RoleMenuItems';

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const role = useSelector(selectCurrentUserRole);

  useEffect(() => {
    if (!role) return;

    switch (role) {
      case USER_ROLES.ADMINISTRATOR:
        setMenuItems(ADMIN_MENU_ITEMS);
        break;
      case USER_ROLES.REGISTRAR:
        setMenuItems(REGISTRAR_MENU_ITEMS);
        break;
      case USER_ROLES.STUDENT:
        setMenuItems(STUDENT_MENU_ITEMS);
        break;
      case USER_ROLES.ALUMNI:
        setMenuItems(ALUMNI_MENU_ITEMS);
        break;
      default:
        break;
    }
  }, [role]);

  return { menuItems };
};

export default useMenuItems;
