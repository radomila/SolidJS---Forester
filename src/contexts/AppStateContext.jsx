import { createContext, useContext, createSignal } from "solid-js"; 

const AppStateContext = createContext(); 

export function AppStateProvider(props) { 
    const [isEdit, setIsEdit] = createSignal(false); 

    const editMode = [ 
        isEdit, 
        { 
            enableEdit() { 
                setIsEdit(!isEdit());
            }, 
            disableEdit() { 
                setIsEdit(false);
            }
        }
    ];
    
    return (
        <AppStateContext.Provider value={editMode}>
          {props.children}
        </AppStateContext.Provider>
    );

} 

export function useAppState() { return useContext(AppStateContext); }