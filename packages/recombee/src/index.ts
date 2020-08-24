import useProduct from './composables/useProduct';
import recombee from 'recombee-js-api-client';


interface SetupConfig {
  dbName: string;
  token: string;
}

let client: recombee.ApiClient = null;

const setup = (setupConfig: SetupConfig) => {
  client =  new recombee.ApiClient(setupConfig.dbName, setupConfig.token);
  return { client };
};

export {
  setup,
  recombee,
  useProduct,
  client
}
