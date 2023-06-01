import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, TextField, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, StaticDateTimePicker } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

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

dayjs.extend(utc)
dayjs.extend(timezone)

const tz = "Asia/Ho_Chi_Minh";

export default function AddForm() {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [stationId, setStationId] = useState(0);
  const [time, setTime] = useState(dayjs(new Date()).tz(tz));
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState('import');

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
          <StaticDateTimePicker orientation="landscape" value={time} onChange={(e) => setTime(dayjs(e.target.value).tz(tz))} />
        </LocalizationProvider>
        <TextField type="number" name="amount" label="Số lượng" onChange={(e) => setAmount(e.target.value)} />
        <TextField
          select
          label="Chọn"
          value={source}
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
