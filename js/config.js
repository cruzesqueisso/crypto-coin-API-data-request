const api = {
    key: 'be15aba2-c5e4-420b-9e44-926542aee786',
    baseUrl: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&CMC_PRO_API_KEY=',
    url: function () { return `${this.baseUrl}${this.key}` }
};