import { useContractRead } from 'wagmi';


export const useCustomContractRead = (address: any, abi: any, functionName: any, enable: boolean) => {
    return useContractRead({
        address: address,
        abi: abi,
        functionName,
        enabled: enable
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
