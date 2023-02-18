import { createContext, useContext, createSignal } from "solid-js"; 

const AppStateContext = createContext(); 

export function AppStateProvider(props) { 
    const [isEdit, setIsEdit] = createSignal(false);
    
    const enableEdit = () => {
        setIsEdit(true); 
    }; 

    const disableEdit = () => {
        setIsEdit(false); 
    };

    disableEdit();

    return (
        <AppStateContext.Provider value={{ isEdit, enableEdit, disableEdit }}>
          {props.children}
        </AppStateContext.Provider>
    );

} 

export function useAppState() { return useContext(AppStateContext); }