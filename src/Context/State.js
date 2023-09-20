import Context from "./Context";
import axios from "axios";
const State=(props)=>{

    return(
        <Context.Provider value={{}}>
            {props.children}
        </Context.Provider>
    )
}

export default State;

export const userRegister = (data) => {
    axios.post('http://localhost:8082/auth/register', data)
    .then((res) => {
      alert(res.data.title);
    })
    .catch((err) => {
      alert(err.response.data.errorMessage);
    });
};

export const userLogin = (data) => {
    axios.post('http://localhost:8082/auth/login', data)
    .then((res) => {
      alert(res.data.title);
    })
    .catch((err) => {
      alert(err.response.data.errorMessage);
    });
};
