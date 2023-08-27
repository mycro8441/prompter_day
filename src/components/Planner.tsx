import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import IsNull from "./planner/isNull";
import MyPlan from "./planner/Myplan";
import Create from "./planner/Cteate";

const Planner = () => {


    const [isNull, setIsNull] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    return <>
        {isNull?<>
            <IsNull setIsCreate={setIsCreate}/>
        </>:<>
            {isCreate ? <>
                <Create/>
            </>:<>
                <MyPlan setIsCreate={setIsCreate}/>            
            </>}
        </>}
    </>
}

export default Planner;