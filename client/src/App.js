import './App.css';
import { getIssues } from './services/api';
import IssuesList from './components/getAllIssues'

function App() {
  return (
    <div className="App">
      <IssuesList/> 
    </div>
  );
}

export default App;