import { clsx } from 'clsx';
import { children } from "solid-js";
import { buttonBase, buttonPrimary, buttonUpdate, selectionButton } from './Button.module.css';

function Button(props) {   
  const resolved = children(() => props.children);
  let typeClass = '';

  switch (true) {
    case props.type === 'primary': 
      typeClass = buttonPrimary; 
      break; 
    case props.type === 'update': 
      typeClass = buttonUpdate; 
      break; 
    case props.type === 'selection': 
      typeClass = selectionButton; 
      break; 
    default: 
      typeClass = buttonBase;
  }
  
  return (
    <div>
        <button 
            onClick={props.onClick}
            class={clsx(buttonBase, typeClass)} 
        >   
          {resolved()}
        </button>
    </div>
  );
}

export default Button;