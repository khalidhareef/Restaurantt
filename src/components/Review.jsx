import React, { useRef , useState} from 'react'

function Review() {
    const input=useRef()
    const [count, setcount] = useState(0);
  
    const handleclick=()=>{
        input.current.style.height='300px'
    }
  return (
    <div>
        <p>increse {count} times</p>
        <button onClick={()=>setcount(count+1)}>clike mee</button>
<input type="text" ref={input} />
<button onClick={handleclick}>click</button>

</div>
  )
}

export default Review