import { Info } from "./Info"
import { useState } from "react"
import { isEmpty } from "./input-validations"
import { Button } from "./Button"

export function PracticalBlock({id, handleDelete}) {
  const [isEditing, setIsEditing] = useState(true)
  const [displayError, setDisplayError] = useState({
    company: false,
    position: false,
    dateFrom: false, 
    dateUntil: false,
    message: ""})
  const [inputValues, setInputValues] = useState({
    company: "",
    position: "", 
    dateFrom: "",
    dateUntil: ""
  })

  const labelSize = 132;

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {
    let companyError = false
    let positionError = false
    let dateFromError = false
    let dateUntilError = false
    let message = ""

    if (isEmpty(inputValues.company)) {
      companyError = true
    }

    if (isEmpty(inputValues.position)) {
      positionError = true
    }

    if (isEmpty(inputValues.dateFrom)) {
      dateFromError = true
    }

    if (companyError || positionError || dateFromError) {
      message = "This field is required"
      setDisplayError({
        company: companyError, 
        position: positionError, 
        dateFrom: dateFromError, 
        dateUntil: dateUntilError, 
        message: message
      })
      return
    }

    setIsEditing(false)
  }

  return (
    <div className="flex flex-col align-start gap-4">
      <Info 
        id={"company"}
        label={"Company Name"}
        labelSize={labelSize} 
        placeholder={"Krusty Burger"} 
        isEditing={isEditing}
        displayError={{display: displayError.company, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      <Info 
        id={"position"}
        label={"Position Title"} 
        labelSize={labelSize} 
        placeholder={"CEO"}
        isEditing={isEditing}
        displayError={{display: displayError.position, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      <Info 
        id={"dateFrom"}
        label={"Date from"} 
        labelSize={labelSize} 
        type={"date"} 
        isEditing={isEditing}
        displayError={{display: displayError.dateFrom, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      <Info 
        id={"dateUntil"}
        label={"Date until"} 
        labelSize={labelSize} 
        type={"date"} 
        isEditing={isEditing}
        displayError={{display: displayError.dateUntil, message: displayError.message}}
        inputValues={inputValues}
        handleInputValues={setInputValues}
      />
      
      {isEditing 
        ? <div className="flex gap-8 mt-8">
            <Button onClick={disableEditing}>Save</Button>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </div> 
        : <Button className={"mt-8"} onClick={enableEditing}>Edit</Button>
      }
    </div>
  )
}