import { useState } from "react";
import Create_Form from "./Create_Form";
import Create_Result from "./Create_Result";


const Create = () => {
    const [isCreated, setIsCreated] = useState(false);
    return <>
        {!isCreated ? <>
                <Create_Form setIsCreated={setIsCreated}/>
            </>:<>
                <Create_Result/>
            </>}    
    </>
}

export default Create;