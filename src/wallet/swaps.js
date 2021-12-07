import {MAINNET, RINKEBY, ROPSTEN} from "./networks";

const buyLinks = {
    [MAINNET]: null,
    [ROPSTEN]: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x29E4d6c08e3AD060Dc2fC8DCE70AaB8C8c57563F',
    [RINKEBY]: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x7D68ECf1762bA27120d0f98BFcFa0da67eb15860',
}

const lpv3 = {
    [MAINNET]: {
        DAIETH: '0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8',
    },
    [ROPSTEN]: {
        ETH: '0x596B3535C42B6ff7dfF16EdE1f9DfC7e0CA5828A',
        DAIETH: '0x40FDe2952a0674a3E77707Af270af09800657293',
    },
    [RINKEBY]: {
        ETH: '0x7393853a7B478bE670B69ead8c3AA2b2D44C7CBC',
    },
}

export { buyLinks, lpv3 }
