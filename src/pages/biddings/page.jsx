import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Loading from "@/components/Spinner";
import Table from "@/components/biddings/dataTable/Index";
import Modal from "@/components/modal/Modal";
import deleteBidding from "./actions/deleteBiddings";
import Form from "../../components/biddings/form/ContentForm";

function Biddings() {
  const [dataGovernment, setDataGovernment] = useState([] || null);
  const [isLoading, setIsLoading] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [inputTextSearch, setInputTextSearch] = useState("");
  const [open, setIsOpen] = useState(false);

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

  async function deleteBiddings(code, text) {
    try {
      await deleteBidding(code, text);
      setFilterText("");
    } catch (error) {
      console.error(error);
    }
  }

  function handleOpen() {
    setIsOpen(!open);
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
            data={Table.Rows(dataGovernment, deleteBiddings, handleOpen)}
            columns={Table.Columns}
            customStyles={Table.CustomStyles}
            conditionalRowStyles={Table.RowsStyles}
            striped={true}
          />
        </div>
      ) : (
        <Loading />
      )}
      {open && (
        <Modal
          open={open}
          handleOpen={handleOpen}
          title={"Licitações"}
          size={"lg"}
        >
          <Form></Form>
        </Modal>
      )}
    </>
  );
}
export default Biddings;
