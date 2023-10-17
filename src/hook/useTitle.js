import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Food Hub - ${title}`;
    },[title])
};

export default useTitle