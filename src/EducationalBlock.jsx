import { DeleteButton } from "./DeleteButton"
import { EditButton } from "./EditButton"
import { Info } from "./Info"
import { SaveButton } from "./SaveButton"
import { useState } from "react"
import { isEmpty } from "./input-validations"

export function EducationalBlock({id, handleDelete}) {
  const [isEditing, setIsEditing] = useState(true)
  const [displayError, setDisplayError] = useState({
    school: false,
    title: false,
    date: false, 
    message: ""})
  const [inputValues, setInputValues] = useState({
    school: "", 
    title: "", 
    date: ""
  })

  const labelSize = 115;

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {
    let schoolError = false
    let titleError = false
    let dateError = false
    let message = ""

    if (isEmpty(inputValues.school)) {
      schoolError = true
    }

    if (isEmpty(inputValues.title)) {
      titleError = true
    }

    if (isEmpty(inputValues.date)) {
      dateError = true
    }

    if (schoolError || titleError || dateError) {
      message = "This field is required"
      setDisplayError({school: schoolError, title: titleError, date: dateError, message: message})
      return
    }

    setIsEditing(false)
  }

  return (
    <div className="flex flex-col align-start gap-4">
      <Info 
        id={"school"}
        label={"School Name"} 
        labelSize={labelSize} 
        placeholder={"Harvard University"}
        isEditing={isEditing} 
        displayError={{display: displayError.school, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      <Info 
        id={"title"}
        label={"Title of Study"} 
        labelSize={labelSize} 
        placeholder={"Degree in Mathematics"}
        isEditing={isEditing}
        displayError={{display: displayError.title, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      <Info 
        id={"date"} 
        label={"Date of Study"} 
        labelSize={labelSize} 
        type={"date"} 
        isEditing={isEditing}
        displayError={{display: displayError.date, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
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