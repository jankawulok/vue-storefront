import { setup } from '@jkawulok/prestashop-api';

const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');

export default function init() {
  setup(moduleOptions);
}
