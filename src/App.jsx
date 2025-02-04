import { Info } from "./Info"

function App() {

  return (
    <>
      <h1>CV Application</h1>

      <div className="flex flex-col gap-8">
      <Info label={"Name"} defalutValue={"Mike"}/>
      <Info label={"Mail"} defalutValue={"mike.is.not.real@gmail.com"} type={"email"}/>
      <Info label={"Phone"} defalutValue={"987654321"} type={"phone"}/>
      </div>

      <h2 className="mt-5vh">Educational Experience</h2>
    </>
  )
}

export default App
