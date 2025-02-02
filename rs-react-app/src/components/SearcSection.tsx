import { Component } from 'react';
import Button from './Button';

interface SearchSectionProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

interface SearchSectionState {
  inputValue: string;
}
class SearchSection extends Component<SearchSectionProps> {
  // const [inputValue, setInputValue] = useState(searchTerm)
  public state: SearchSectionState = {
    inputValue: this.props.searchTerm,
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-8">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          placeholder="Search Star Wars characters"
        />
        <Button>Search</Button>
      </form>
    );
  }
}

export default SearchSection;
