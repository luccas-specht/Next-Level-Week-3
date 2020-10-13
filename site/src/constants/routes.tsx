import { Landing } from '../ui/pages';

const paths = {
  initialRoute: () => '/',
};

const components = {
  leading: Landing
};

const routers = [
  {
    path: paths.initialRoute(),
    component: components.leading,
    isPublic: true,
  },
];

export { routers };