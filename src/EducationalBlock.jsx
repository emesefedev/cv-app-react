import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"
import { Info } from "./Info"
import { SaveButton } from "./SaveButton"
import { useState } from "react"

export function EducationalBlock({id, handleDelete}) {
  const [isEditing, setIsEditing] = useState(true)

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {setIsEditing(false)}

  return (
    <div className="flex flex-col align-start gap-4">
      <Info label={"School Name"} defaultValue={"Harvard University"} isEditing={isEditing}/>
      <Info label={"Title of Study"} defaultValue={"Degree in Mathematics"} isEditing={isEditing}/>
      <Info label={"Date of Study"} defaultValue={"2020-09-22"} type={"date"} isEditing={isEditing}/>
      
      {isEditing 
        ? <div className="flex gap-8 mt-8">
           <SaveButton handleClick={disableEditing}/>
           <DeleteButton handleClick={() => handleDelete(id)}/>
          </div> 
        : <EditButton style={"mt-8"} handleClick={enableEditing}/>
      }
    </div>
  )
}