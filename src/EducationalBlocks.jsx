import { useState, useRef } from "react"
import { EducationalBlock } from "./EducationalBlock"
import { PlusButton } from "./PlusButton"

export function EducationalBlocks() {
  const [educationalKey, setEducationalKey] = useState(1)
  const [educationalBlocks, setEducationalBlocks] = useState([])
  const educationalBlocksRef = useRef()

  educationalBlocksRef.current = educationalBlocks

  const deleteEducationalBlockByKey = (key) => {
    const array = educationalBlocksRef.current
    
    const index = array.findIndex(block => block.key == key);

    if (index !== -1) {
      const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
      setEducationalBlocks(newArray);
    }
  };

  const addEducationalBlock = () => {
    setEducationalBlocks(
      educationalBlocks.concat(<EducationalBlock key={educationalKey} id={educationalKey} handleDelete={deleteEducationalBlockByKey}/>)
    )
    setEducationalKey(educationalKey + 1)
  }
  
  return (
    <div className="flex flex-col gap-16">
      {educationalBlocks}
      <PlusButton handleClick={addEducationalBlock}/>
    </div>
  )
}