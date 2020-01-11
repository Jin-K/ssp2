import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Player',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'See all',
        link: 'player',
      },
      {
        title: 'Add',
        link: 'player/edit',
      },
    ],
  },
];
