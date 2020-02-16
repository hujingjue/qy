const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use([
    proxy(
        '/home', { 
         target: 'https://m.qyer.com' ,
         changeOrigin: true,
      }),
      proxy(
        '/plan', { 
            target: 'https://dpl.qyer.com' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/feeds', { 
            target: 'https://m.qyer.com' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/api', { 
            target: 'http://localhost:9000' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/ajaxGetProductsTabs', { 
            target: 'https://dpl.qyer.com/z' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/ajaxGetCategoryMem', { 
            target: 'https://dpl.qyer.com/z' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/ask', { 
            target: 'https://m.qyer.com' ,
            changeOrigin: true,
         }
      ),
      proxy(
        '/bbs', { 
            target: 'https://m.qyer.com' ,
            changeOrigin: true,
         }
      )
  ]);
};