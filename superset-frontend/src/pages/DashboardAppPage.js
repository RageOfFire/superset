import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Card, CardHeader, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Superset map </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Chào mừng quay trở lại
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            {/* <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            /> */}
            <Card>
              <CardHeader title="Thống kê lượng mưa trạm Mù Cang Chải" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                  <iframe
                    title="Thống kê lượng mưa trạm Mù Cang Chải"
                    width="600"
                    height="400"
                    seamless
                    src="http://localhost:8088/superset/explore/p/9mD6Zo8PnYv/?standalone=1&height=400"
                  />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="Thống kê lượng mưa trạm Mù Cang Chải" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                  <iframe
                    title="Thống kê lượng mưa trạm Mù Cang Chải"
                    width="280"
                    height="400"
                    seamless
                    src="http://localhost:8088/superset/explore/p/9w5PkwzPD6d/?standalone=1&height=400"
                  />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
