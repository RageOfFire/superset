import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// @mui
import {
  Card,
  CardHeader,
  Box,
  Grid,
  Table,
  Stack,
  Paper,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'main_id', label: 'id', alignRight: false },
  { id: 'stationId', label: 'StationId', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'time', label: 'Time', alignRight: false },
  { id: 'source', label: 'Source', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_data) => _data.id.toString().indexOf(query.toString()) !== -1);
    // return query;
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function DataPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('main_id');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get('http://localhost:8000/api/khaupha/')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteData = async (id) => {
    // console.log(id);
    await axios
      .delete(`http://localhost:8000/api/khaupha/${id}`)
      .then((res) => {
        console.log(res.data);
        fetchData()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Reload data
  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const filteredUsers = applySortFilter(data, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Khau Phạ </title>
      </Helmet>

      <Grid container spacing={3} sx={{ mb: 5 }}>
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
        </Grid>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Thông tin lượng mưa trạm Khau Phạ
          </Typography>
          <Link style={{ textDecoration: 'none' }} to={`add`}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              Thêm
            </Button>
          </Link>
        </Stack>

        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={data.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, stationId, amount, time, source } = row;
                    const selectedUser = selected.indexOf(id) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, id)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="subtitle2" noWrap>
                              {id}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{stationId}</TableCell>

                        <TableCell align="left">{amount}</TableCell>

                        <TableCell align="left">{time}</TableCell>

                        <TableCell align="left">{source}</TableCell>

                        <TableCell align="right">
                          {/* <IconButton aria-describedby={id} size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton> */}
                          <Link style={{ textDecoration: 'none', color: 'black' }} to={`edit/${id}`}>
                          <MenuItem>
                            <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                            Edit
                          </MenuItem>
                          </Link>

                          <MenuItem sx={{ color: 'error.main' }} onClick={() => deleteData(id)}>
                            <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                            Delete
                          </MenuItem>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                p: 1,
                width: 140,
                '& .MuiMenuItem-root': {
                  px: 1,
                  typography: 'body2',
                  borderRadius: 0.75,
                },
              },
            }}
          >
            <MenuItem>
              <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
              Edit
            </MenuItem>

            <MenuItem sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
              Delete
            </MenuItem>
          </Popover>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 30]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </>
  );
}
