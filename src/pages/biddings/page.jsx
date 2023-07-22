import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Loading from "@/components/Loading";
import Table from "../../components/biddings/dataTable/index";

function Biddings() {
  const [dataGovernment, setDataGovernment] = useState([] || null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [inputTextSearch, setInputTextSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const Items = Table.FilterItems(
          await Table.Actions.fetchData(),
          filterText
        );
        setDataGovernment(Items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filterText]);

  function buttonFilterData() {
    setIsLoading(true);
    setFilterText(inputTextSearch);
  }

  function inputFilterData(e) {
    setInputTextSearch(e.target.value);
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setIsLoading(true);
        setFilterText("");
      }
      setIsLoading(true);
      setFilterText(inputTextSearch);
    }
  }

  async function deleteBiddings(code) {
    try {
      setIsLoading(true);
      await Table.Actions.delete(code);
      setFilterText(code);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Table.Header
        title={"Licitações"}
        OnclickSearch={() => buttonFilterData()}
        value={inputTextSearch}
        OnKeyDown={(e) => inputFilterData(e)}
      />
      {!isLoading ? (
        <div>
          <DataTable
            pagination={true}
            responsive={true}
            data={Table.Rows(dataGovernment, deleteBiddings)}
            columns={Table.Columns}
            customStyles={Table.CustomStyles}
            conditionalRowStyles={Table.RowsStyles}
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
