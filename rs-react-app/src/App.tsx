import { Component } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import SearchSection from './components/SearcSection';

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <SearchSection searchTerm="" onSearch={(e) => console.log(e)} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
