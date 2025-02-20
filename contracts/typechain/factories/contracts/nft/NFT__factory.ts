/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { NFT, NFTInterface } from "../../../contracts/nft/NFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "classId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61055161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063095bcdb61461005057806370a0823114610072578063d9dad80d14610098575b600080fd5b81801561005c57600080fd5b5061007061006b36600461043b565b6100d0565b005b610085610080366004610470565b6101eb565b6040519081526020015b60405180910390f35b6100ab6100a6366004610494565b610307565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008f565b60405133602482015273ffffffffffffffffffffffffffffffffffffffff84166044820152606481018390526084810182905260009081906104019060a401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0411b252000000000000000000000000000000000000000000000000000000001790525161019091906104b6565b6000604051808303816000865af19150503d80600081146101cd576040519150601f19603f3d011682016040523d82523d6000602084013e6101d2565b606091505b509092509050816101e4573d60208201fd5b5050505050565b60405173ffffffffffffffffffffffffffffffffffffffff821660248201526000908190819061040190604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f70a08231000000000000000000000000000000000000000000000000000000001790525161029991906104b6565b600060405180830381855afa9150503d80600081146102d4576040519150601f19603f3d011682016040523d82523d6000602084013e6102d9565b606091505b509092509050816102eb573d60208201fd5b808060200190518101906102ff91906104e5565b949350505050565b60405160248101839052604481018290526000908190819061040190606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fd9dad80d00000000000000000000000000000000000000000000000000000000179052516103a791906104b6565b600060405180830381855afa9150503d80600081146103e2576040519150601f19603f3d011682016040523d82523d6000602084013e6103e7565b606091505b509092509050816103f9573d60208201fd5b8080602001905181019061040d91906104fe565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461043857600080fd5b50565b60008060006060848603121561045057600080fd5b833561045b81610416565b95602085013595506040909401359392505050565b60006020828403121561048257600080fd5b813561048d81610416565b9392505050565b600080604083850312156104a757600080fd5b50508035926020909101359150565b6000825160005b818110156104d757602081860181015185830152016104bd565b506000920191825250919050565b6000602082840312156104f757600080fd5b5051919050565b60006020828403121561051057600080fd5b815161048d8161041656fea2646970667358221220a93a6bf0a76349f0492f5a128b32d663d83e7beebea01673d30ecfb8f6b8d8a364736f6c63430008120033";

type NFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT__factory extends ContractFactory {
  constructor(...args: NFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFT> {
    return super.deploy(overrides || {}) as Promise<NFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT {
    return super.attach(address) as NFT;
  }
  override connect(signer: Signer): NFT__factory {
    return super.connect(signer) as NFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}
