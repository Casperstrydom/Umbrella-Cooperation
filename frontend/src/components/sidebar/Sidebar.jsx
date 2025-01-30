import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';

const Sidebar = () => {
  return (
    <div className="border-r border-stone-900 p-4 flex flex-col h-screen">
      <SearchInput />
      <div className="divider px-3"></div>
      
      {/* Scrollable Conversations List */}
      <div className="flex-1 overflow-auto">
        <Conversations />
      </div>

      <LogoutButton />
    </div>
  );
};

export default Sidebar;
