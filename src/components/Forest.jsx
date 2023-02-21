import Node from './Node/Node.jsx'; 
import {forestContent} from '../App.module.css'

function Forest() {   
    return (
     <div class={forestContent}> 
        <Node type='sequence'>Sequence</Node> 
        <Node type='error'>Error</Node>
     </div>
   );
 }
 
 export default Forest;