import {ethers} from "ethers";

export const getCurrency = (value: number): string | undefined => {
    const currencyMap: { [key: number]: string } = {
        1: 'USDT',
        0: 'USDC',
        2: 'ETH',
        3: 'EUROC'
    };

    return currencyMap[value];
};

export const formatEtherToFloat = (value: any) => {
    return parseFloat(ethers.formatUnits(String(value)));
}

export const formatNumber = (number: number) => {
    const numberStr = number.toFixed(2); // Ensure two decimal places
    const [integerPart, decimalPart] = numberStr.split('.');
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formattedIntegerPart}.${decimalPart}`;}