import { useContractRead } from 'wagmi';

export const useCustomContractRead = (address: any, abi: any, functionName: any) => {
    return useContractRead({
        address: address,
        abi: abi,
        functionName,
    });
};
export const useCustomContractReadWithArg = (address: any, abi: any, functionName: any, args: any[]) => {
    return useContractRead({
        address: address,
        abi: abi,
        functionName,
        args: args
    });
};
