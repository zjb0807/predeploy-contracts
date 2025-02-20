/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Homa, HomaInterface } from "../../../contracts/homa/Homa";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "fastMatch",
        type: "bool",
      },
    ],
    name: "RequestedRedeem",
    type: "event",
  },
  {
    inputs: [],
    name: "getCommissionRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEstimatedRewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFastMatchFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "fastMatch",
        type: "bool",
      },
    ],
    name: "requestRedeem",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061071a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063c18290dd11610050578063c18290dd146100c8578063d313f77e146100d0578063e6aa216c146100d857600080fd5b80633e4eb36c1461007757806350f9c24514610092578063a0712d68146100b5575b600080fd5b61007f6100e0565b6040519081526020015b60405180910390f35b6100a56100a036600461064e565b6101ba565b6040519015158152602001610089565b6100a56100c3366004610683565b61036b565b61007f610507565b61007f610574565b61007f6105e1565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3e4eb36c000000000000000000000000000000000000000000000000000000001790529051600091829182916104079161014d919061069c565b600060405180830381855afa9150503d8060008114610188576040519150601f19603f3d011682016040523d82523d6000602084013e61018d565b606091505b5090925090508161019f573d60208201fd5b808060200190518101906101b391906106cb565b9250505090565b60008260000361022b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f486f6d613a2072656465656d416d6f756e74206973207a65726f00000000000060448201526064015b60405180910390fd5b604051336024820152604481018490528215156064820152600090819061040790608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc941744a00000000000000000000000000000000000000000000000000000000179052516102d0919061069c565b6000604051808303816000865af19150503d806000811461030d576040519150601f19603f3d011682016040523d82523d6000602084013e610312565b606091505b50909250905081610324573d60208201fd5b60408051868152851515602082015233917f982867307a227b336c567c7a2aadffd8b9b349a837bfb422794d8b5899f78f79910160405180910390a2506001949350505050565b6000816000036103d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f486f6d613a206d696e74416d6f756e74206973207a65726f00000000000000006044820152606401610222565b60405133602482015260448101839052600090819061040790606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f40c10f190000000000000000000000000000000000000000000000000000000017905251610474919061069c565b6000604051808303816000865af19150503d80600081146104b1576040519150601f19603f3d011682016040523d82523d6000602084013e6104b6565b606091505b509092509050816104c8573d60208201fd5b60405184815233907f30385c845b448a36257a6a1716e6ad2e1bc2cbe333cde1e69fe849ad6511adfe9060200160405180910390a25060019392505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc18290dd000000000000000000000000000000000000000000000000000000001790529051600091829182916104079161014d919061069c565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fd313f77e000000000000000000000000000000000000000000000000000000001790529051600091829182916104079161014d919061069c565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe6aa216c000000000000000000000000000000000000000000000000000000001790529051600091829182916104079161014d919061069c565b6000806040838503121561066157600080fd5b823591506020830135801515811461067857600080fd5b809150509250929050565b60006020828403121561069557600080fd5b5035919050565b6000825160005b818110156106bd57602081860181015185830152016106a3565b506000920191825250919050565b6000602082840312156106dd57600080fd5b505191905056fea264697066735822122095af2506f9241235cc9f34ab889bdd18f0643e1c20bec89d0663c120ebe716a764736f6c63430008120033";

type HomaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HomaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Homa__factory extends ContractFactory {
  constructor(...args: HomaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Homa> {
    return super.deploy(overrides || {}) as Promise<Homa>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Homa {
    return super.attach(address) as Homa;
  }
  override connect(signer: Signer): Homa__factory {
    return super.connect(signer) as Homa__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HomaInterface {
    return new utils.Interface(_abi) as HomaInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Homa {
    return new Contract(address, _abi, signerOrProvider) as Homa;
  }
}
