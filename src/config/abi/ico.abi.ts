export const IcoAbi: any = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_goldyOracle",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_usdc",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_usdt",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_euroc",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "enum ICO.Currency",
                "name": "currency",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "goldyAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "aml",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "message",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "goldBarNumber",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "goldBarWeight",
                "type": "string"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "enum ICO.Currency",
                "name": "_currency",
                "type": "uint8"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyTokenPayable",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_startDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maximumToken",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_isAmlActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "_amlCheck",
                "type": "uint256"
            }
        ],
        "name": "createSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "enum ICO.Currency",
                "name": "",
                "type": "uint8"
            }
        ],
        "name": "currencyAddresses",
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
        "name": "getCurrentSaleDetails",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maximumToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "soldToken",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isAmlActive",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amlCheck",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ICO.Sale",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "goldBarNumber",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "goldBarWeight",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "goldyOracle",
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
        "name": "maxTokenSale",
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
        "name": "sales",
        "outputs": [
            {
                "internalType": "address",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maximumToken",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "soldToken",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isActive",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isAmlActive",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "amlCheck",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "toggleAmlStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "toggleSaleStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amlCheck",
                "type": "uint256"
            }
        ],
        "name": "updateAmlCheck",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_goldBarNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_goldBarWeight",
                "type": "string"
            }
        ],
        "name": "updateGoldBarDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_maxToken",
                "type": "uint256"
            }
        ],
        "name": "updateMaxToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_maxTokenSale",
                "type": "uint256"
            }
        ],
        "name": "updateMaxTokenSale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_hashedMessage",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "_v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "_r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_s",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "enum ICO.Currency",
                "name": "_currency",
                "type": "uint8"
            }
        ],
        "name": "verifiedBuyToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_hashedMessage",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "_v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "_r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_s",
                "type": "bytes32"
            }
        ],
        "name": "verifiedBuyTokenPayable",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_hashedMessage",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "_v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "_r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_s",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "verifyMessage",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
];
