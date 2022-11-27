import { useEffect, useState } from "react"

const useToken = (email) => {
    const[token, setToken] = useState('')
    const[jwtUser, setJwtUser] = useState('')
    useEffect(() => {
         fetch(`http://localhost:5000/jwt?email=${email}`)
         .then(res=> res.json())
         .then(data=> {
            if (data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken)
                setJwtUser(data.user)
            }
         })
    }, [ email]);

    return[token,jwtUser]
}

export default useToken