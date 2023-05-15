// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Thống kê',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Trạm mù cang chải',
    path: '/dashboard/mcc',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Trạm Khau Phạ',
    path: '/dashboard/kp',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Trạm Chế Tạo',
    path: '/dashboard/ct',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
