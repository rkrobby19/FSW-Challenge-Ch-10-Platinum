import jwtDecode from "jwt-decode"


export const validateUser = () => {
    const token = localStorage.getItem('jwt-token')
    if(token === null || undefined) {
        return{
            status:'INVALID'
        }            
    }
    const decodedToken = jwtDecode(token)
    return {
        status: "VALID",
        uid: decodedToken.sub
    }  
}