export const VestingAbi: any = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "period",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "cliff",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "periodBP",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint16",
                "name": "firstReleaseInBP",
                "type": "uint16"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "LockToken",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_vestingPoolIdTracker",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint32",
                        "name": "period",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "cliff",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "periodBP",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "releasedBP",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "firstReleaseInBP",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "contract IERC20",
                        "name": "token",
                        "type": "address"
                    }
                ],
                "internalType": "struct Vesting.VestingPool",
                "name": "vestingPool",
                "type": "tuple"
            }
        ],
        "name": "availableToWithdraw",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "period",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "cliff",
                "type": "uint32"
            },
            {
                "internalType": "uint16",
                "name": "periodBP",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "firstReleaseInBP",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            }
        ],
        "name": "create",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserVestingPoolIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isVestingActive",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "toggleVestingStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalVestedTokenAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vestingIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vestingPools",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "period",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "cliff",
                "type": "uint32"
            },
            {
                "internalType": "uint16",
                "name": "periodBP",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "releasedBP",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "firstReleaseInBP",
                "type": "uint16"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "vestingPoolId",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "vestingPoolId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawWithSpecificAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];