import { useEffect, useState } from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import SearchSection from './components/SearchSection';
import ResultsSection from './components/Results';
import getByUrl from './utils/getByUrl';

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [serverResponse, setServerResponse] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        localStorage.setItem('searchTerm', searchTerm);
        setLoadingStatus(true);
        await setServerResponse(
          await getByUrl('https://swapi.dev/api/people/', searchTerm)
        );
        setLoadingStatus(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return;
  }, [searchTerm]);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
  };
  return (
    <>
      <ErrorBoundary>
        <SearchSection searchTerm={searchTerm} onSearch={handleSearch} />
        <ResultsSection isLoading={loadingStatus} results={serverResponse} />
      </ErrorBoundary>
    </>
  );
}

export default App;
