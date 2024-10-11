import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full border-2 border-yellow-600 bg-yellow-100 px-3 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-72"
        placeholder="search order by #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
