import axios from 'axios';

const apiBasePath = 'https://opendata.reseaux-energies.fr/api/records/1.0/search/?dataset=eco2mix-regional-cons-def&facet=libelle_region&facet=nature&facet=date_heure';

function getRequest(url: string) {
  return axios.request({
    method: 'GET',
    url: apiBasePath + url,
  });
}
function postRequest(url: string, body: any) {
  return axios.request({
    method: 'POST',
    url: apiBasePath + url,
    data: body,
  });
}

export { getRequest, postRequest };
