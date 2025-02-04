import { InfoInput } from "./InfoInput"
import { InfoShow } from "./InfoShow"
import { useState } from "react"

export function Info({label, defalutValue, type}) {
  const [isEditing, setIsEditing] = useState(true)
  const [inputValue, setInputValue] = useState(defalutValue)

  const enableEditing = () => {setIsEditing(true)}
  const disableEditing = () => {setIsEditing(false)}
  const saveInputValue = (value) => {setInputValue(value)}

  return (
    <div>
      {isEditing 
        ? <InfoInput label={label} type={type} value={inputValue} handleClick={disableEditing} handleChange={saveInputValue}/>
        : <InfoShow label={label} value={inputValue} handleClick={enableEditing}/>}
    </div>
  )
}