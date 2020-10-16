import React from 'react'
import CardsEdu from "./CardsEdu"
import {Button} from "reactstrap"

const Education = ({info}) => {
    return (
        <>
        <Button color="dark" className="mb-1">Education</Button>
         <CardsEdu info={info}/>
         </>
    )
}

export default Education