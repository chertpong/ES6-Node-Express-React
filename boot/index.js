import cakeBoot from './cake.boot';

const boot = () => {
  cakeBoot.then(data => console.log('Done initializing data'))
            .catch(err => console.error(err));
};

export default boot;