import Square from "./Square"
import { useState, useCallback } from "react";
import { PieceTheme } from "./PieceTheme";
import { MovePiecesWhite } from "./Move/MovePiecesWhite";
import { MovePiecesBlack } from "./Move/MovePiecesBlack";
import { TimerWhite } from "./Timer/TimerWhite";
import { TimerBlack } from "./Timer/TimerBlack";
import {useTurn} from "./store/store";



const Y_AXE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const X_AXE = ['1', '2', '3', '4', '5', '6', '7', '8']


function App() {
  const [position, setPosition] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const playWhite = useTurn(state => state.show)

  const handleClick = async (actualPosition: string) => {
    if (position != null && name != null) {
      if (playWhite) {
        await MovePiecesWhite(name, position, actualPosition)
        setPosition(null)
        setName(null)
      } else {
        await MovePiecesBlack(name, position, actualPosition)
        setPosition(null)
        setName(null)
      }
    }
    else {
      const find = PieceTheme.find(e => e.position === actualPosition)
      if (find !== undefined) {
        setPosition(actualPosition)
        setName(find.name)
      }
    }
  }
  return (
    <div className='flex justify-center items-center mx-10 my-5'>
      <div className="flex flex-col"> 
        <TimerWhite/>
        <TimerBlack/>
      </div>
      <div className='grid overflow-hidden grid-cols-8 grid-rows-8 gap-0 w-96 h-96 border-2 border-black'>
        {/* <InitialBoard /> */}
        {X_AXE.map(e =>
          Y_AXE.map(element => {
            const bg = (element === 'a' || element === 'c' || element === 'e' || element === 'g') && Number(e) % 2 === 0 || (element === 'b' || element === 'd' || element === 'f' || element === 'h') && Number(e) % 2 !== 0

            return (
              <Square positionSquare={`${element}${e}`} background={bg ? 'beige' : 'green'} onClick={() => handleClick(`${element}${e}`)} key={`${element}${e}`}/>
            )
          }))}
      </div>
    </div>
  )
}

export default App
