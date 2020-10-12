import { Landing} from '../ui/pages';

const paths = {
  default: () => '/',
};

const components = {
  leading: Landing
};

const routers = [
  {
    path: paths.default(),
    component: components.leading,
    isPublic: true,
  },
];

export { routers };