import { Button, InputLabel } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const OrderSelector = ({ setOrder, order }) => {
  const handleClick = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
  };

  return (
    <div>
      <InputLabel>Order by</InputLabel>
      <Button
        variant="contained"
        onClick={() => {
          handleClick();
          console.log(order);
        }}
      >
        {order === "desc" ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </Button>
    </div>
  );
};

export default OrderSelector;
