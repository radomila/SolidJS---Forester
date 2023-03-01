import Header from './components/Header'; 
import Forest from './components/Forest'; 
import { forestConfig } from './components/Forest';

function App({nodeP}) {
  return (
    <div>
      <Header /> 
      <Forest nodes={forestConfig}/>
    </div>
  );
}

export default App;
