import { useState } from 'react';
import Button from './Button';

interface SearchSectionProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

function SearchSection(props: SearchSectionProps) {
  const [inputValue, setInputValue] = useState<string>(props.searchTerm);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onSearch(inputValue);
  }
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Star Wars characters"
      />
      <Button className="search">Search</Button>
    </form>
  );
}
export default SearchSection;
