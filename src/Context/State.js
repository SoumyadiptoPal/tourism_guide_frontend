import Context from "./Context";

const State=(props)=>{

    return(
        <Context.Provider value={{}}>
            {props.children}
        </Context.Provider>
    )
}

export default State