import React from 'react'

function Die({isHeld,value,hold,id}) {
  const buttonStyle = isHeld ? {backgroundColor: "#59E391"} : {}
  return (
    <button style={buttonStyle} onClick={()=>hold(id)}>
      {value}
    </button>
  )
}

export default Die
