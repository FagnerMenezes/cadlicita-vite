import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Loading from "@/components/Loading";
import Table from "../../components/biddings/dataTable/Index";
import Modal from "../../components/modal/index";
import deleteBidding from "./deleteBiddings";

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

  function editBiddings() {
    setIsOpen(true);
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
            data={Table.Rows(dataGovernment, deleteBiddings, editBiddings)}
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
        <Modal.Root>
          <Modal.Body size="sm">
            <Modal.Header>
              <Modal.Icon icons={"warning"} />
              <Modal.Title title={"Licitações"} />
            </Modal.Header>
            <Modal.Content></Modal.Content>
            <Modal.Footer>
              <Modal.Cancel onclose={setIsOpen} text={"Cancelar"} />
            </Modal.Footer>
          </Modal.Body>
        </Modal.Root>
      )}
    </>
  );
}
export default Biddings;
