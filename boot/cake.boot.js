import Cake from './../route/model/cake/cake';

const remove = new Promise( (resolve,reject) => {
  Cake
    .remove({})
    .then(data => {
      console.log('[-]' + ' Cake removed status : ' + (data.result.ok ? 'success' : 'fail') );
      return resolve();
    })
    .catch(err => reject(err));
});


const add = new Promise((resolve,reject) => {
  Cake
    .create({
      name:'Black forest',
      price:1000.00,
      description:'Best cake ever',
      thumbnail:'/images/black-forest-cake.jpg',
      tags:[
        'Chocolate','Cake'
      ],
        pictures: []
    })
    .then( cake => {
      console.log('[+] Cake : '+ cake.name);
      return resolve(cake);
    })
    .catch(err => reject(err));
});

export default new Promise((resolve,reject) => {
   remove.then(() => add )
          .then( cake => resolve(cake))
          .catch(err => reject(err));
});