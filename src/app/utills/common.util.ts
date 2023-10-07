export const getCurrency = (value: number): string | undefined => {
    const currencyMap: { [key: number]: string } = {
        1: 'USDT',
        0: 'USDC',
        2: 'ETH',
        3: 'EUROC'
    };

    return currencyMap[value];
};
