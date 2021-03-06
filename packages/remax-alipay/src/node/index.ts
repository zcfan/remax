import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { RemaxNodePluginConstructor, Entries } from 'remax-types';

const TPL_DEFAULT_ROOT = path.join(__dirname, '../../templates', 'default');
const TPL_STATIC_ROOT = path.join(__dirname, '../../templates', 'static');

const plugin: RemaxNodePluginConstructor = () => {
  return {
    name: 'remax-alipay',
    meta: {
      template: {
        extension: '.axml',
        tag: 'import',
        src: 'src',
      },
      style: '.acss',
      jsHelper: {
        extension: '.sjs',
        tag: 'import-sjs',
        src: 'from',
      },
      ejs: {
        base: '',
        page: path.join(TPL_DEFAULT_ROOT, 'page.ejs'),
      },
      staticEjs: {
        base: '',
        page: path.join(TPL_STATIC_ROOT, 'page.ejs'),
      },
    },
    hostComponents,
    getEntries({ remaxOptions, appManifest, getEntryPath }) {
      const ROOT_DIR = path.join(remaxOptions.cwd, remaxOptions.rootDir);
      const { pages, subPackages = [], tabBar = { items: [] } } = appManifest;

      if (!pages || pages.length === 0) {
        throw new Error('app.config.js|ts 并未配置页面参数');
      }

      const entries: Entries = {
        app: '',
        pages: [],
        images: [],
      };

      // 页面
      entries.pages = pages.reduce(
        (ret: string[], page: string) => [...ret, getEntryPath(path.join(ROOT_DIR, page))].filter(page => !!page),
        []
      );

      // 分包页面
      subPackages.forEach((pack: { pages: string[]; root: string }) => {
        entries.pages = entries.pages.concat(
          pack.pages.reduce(
            (ret: string[], page) =>
              [...ret, getEntryPath(path.join(ROOT_DIR, pack.root, page))].filter(page => !!page),
            []
          )
        );
      });

      // tabbar 中的图片
      entries.images = (tabBar?.items || [])
        .reduce((images: string[], tab: any) => [...images, tab.icon, tab.activeIcon], [])
        .filter((image: any) => !!image && !/^http(s?):\/\//.test(image))
        .reduce<string[]>((paths, image) => [...paths, path.join(ROOT_DIR, image)], []);

      return entries;
    },
    shouldHostComponentRegister: ({ componentName }) => {
      return componentName !== 'swiper-item' && componentName !== 'picker-view-column';
    },
  };
};

export default plugin;
