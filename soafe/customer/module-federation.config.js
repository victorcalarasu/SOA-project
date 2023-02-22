module.exports = {
  name: 'customer',
  exposes: {
    './Module': 'customer/src/app/remote-entry/entry.module.ts',
  },
};
