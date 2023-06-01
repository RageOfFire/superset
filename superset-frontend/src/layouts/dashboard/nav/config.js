// component
import { Home, BarChart } from '@mui/icons-material';
// import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Trang chủ',
    path: '/dashboard/app',
    icon: <Home />,
  },
  {
    title: 'Trạm mù cang chải',
    path: '/dashboard/mcc',
    icon: <BarChart />,
  },
  {
    title: 'Trạm Khau Phạ',
    path: '/dashboard/kp',
    icon: <BarChart />,
  },
  {
    title: 'Trạm Chế Tạo',
    path: '/dashboard/ct',
    icon: <BarChart />,
  },
];

export default navConfig;
