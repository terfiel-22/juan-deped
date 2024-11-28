import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/UserSelector';
import { USER_ROLES } from '../../constants/UserRoles';
import { ADMIN_MENU_ITEMS, REGISTRAR_MENU_ITEMS } from '../../constants/RoleMenuItems';

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) return;

    switch (currentUser.role) {
      case USER_ROLES.ADMINISTRATOR:
        setMenuItems(ADMIN_MENU_ITEMS);
        break;
      case USER_ROLES.REGISTRAR:
        setMenuItems(REGISTRAR_MENU_ITEMS);
        break;
      default:
        break;
    }
  }, [currentUser]);

  return { menuItems };
};

export default useMenuItems;
