import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "./dataTable/Columns";
import { customStyles } from "./dataTable/CustomStyle";
import Rows from "./dataTable/Rows";
import Loading from "../../components/Loading";
import stylesRows from "./dataTable/conditionalRowStyles";
import HeaderTable from "./dataTable/HeaderTable";
import { filterItems } from "./dataTable/FilterItems";
import actions from "./dataTable/actions";

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

  function filterDataTable(e) {
    e.preventDefault();
    setIsLoading(true);
    setFilterText(inputTextSearch);
  }

  function inputFilterText(e) {
    e.preventDefault();
    setInputTextSearch(e.target.value);
  }

  return (
    <>
      <HeaderTable
        title={"Licitações"}
        OnclickSearch={(e) => filterDataTable(e)}
        Onchange={(e) => inputFilterText(e)}
        value={inputTextSearch}
      />
      {!isLoading ? (
        <div>
          <DataTable
            pagination={true}
            responsive={true}
            data={Rows(dataGovernment)}
            columns={columns}
            customStyles={customStyles}
            conditionalRowStyles={stylesRows}
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
