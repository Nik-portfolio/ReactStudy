import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/Results';
import IResult from './interfaces/IResult';
import getByUrl from './utils/getByUrl';

//  const response = await fetch(`https://swapi.dev/api/people/?search=${term}`)
//     if (!response.ok) {
//       throw new Error("Failed to fetch results")
//     }
//     const data = await response.json()
//     setResults(data.results)

interface AppState {
  searchTerm: string;
  isLoading: boolean;
  results: IResult[];
}
class App extends Component {
  public state: AppState = {
    searchTerm: localStorage.getItem('searchTerm') || '',
    isLoading: true,
    results: [],
  };
  async componentDidMount() {
    this.setState({
      isLoading: false,
      results: await getByUrl(
        'https://swapi.dev/api/people/',
        this.state.searchTerm
      ),
    });
    console.log(await getByUrl('https://swapi.dev/api/people/', ''));
  }

  handleSearch = async (term: string) => {
    localStorage.setItem('searchTerm', term);
    this.setState({
      isLoading: true,
    });
    this.setState({
      isLoading: false,
      searchTerm: term,
      results: await getByUrl('https://swapi.dev/api/people/', term),
    });
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <SearchSection
            searchTerm={this.state.searchTerm}
            onSearch={this.handleSearch}
          />
          <ResultsSection
            isLoading={this.state.isLoading}
            results={this.state.results}
          />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
