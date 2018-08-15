export default {
    namespace: 'inputs',
    state: {
      input: 'test',
    },
    reducers: {
      change(state, { payload: name }){
        return  {input: name}
      },
    },
  };