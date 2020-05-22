import React from "react"

export const Cube = () => {
  return (
    <div id='cube--background'>
      <div id='cube'>
        <div className='wall cube--front'>
          M<sup>H</sup>
        </div>
        <div className='wall cube--back'>
          M<sup>H</sup>
        </div>
        <div className='wall cube--top'>
          {" "}
          M<sup>H</sup>
        </div>
        <div className='wall cube--bottom'>
          M<sup>H</sup>
        </div>
        <div className='wall cube--left'>
          M<sup>H</sup>
        </div>
        <div className='wall cube--right'>
          M<sup>H</sup>
        </div>
      </div>
    </div>
  )
}
