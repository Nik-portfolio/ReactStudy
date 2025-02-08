import IResult from '../interfaces/IResult';

interface ResultSectionProps {
  results: IResult[] | [];
  isLoading: boolean;
}

function ResultsSection(props: ResultSectionProps) {
  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (props.results.length === 0) {
    return <h1>Nothing is found</h1>;
  }
  return (
    <div className="result-wrapper">
      {props.results.map((result, index) => (
        <div key={index} className="result-item">
          <h2 className="result-item-name">{result.name}</h2>
          <p>Birth Year: {result.birth_year}</p>
        </div>
      ))}
    </div>
  );
}
export default ResultsSection;
