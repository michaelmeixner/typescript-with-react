import React from "react";

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
  }
  
  export const TextField: React.FC<Props> = () => {
    return(
      <div>
        <input />
      </div>
    );
  };