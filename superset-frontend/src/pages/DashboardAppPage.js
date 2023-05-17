import { Helmet } from 'react-helmet-async';
// @mui
import { Grid, Container, Typography, Card, CardHeader, Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

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
            <Card>
              <CardHeader title="trạm Mù Cang Chải" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Mù Cang Chải"
                  width="600"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/ownB4nVPqKQ/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="trạm Mù Cang Chải" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Mù Cang Chải"
                  width="280"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/v3MZlKxBemo/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <CardHeader title="trạm Khau Phạ" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Khau Phạ"
                  width="600"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/zbmPOLMpxq8/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="trạm Khau phạ" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Khau Phạ"
                  width="280"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/03dP0KLZqnA/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Card>
              <CardHeader title="trạm Chế Tạo" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Chế tạo"
                  width="600"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/MkOZ9lLBwoV/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title="trạm Chế Tạo" />

              <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <iframe
                  title="trạm Chế tạo"
                  width="280"
                  height="400"
                  seamless
                  src="http://localhost:8088/superset/explore/p/0Njpb7ABdez/?standalone=1&height=400"
                />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
