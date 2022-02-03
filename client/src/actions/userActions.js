//========================== Import Modules Start ===========================
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

//========================== Import Modules End =============================

//============================= Actions =============================

//============================= Register User Action Start =============================
export const Register_User = (values) => {

    return (dispatch) => {
        Axios.post(`/signUp`, values)
        .then(res => {
            const userData = res.data;
            toast.success("Register Successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            dispatch({type: "Register_User", payload: userData})  
        })
        .catch(err => {
            toast.error("Email Or Phone Number Already Exist!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
        });
        
    }
}
//============================= End =============================


//============================= Save Updated Detils Of Employee Action Start =============================
export const Save_Update = (id,values) => {

    return (dispatch) => {
        Axios.put(`/updateUser/?ID=${id}`, values) 
        .then(() => {
            toast.success("Data Updated Successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            dispatch({type: "Save_Update"})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }     
}
//============================= End =============================

//============================= Login User Action Start =============================
export const Login_User = (values) => {
    
    return (dispatch) => {
        Axios.post(`/signIn`, values) 
        .then(() => {
            toast.success("Login Successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            dispatch({type: "Login_User"})
        })
        .catch(err => {
            toast.error("Invalid Credentials!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        });;
    }
}
//============================= End =============================

//============================= Delete Employee Action Start =============================
export const Delete_User = (email) =>{

    return (dispatch) => {
        Axios.delete(`/deleteUser/?Email=${email}`)
        .then((res) => {
            toast.success("Deleted Successfully!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
            dispatch({type: "Delete_User", payload: res.data})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }  
}
//============================= End =============================

//============================= Get Employees Details Action Start =============================
export const Get_UserDetails = (Page,Sort, Search) => {
    
    return (dispatch) => {
        Axios.get(`/getUser/?Page=${Page}&Sort=${Sort}&Search=${Search}`) 
        .then(res => {
            const userData = res.data;
            dispatch({type: "Get_UserDetails", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}
//============================= End =============================

//============================= Logout User Action Start =============================
export const Logout_User = () => {

    return (dispatch) => {
        Axios.get(`/logout`)
        .then(() => {
            dispatch({type: "Logout_User"})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}
//============================= End =============================


//============================= Get Country, State, City =============================
export const Get_CountryStateCity = (Search, CountryID, StateID) => {
    
    return (dispatch) => {
        Axios.get(`/getCountryStateCity/?Search=${Search}&CountryID=${CountryID}&StateID=${StateID}`)
        .then(res => {
            const userData = res.data;
            dispatch({type: "Get_CountryStateCity", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}
//============================= End =============================


//============================= Get Country, State, City =============================
export const CheckCookie = () => {
    
    return (dispatch) => {
        Axios.get(`/checkCookie`)
        .then(res => {
            const userData = res.data;
            dispatch({type: "CheckCookie", payload: userData})
        })
        .catch(err => {
            console.log("error: ", err);
        });
    }
}
//============================= End =============================

