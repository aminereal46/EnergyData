const endPoints = {
  DataList: (firstRow, size, filter) => {
    let regionsQueriesStr = '';
    let natureQueriesStr = '';
    filter.selectedRegions.forEach((region) => { regionsQueriesStr += `&refine.libelle_region=${region}`; });
    filter.selectedNature.forEach((nature) => { natureQueriesStr += `&refine.nature=${nature}`; });
    return `&start=${firstRow}&rows=${size}${regionsQueriesStr}${natureQueriesStr}`;
  },
};

export default endPoints;
