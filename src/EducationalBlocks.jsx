import { useState } from "react"
import { EducationalBlock } from "./EducationalBlock"
import { Button } from "./Button";

export function EducationalBlocks({defaultBlocks = []}) {
  const [educationalBlocks, setEducationalBlocks] = useState(defaultBlocks)

  const deleteEducationalBlockByKey = (key) => {
    setEducationalBlocks(array => {
      return array.filter(it => it.practicalKey != key)
    })
  };

  const addEducationalBlock = () => {
    setEducationalBlocks(prev => {
      const newKey = crypto.randomUUID()
      return [...prev, {practicalKey: newKey}]
    })
  }
  
  return (
    <div className="flex flex-col gap-16">
      {educationalBlocks.map(pb => (
        <EducationalBlock key={pb.practicalKey} id={pb.practicalKey} handleDelete={deleteEducationalBlockByKey}/>
      ))}
      <Button onClick={addEducationalBlock}>+</Button>
    </div>
  )
}