import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// sections
import { KPAddForm } from '../../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {

  return (
    <>
      <Helmet>
        <title> Thêm </title>
      </Helmet>

      <StyledRoot>


        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Thêm
            </Typography>

            <KPAddForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
