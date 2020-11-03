import React from "react";
import { InputLeftElement, InputGroup, Input } from "@chakra-ui/core";
import { FaSearch } from "react-icons/fa";
interface IProps {
  value?: string;
  onChange: (value: any) => void;
}
export const SearchBox: React.FC<IProps> = (props: IProps) => {
  return (
    <InputGroup maxWidth="80%" aria-label="search-input-container">
      <InputLeftElement
        pointerEvents="none"
        padding="0"
        children={<FaSearch color="#a0aecc" />}
      />
      <Input
        type="text"
        value={props.value}
        placeholder="Enter the character name..."
        onChange={(e) => props.onChange(e.target.value)}
        aria-label="search-input"
      />
    </InputGroup>
  );
};
