import { TbEyeSearch } from "react-icons/tb";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input 
        type='text' 
        placeholder='Search_' 
        className='input-bordered rounded-full' 
        title="search user name" // Tooltip when hovering on the input field
      />
      <button 
        type='submit' 
        className='btn btn-circle bg-red-500 text-black'
        title="Find" // Tooltip when hovering on the button
      >
        <TbEyeSearch className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;
