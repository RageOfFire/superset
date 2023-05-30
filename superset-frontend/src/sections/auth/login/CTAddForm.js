import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, TextField, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import axios from 'axios';

// ----------------------------------------------------------------------

const sources = [
  {
    value: 'api',
    label: 'api',
  },
  {
    value: 'import',
    label: 'import',
  }
];

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
      .post('http://localhost:8000/api/chetao/', formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
    navigate('/dashboard/ct', { replace: true });
  };

  return (
    <>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField type="number" name="id" label="Mã" onChange={(e) => setId(e.target.value)} />
        <TextField type="number" name="stationId" label="Mã trạm" onChange={(e) => setStationId(e.target.value)} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker onChange={(e) => setTime(e.target.value)} />
        </LocalizationProvider>
        <TextField type="number" name="amount" label="Số lượng" onChange={(e) => setAmount(e.target.value)} />
        <TextField
          select
          label="Chọn"
          defaultValue="import"
          onChange={(e) => setSource(e.target.value)}
        >
          {sources.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={addItem}>
        Thêm
      </LoadingButton>
    </>
  );
}
