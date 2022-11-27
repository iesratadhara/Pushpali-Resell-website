import { useEffect, useState } from "react";

const useAdmin= (email)=>{

    const [IsAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/admin/${email}`)
            .then(res=>res.json)
            .then(data=>{
                console.log(data);
                setIsAdmin(data.IsAdmin)
                setIsAdminLoading(false)
            })
        }
    },[email])

    return [IsAdmin, isAdminLoading]
}
export default useAdmin