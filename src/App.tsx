import Chat from "./components/chat"
import Details from "./components/details"
import List from "./components/list"
import { Card } from "./components/ui/card"



function App() {

  return (
    <main className='w-full h-[100vh] overflow-hidden flex items-center justify-center bg-white'>
      <Card className="w-4/5 h-[90%] flex rounded-xl overflow-hidden">
        <List />
        <Chat />
        <Details />
      </Card>
    </main>
  )
}

export default App
