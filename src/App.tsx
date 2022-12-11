import Square from "./Square"


const X_AXE = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const Y_AXE = ['1', '2', '3', '4', '5', '6', '7', '8']



function App() {
  return (
   <div className='flex justify-center items-center mx-10 my-5'>
      <div className='grid overflow-hidden grid-cols-8 grid-rows-8 gap-0 w-96 h-96 border-2 border-black'>
      {/* <InitialBoard /> */}
      {X_AXE.map(e => 
        Y_AXE.map(element => 
          {
              const bg = (e === 'a' || e === 'c' || e === 'e' || e === 'g') && Number(element) % 2 === 0 || (e === 'b' || e === 'd' || e === 'f' || e === 'h') && Number(element) % 2 !== 0

                return (
                    <Square positionSquare={`${e}${element}`} background={bg ? 'green' : 'beige' } />
                )
            }))}
    </div>
   </div>
  )
}

export default App
