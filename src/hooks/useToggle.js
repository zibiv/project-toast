import React from "react"

function useToggle(init = false) {
  const [value, setValue] = React.useState(init);
  
  const handleToggle = () => {
    setValue(prev => !prev)
  }

  const setToggleStatus = (newStatus) => {
    if(typeof newStatus !== "boolean") return;
    setValue(newStatus)
  }

  return [value, handleToggle, setToggleStatus]
}

export default useToggle