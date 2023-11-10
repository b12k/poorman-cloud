import { defineStore } from 'pinia';

import { type Context } from '@server';

export const useContextStore = defineStore('context', {
  state(): Context {
    return {} as Context;
  },
});
