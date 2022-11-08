import { Parent } from './props/Parent';
import { GuestList } from './state/GuestList';
import { UserSearch } from './state/UserSearch';
import { EventComponent } from './events/EventComponent';

export const App = () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};
