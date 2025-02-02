import { Component } from 'react';
import IResult from '../interfaces/IResult';

interface ResultSectionProps {
  results: IResult[] | [];
  isLoading: boolean;
}

class ResultsSection extends Component<ResultSectionProps> {
  render() {
    if (this.props.isLoading) {
      return <h1>Is Loading...</h1>;
    }
    if (this.props.results.length == 0) {
      return <h1>404 Nothing is found</h1>;
    }
    return (
      <div className="resultsWrapper">
        {this.props.results.map((result, index) => (
          <div key={index} className="resultItem">
            <h2 className="resultItemName">{result.name}</h2>
            <p>Birth Year: {result.birth_year}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResultsSection;
