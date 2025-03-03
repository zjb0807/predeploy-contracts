/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface EVMAccountsInterface extends utils.Interface {
  functions: {
    "claimDefaultEvmAddress(bytes32)": FunctionFragment;
    "getAccountId(address)": FunctionFragment;
    "getEvmAddress(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimDefaultEvmAddress"
      | "getAccountId"
      | "getEvmAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimDefaultEvmAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getEvmAddress",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimDefaultEvmAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEvmAddress",
    data: BytesLike
  ): Result;

  events: {
    "ClaimAccount(address,bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimAccount"): EventFragment;
}

export interface ClaimAccountEventObject {
  sender: string;
  accountId: string;
  evmAddress: string;
}
export type ClaimAccountEvent = TypedEvent<
  [string, string, string],
  ClaimAccountEventObject
>;

export type ClaimAccountEventFilter = TypedEventFilter<ClaimAccountEvent>;

export interface EVMAccounts extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EVMAccountsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimDefaultEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAccountId(
      evmAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  claimDefaultEvmAddress(
    accountId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAccountId(
    evmAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getEvmAddress(
    accountId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    claimDefaultEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAccountId(
      evmAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ClaimAccount(address,bytes32,address)"(
      sender?: PromiseOrValue<string> | null,
      accountId?: PromiseOrValue<BytesLike> | null,
      evmAddress?: PromiseOrValue<string> | null
    ): ClaimAccountEventFilter;
    ClaimAccount(
      sender?: PromiseOrValue<string> | null,
      accountId?: PromiseOrValue<BytesLike> | null,
      evmAddress?: PromiseOrValue<string> | null
    ): ClaimAccountEventFilter;
  };

  estimateGas: {
    claimDefaultEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAccountId(
      evmAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimDefaultEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAccountId(
      evmAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEvmAddress(
      accountId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
