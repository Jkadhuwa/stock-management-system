
const roles = {
  waiter: {
    profile: {
      'read:own': ['*'],
      'update:own': ['*', '!role']
    }
  },
  superAdmin: {
    $extend: ['waiter'],
    product: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*']
    },
    price: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*']
    },
    incomingStock: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*']
    },
    sale: {
      'create:any': ['*'],
      'read:any': ['*'],
      'update:any': ['*'],
      'delete:any': ['*']
    }
  }
};

export default roles;
