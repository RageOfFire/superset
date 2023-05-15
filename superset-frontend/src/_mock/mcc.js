import axios from 'axios'

// ----------------------------------------------------------------------

const data = () => axios.get('http://localhost:8000/api/mucangchai/')
.then(res => {
  console.log(res.data);
  const datas = [...Array(24)].map((_, index) => ({
    id: res.data.id,
    stationId: res.data.stationId,
    time: res.data.time,
    source: res.data.source
  }));
  console.log(datas);
  return datas
})
.catch((error) => {
  console.log(error);
})

export default data;
