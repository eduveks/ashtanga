const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
       '@body-background': '#1c1c1c',
       '@component-background': '#1c1c1c',
       '@primary-color': '#ffb200',
       '@primary-color-hover': '#ff7300',
       '@primary-color-active': '#fdf000',
       '@primary-color-outline': '#fde200',
       '@heading-color': '#eaeaea',
       '@text-color': '#eaeaea',
       '@text-color-secondary': '#cecece',
       '@text-color-inverse': '#1c1c1c',
       '@text-color-dark': '#0b0b0b',
       '@text-color-secondary-dark': '#1c1c1c',
       '@layout-header-background': '#ffffff',
       '@font-size-base': '16px',
       '@border-radius-base': '20px'
      },
    },
  }),
);

