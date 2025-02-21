import { useRef } from "react";

export const SearchInput = ({ handleSearchInputChange }) => {
  const inputRef = useRef();

  return (
    <>
      <input placeholder="Enter the job title" ref={inputRef} />
      <button onClick={() => handleSearchInputChange(inputRef.current.value)}>Search</button>
    </>
  );
};
