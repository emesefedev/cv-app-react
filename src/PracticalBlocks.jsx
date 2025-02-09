import { useState } from "react"
import { PracticalBlock } from "./PracticalBlock"
import { Button } from "./Button";

export function PracticalBlocks({defaultBlocks = []}) {
const [practicalBlocks, setPracticalBlocks] = useState(defaultBlocks)

  const deletePracticalBlockByKey = (key) => {
    setPracticalBlocks(array => {
      return array.filter(it => it.practicalKey != key)
    })
  };

  const addPracticalBlock = () => {
    setPracticalBlocks(prev => {
      const newKey = crypto.randomUUID()
      return [...prev, {practicalKey: newKey}]
    })
  }
  
  return (
    <div className="flex flex-col gap-16">
      {practicalBlocks.map(pb => (
        <PracticalBlock key={pb.practicalKey} id={pb.practicalKey} handleDelete={deletePracticalBlockByKey}/>
      ))}

      <Button onClick={addPracticalBlock}>+</Button>
    </div>
  )
}