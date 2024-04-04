import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import PaginationInput from "./PaginationInput/PaginationInput";
import axios from "axios";
import OrderSelector from "./OrderSelector/OrderSelector";
import SortSelector from "./SortSelector/SortSelector";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";

function App() {
  const [pageSize, setPageSize] = useState(10);
  const [order, setOrder] = useState("desc");
  const [sort, setSort] = useState("popular");
  const [itemList, setItemList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getItems = async () => {
    try {
      const reponse = await axios.get(
        `https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
      );
      setItemList(reponse.data.items);
    } catch (e) {
      const errorMessage = e.response.data.error_message;
      toast.error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getItems();
  }, [pageSize, order, sort]);

  return (
    <div>
      {isLoading && <Loader />}
      <Grid
        container
        spacing={15}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <PaginationInput setPageSize={setPageSize} />
        </Grid>
        <Grid item>
          <OrderSelector setOrder={setOrder} order={order} />
        </Grid>
        <Grid item>
          <SortSelector setSort={setSort} sort={sort} />
        </Grid>
      </Grid>
      <ItemList itemList={itemList} />
      <ToastContainer />
    </div>
  );
}

export default App;
