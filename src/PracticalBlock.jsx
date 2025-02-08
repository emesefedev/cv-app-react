import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"
import { Info } from "./Info"
import { SaveButton } from "./SaveButton"
import { useState } from "react"

export function PracticalBlock({id, handleDelete}) {
  const [isEditing, setIsEditing] = useState(true)
  const labelSize = 130;

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {setIsEditing(false)}

  return (
    <div className="flex flex-col align-start gap-4">
      <Info label={"Company Name"} labelSize={labelSize} defaultValue={"Krusty Burger"} isEditing={isEditing}/>
      <Info label={"Position Title"} labelSize={labelSize} defaultValue={"CEO"} isEditing={isEditing}/>
      <Info label={"Date from"} labelSize={labelSize} defaultValue={"2025-01-01"} type={"date"} isEditing={isEditing}/>
      <Info label={"Date until"} labelSize={labelSize} defaultValue={""} type={"date"} isEditing={isEditing}/>
      
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