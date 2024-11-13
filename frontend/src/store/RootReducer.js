import { combineReducers } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import ChatsReducer from './apps/chat/ChatSlice';
import NotesReducer from './apps/notes/NotesSlice';
import EmailReducer from './apps/email/EmailSlice';
import TicketReducer from './apps/tickets/TicketSlice';
import ContactsReducer from './apps/contacts/ContactSlice';
import EcommerceReducer from './apps/eCommerce/EcommerceSlice';
import UserProfileReducer from './apps/userProfile/UserProfileSlice';
import BlogReducer from './apps/blog/BlogSlice';
import { UserReducer } from './user/UserSlice';
import { CareerReducer } from './career/CareerSlice';

export const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  chatReducer: ChatsReducer,
  emailReducer: EmailReducer,
  notesReducer: NotesReducer,
  contactsReducer: ContactsReducer,
  ticketReducer: TicketReducer,
  ecommerceReducer: EcommerceReducer,
  userpostsReducer: UserProfileReducer,
  blogReducer: BlogReducer,

  /** JuanDepEd */
  userReducer: UserReducer,
  careerReducer: CareerReducer,
});
