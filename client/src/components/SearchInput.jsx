import { useRef } from "react";

export const SearchInput = ({ handleFilterClick }) => {
  const inputRef = useRef();

  return (
    <>
      <input placeholder="Enter the job title" ref={inputRef} />
      <button onClick={() => handleFilterClick(inputRef.current.value)}>Search</button>
    </>
  );
};
