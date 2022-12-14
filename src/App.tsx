import Square from "./Square"
import { useState, useContext } from "react";
import { PawnMove_W, PawnMove_B } from "./PawnMove";
import { PieceTheme } from "./PieceTheme";
import { TurnContext } from "./context/Turn";


const Y_AXE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const X_AXE = ['1', '2', '3', '4', '5', '6', '7', '8']



function App() {
  const [position, setPosition] = useState<string | null>(null)
  const {whiteToPlay} = useContext(TurnContext)

  const handleClick = async (actualPosition : string) => { 
       console.log("POSITION" ,position);
        
               
        if (position != null) {
          if (whiteToPlay) {
            await PawnMove_W(position, actualPosition)
            setPosition(null)
          } else {
            await PawnMove_B(position, actualPosition)
            setPosition(null)
          }
        }
        else {
          if(PieceTheme.some(e => e.position === actualPosition))
            setPosition(actualPosition) 
        } 
     }
  return (
   <div className='flex justify-center items-center mx-10 my-5'>
      <div className='grid overflow-hidden grid-cols-8 grid-rows-8 gap-0 w-96 h-96 border-2 border-black'>
      {/* <InitialBoard /> */}
      {X_AXE.map(e => 
        Y_AXE.map(element => 
          {
              const bg = (element === 'a' || element === 'c' || element === 'e' || element === 'g') && Number(e) % 2 === 0 || (element === 'b' || element === 'd' || element === 'f' || element === 'h') && Number(e) % 2 !== 0

                return (
                    <Square positionSquare={`${element}${e}`} background={bg ? 'beige' : 'green' } onClick={() => handleClick(`${element}${e}`)} />
                )
            }))}
    </div>
   </div>
  )
}

export default App
