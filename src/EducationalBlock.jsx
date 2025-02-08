import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"
import { Info } from "./Info"
import { SaveButton } from "./SaveButton"
import { useState } from "react"
import { isEmpty } from "./input-validations"

export function EducationalBlock({id, handleDelete}) {
  const [isEditing, setIsEditing] = useState(true)
  const [displayError, setDisplayError] = useState({display: false, message: ""})
  const [inputValues, setInputValues] = useState({
    school: "Harvard University", 
    title: "Degree in Mathematics", 
    date: "2020-09-22"
  })

  const labelSize = 112;

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {
    console.log(inputValues)
    if (isEmpty(inputValues.school) || isEmpty(inputValues.title) || isEmpty(inputValues.date)) {
      setDisplayError({display: true, message: "All fields are required"})
      return
    }
    setIsEditing(false)
  }

  const updateInputValues = (newValues) => {
    console.log("I'm being called")
    setInputValues(newValues)
  }

  return (
    <div className="flex flex-col align-start gap-4">
      <Info 
        id={"school"}
        label={"School Name"} 
        labelSize={labelSize} 
        defaultValue={inputValues.school} 
        isEditing={isEditing} 
        displayError={displayError}
        inputValues={inputValues}
        handleInputValues={updateInputValues}
      />
      <Info 
        id={"title"}
        label={"Title of Study"} 
        labelSize={labelSize} 
        defaultValue={inputValues.title} 
        isEditing={isEditing}
        displayError={{display: displayError.display, message: ""}}
        inputValues={inputValues}
        handleInputValues={updateInputValues}
      />
      <Info 
        id={"date"} 
        label={"Date of Study"} 
        labelSize={labelSize} 
        defaultValue={inputValues.date} 
        type={"date"} 
        isEditing={isEditing}
        displayError={{display: displayError.display, message: ""}}
        inputValues={inputValues}
        handleInputValues={updateInputValues}
      />
      
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