import React from 'react'

const Arrow = () => {
  return (
    <>
        <svg style={{
        height: "1.5rem",          // equivalent to `h-6` in Tailwind
        width: "1.5rem",           // equivalent to `w-6` in Tailwind
        color: "#354259"           // equivalent to `text-[#354259]` in Tailwind
    }}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
    </>
  )
}

export default Arrow