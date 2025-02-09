import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"
import { isEmpty, hasLengthBiggerThan, isValidEmail, isValidPhone } from "./input-validations"
import { Button } from "./Button"

export function InfoWithButton({label, placeholder, type}) {
  const [isEditing, setIsEditing] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [displayError, setDisplayError] = useState({display: false, message: ""})

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {
    const inputTrimmed = inputValue.trim()
    if (isEmpty(inputTrimmed) || !hasLengthBiggerThan(inputTrimmed, 3)) {
      setDisplayError({display: true, message: "Must have 3 or more characters"})
      return 
    }

    if (type === "email" && !isValidEmail(inputTrimmed)) {
      setDisplayError({display: true, message: "Must be a valid email"})
      return
    }

    if (type === "tel" && !isValidPhone(inputTrimmed)) {
      setDisplayError({display: true, message: "Must be a valid phone number"})
      return
    }
    
    setDisplayError({display: false, message: ""})
    setInputValue(inputTrimmed)
    setIsEditing(false)
  }
  
  return (
    <div className="flex align-end">
      {isEditing 
        ? <>  
            <InfoInput 
              label={label} 
              type={type} 
              placeholder={placeholder}
              value={inputValue} 
              handleChange={setInputValue}
              displayError={displayError}
            />
            <Button className="ml-auto" onClick={disableEditing}>Save</Button>
          </>
        : <>
            <InfoShow label={label} value={inputValue} handleClick={enableEditing}/>
            <Button className="ml-auto" onClick={enableEditing}>Edit</Button>
          </>
      }
    </div>
  )
}