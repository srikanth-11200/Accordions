import { accordionData } from './content';
import './App.css';
import Accordions from './Accordions';

function App() {
  return (
    <div >
      <div className='"accordion'>
      {accordionData.map(({title,content}) => (   
         <Accordions title = {title} content = {content}/>
      )) }
      </div>
   </div>
  );
}

export default App;
