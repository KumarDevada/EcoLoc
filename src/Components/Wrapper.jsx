import React from 'react'

const Wrapper = ({children , classname}) => {
  return (
    <div className={`w-full relative max-w-[1500px] px-5 md:px-10 mx-auto ${classname || "" }`}>{children}</div>
  )
}

export default Wrapper