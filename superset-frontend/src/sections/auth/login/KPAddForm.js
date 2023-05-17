import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function AddForm() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [stationId, setStationId] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');

  const addItem = async () => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("stationId", stationId);
    formData.append("time", time);
    formData.append("amount", amount);
    formData.append("source", source);
    await axios
      .post('http://localhost:8000/api/khaupha/', formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    navigate('/dashboard/kp', { replace: true });
  };

  return (
    <>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField name="id" label="Mã" onChange={(e) => setId(e.target.value)} />
        <TextField name="stationId" label="Mã trạm" onChange={(e) => setStationId(e.target.value)} />
        <TextField name="time" label="Thời gian" onChange={(e) => setTime(e.target.value)} />
        <TextField name="amount" label="Số lượng" onChange={(e) => setAmount(e.target.value)} />
        <TextField name="source" label="Nguồn" onChange={(e) => setSource(e.target.value)} />
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={addItem}>
        Thêm
      </LoadingButton>
    </>
  );
}
