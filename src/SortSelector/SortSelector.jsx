import { InputLabel, MenuItem, Select } from "@mui/material";

const SortSelector = ({ setSort, sort }) => {
  return (
    <div>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <MenuItem value="popular">Popularity</MenuItem>
        <MenuItem value="activity">Activity</MenuItem>
        <MenuItem value="name">Name</MenuItem>
      </Select>
    </div>
  );
};

export default SortSelector;
