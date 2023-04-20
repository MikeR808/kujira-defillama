const { get } = require("../helper/http");
const { sumTokens, } = require('../helper/chain/cosmos');

async function tvl() {
  const owners = [
      "kujira143fwcudwy0exd6zd3xyvqt2kae68ud6n8jqchufu7wdg5sryd4lqtlvvep",
      "kujira1w4yaama77v53fp0f9343t9w2f932z526vj970n2jv5055a7gt92sxgwypf"
  ]



  return sumTokens({ owners, chain: 'kujira' })
}

module.exports = {
  timetravel: false,
  kujira: {
    tvl,
  },
}

