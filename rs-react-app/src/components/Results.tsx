import { Component } from 'react';

interface Result {
  name: string;
  birthYear: string;
}

interface ResultSectionProps {
  results: Result[];
  isLoading: boolean;
}

class ResultsSection extends Component<ResultSectionProps> {
  render() {
    if (this.props.isLoading) {
      return <h1>Is Loading</h1>;
    }
    return (
      <div className="resultsWrapper">
        {this.props.results.map((result, index) => (
          <div key={index} className="resultItem">
            <h2 className="resultItemName">{result.name}</h2>
            <p>Birth Year: {result.birthYear}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsSection;
