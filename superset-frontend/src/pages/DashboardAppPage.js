import '../app.css';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Card, Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// ----------------------------------------------------------------------

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 0],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function DashboardAppPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get('http://localhost:8000/api/map/')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Reload data
  useEffect(() => {
    fetchData().catch(console.error);
  }, []);
  return (
    <>
      <Helmet>
        <title> Superset map </title>
      </Helmet>
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Chào mừng quay trở lại
        </Typography> */}

        <Grid container spacing={3} sx={{ mb: 5 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <MapContainer center={[21.8048, 104.0659]} zoom={12} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {data.map((item) => (
                    <Marker position={[item.y, item.x]}>
                      <Popup>
                        <h2>{item.trạm}</h2>
                        <p>Lượng mưa: {item.mua}</p>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
