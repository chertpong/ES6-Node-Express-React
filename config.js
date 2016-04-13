const config = {
  dev: {
    port:3000,
    uploadPath: 'public/upload',
    datasource: 'mongodb://localhost/es6-node-express'
  },
  prod: {
    port:80,
    uploadPath: 'public/upload',
    datasource: 'mongodb://localhost/es6-node-express'
  }
};

export default config; 