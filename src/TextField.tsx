import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number; // question mark makes field optional
  fn?: (bob: string) => string;
  personObject: Person; //interfaces are basically classes
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string; 
}

export const TextField: React.FC<Props> = ({handleChange}) => {
  const [count, setCount] = useState<TextNode>({text: 'hello'}); // hook is useState
  // const [count, setCount] = useState<{text: string}>({text: 'hello'});
  // const [count, setCount] = useState<number | null | undefined | string>(5);
  // setCount(null);
  setCount({text: 'hello'});

  const inputRef = useRef<HTMLInputElement>(null); // hook is useRef
  const divRef = useRef<HTMLDivElement>(null); // hook is useRef

  return(
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};