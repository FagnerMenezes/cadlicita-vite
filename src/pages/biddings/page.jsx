import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "../../components/biddings/dataTable/Columns";
import { customStyles } from "@/components/biddings/dataTable/CustomStyle";
import Rows from "@/components/biddings/dataTable/Rows";
import Loading from "@/components/Loading";
import RowsStyles from "@/components/biddings/dataTable/StylesRows";
import HeaderTable from "@/components/biddings/dataTable/HeaderTable";
import { filterItems } from "@/components/biddings/dataTable/FilterItems";
import actions from "@/components/biddings/dataTable/actions";

function Biddings() {
  const [dataGovernment, setDataGovernment] = useState([] || null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [inputTextSearch, setInputTextSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const Items = filterItems(await actions.fetchData(), filterText);
        setDataGovernment(Items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filterText]);

  function buttonFilterData(e) {
    e.preventDefault();
    setIsLoading(true);
    setFilterText(inputTextSearch);
  }

  function inputFilterData(e) {
    setInputTextSearch(e.target.value);
    if (e.key === "Enter") {
      setIsLoading(true);
      setFilterText(inputTextSearch);
    }
  }

  return (
    <>
      <HeaderTable
        title={"Licitações"}
        OnclickSearch={(e) => buttonFilterData(e)}
        value={inputTextSearch}
        OnKeyDown={(e) => inputFilterData(e)}
      />
      {!isLoading ? (
        <div>
          <DataTable
            pagination={true}
            responsive={true}
            data={Rows(dataGovernment)}
            columns={columns}
            customStyles={customStyles}
            conditionalRowStyles={RowsStyles}
            striped={true}
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Biddings;
