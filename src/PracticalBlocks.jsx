import { useState, useRef } from "react"
import { PracticalBlock } from "./PracticalBlock"
import { PlusButton } from "./PlusButton"

export function PracticalBlocks() {
  const [practicalKey, setPracticalKey] = useState(1)
  const [practicalBlocks, setPracticalBlocks] = useState([])
  const practicalBlocksRef = useRef()

  practicalBlocksRef.current = practicalBlocks

  const deletePracticalBlockByKey = (key) => {
    const array = practicalBlocksRef.current
    
    const index = array.findIndex(block => block.key == key);

    if (index !== -1) {
      const newArray = [...array.slice(0, index), ...array.slice(index + 1)];
      setPracticalBlocks(newArray);
    }
  };

  const addPracticalBlock = () => {
    setPracticalBlocks(
      practicalBlocks.concat(<PracticalBlock key={practicalKey} id={practicalKey} handleDelete={deletePracticalBlockByKey}/>)
    )
    setPracticalKey(practicalKey + 1)
  }
  
  return (
    <div className="flex flex-col gap-16">
      {practicalBlocks}
      <PlusButton handleClick={addPracticalBlock}/>
    </div>
  )
}