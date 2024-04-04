import { Button, TextField } from "@mui/material";
import { useState } from "react";

const PaginationInput = ({ setPageSize }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim !== "") {
      setPageSize(parseInt(inputValue));
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <TextField
        id="outlined-basic"
        label="Page size"
        variant="outlined"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></TextField>

      <Button variant="contained" onClick={handleSearch}>
        search
      </Button>
    </div>
  );
};

export default PaginationInput;
