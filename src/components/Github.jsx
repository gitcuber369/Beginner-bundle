import React, { useState } from 'react';


function Github() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${query}`);
      const data = await response.json();
      setResult([data]);
      console.log(data);
    } catch (error) {
      console.error(error);
      setResult([]);
    }
  };

  return (
    
    <div className='block text-center max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl" bg-gray-500/30 mt-10'>
      <div className=''>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter the name of the user"
          className="text-center m-2 rounded border-b-2 border-transparent focus:border-white transition-colors duration-300 ease-in-out focus:outline-none bg-transparent text-white p-1"
        />
        <button type="submit" className="text-white ml-2">
          Search
        </button>
      </form>
      {result.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl text-white">Github Profile</h2>
          <div className='text-white'>
            <ul className="mt-4">

            <li className="text-red-500">Username: {result[0].login}</li>

            <div className='flex justify-center p-2'> 
            <li><img src={result[0].avatar_url} alt="user_img" className="w-20 rounded-full " /></li>
            </div>

            <div>

            <li className='text-xl p-2'>{result[0].name}</li>
            <li className='text-sm p-5 m-3 text-gray-300 flex'>{result[0].bio}</li>

            </div>

            <div className='flex flex-row gap-5 p-5 text-sm text-center flex-auto'>

            <li>Company {result[0].company || "none"} </li>
            <li>Public Repos {result[0].public_repos}</li>
            <li>Followers {result[0].followers}</li>
            <li>Following {result[0].following}</li>

            </div>
          </ul>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Github;


