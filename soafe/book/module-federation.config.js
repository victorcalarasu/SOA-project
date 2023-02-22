module.exports = {
  name: 'book',
  exposes: {
    './Module': 'book/src/app/remote-entry/entry.module.ts',
  },
};
