import { useNavigate, useParams } from 'react-router-dom';
// @mui
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState, useEffect } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stationId, setStationId] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [data, setData] = useState({});

  const fetchDataById = async () => {
    axios.get(`http://localhost:8000/api/mucangchai/${id}`)
      .then((res) => {
        setStationId(res.data.stationId);
        setTime(res.data.time);
        setAmount(res.data.amount);
        setSource(res.data.source);
      }).catch((error) => {
        console.log(error)
      })
  }

  const editItem = async () => {
    const formData = new FormData();
    formData.append("stationId", stationId);
    formData.append("time", time);
    formData.append("amount", amount);
    formData.append("source", source);
    await axios
      .post(`http://localhost:8000/api/mucangchai/${id}`, formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    navigate('/dashboard/mcc', { replace: true });
  };

  // Reload data
  useEffect(() => {
    fetchDataById().catch(console.error);
  }, []);

  return (
    <>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField name="stationId" label="Mã trạm" onChange={(e) => setStationId(e.target.value)} value={stationId} />
        <TextField name="time" label="Thời gian" onChange={(e) => setTime(e.target.value)} value={time} />
        <TextField name="amount" label="Số lượng" onChange={(e) => setAmount(e.target.value)} value={amount} />
        <TextField name="source" label="Nguồn" onChange={(e) => setSource(e.target.value)} value={source} />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={editItem}>
        Sửa
      </LoadingButton>
    </>
  );
}
