import { InfoWithButton } from "./InfoWithButton"
import { EducationalBlocks } from "./EducationalBlocks"
import { PracticalBlocks } from "./PracticalBlocks"

function App() {
  // TODO: Hacer componente button con children
  // TODO: Trim educational y practical experience

  return (
    <div className="app">
      <h1>CV Application</h1>

      <div className="flex flex-col gap-8">
      <InfoWithButton label={"Name"} placeholder={"Mike"}/>
      <InfoWithButton label={"Mail"} placeholder={"mike.is.not.real@gmail.com"} type={"email"}/>
      <InfoWithButton label={"Phone"} placeholder={"987654321"} type={"tel"}/>
      </div>

      <h2 className="mt-5vh">Educational Experience</h2>
      <EducationalBlocks/>

      <h2 className="mt-5vh">Practical Experience</h2>
      <PracticalBlocks/>

    </div>
  )
}

export default App
