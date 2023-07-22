const filterItems = (dataGovernment, filterText) => {
  return dataGovernment.filter((item) =>
    [
      item._id,
      item.process_data.bidding_notice,
      item.process_data.portal.name,
      item.process_data.status.name,
      item.government[0].name,
      new Date(item.process_data.date_finish).toLocaleDateString(),
    ].some((prop) => prop.toLowerCase().includes(filterText.toLowerCase()))
  );
};
export default filterItems;
