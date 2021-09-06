import React, { useState } from "react"
import useDebounce from "../../hooks/useDebounce"

export const PokeFilter = ({ value, onChange}) => {
  const [ displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500)

  function handlerChange(evn) {
    setDisplayValue(evn.target.value)
    debouncedChange(evn.target.value)
  }
  return (
    <input type="search" value={displayValue} onChange={handlerChange}/>
  )
}