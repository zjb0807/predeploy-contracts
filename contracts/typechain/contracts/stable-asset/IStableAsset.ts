/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface IStableAssetInterface extends utils.Interface {
  functions: {
    "getStableAssetPoolMintFee(uint32)": FunctionFragment;
    "getStableAssetPoolPrecision(uint32)": FunctionFragment;
    "getStableAssetPoolRedeemFee(uint32)": FunctionFragment;
    "getStableAssetPoolSwapFee(uint32)": FunctionFragment;
    "getStableAssetPoolTokens(uint32)": FunctionFragment;
    "getStableAssetPoolTotalSupply(uint32)": FunctionFragment;
    "stableAssetMint(uint32,uint256[],uint256)": FunctionFragment;
    "stableAssetRedeem(uint32,uint256,uint256[])": FunctionFragment;
    "stableAssetRedeemMulti(uint32,uint256[],uint256)": FunctionFragment;
    "stableAssetRedeemSingle(uint32,uint256,uint32,uint256,uint32)": FunctionFragment;
    "stableAssetSwap(uint32,uint32,uint32,uint256,uint256,uint32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getStableAssetPoolMintFee"
      | "getStableAssetPoolPrecision"
      | "getStableAssetPoolRedeemFee"
      | "getStableAssetPoolSwapFee"
      | "getStableAssetPoolTokens"
      | "getStableAssetPoolTotalSupply"
      | "stableAssetMint"
      | "stableAssetRedeem"
      | "stableAssetRedeemMulti"
      | "stableAssetRedeemSingle"
      | "stableAssetSwap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getStableAssetPoolMintFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableAssetPoolPrecision",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableAssetPoolRedeemFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableAssetPoolSwapFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableAssetPoolTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableAssetPoolTotalSupply",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAssetMint",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAssetRedeem",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAssetRedeemMulti",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAssetRedeemSingle",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAssetSwap",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getStableAssetPoolMintFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableAssetPoolPrecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableAssetPoolRedeemFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableAssetPoolSwapFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableAssetPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableAssetPoolTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAssetMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAssetRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAssetRedeemMulti",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAssetRedeemSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAssetSwap",
    data: BytesLike
  ): Result;

  events: {
    "StableAssetMinted(address,uint32,uint256[],uint256)": EventFragment;
    "StableAssetRedeemed(address,uint32,uint256,uint256[])": EventFragment;
    "StableAssetRedeemedMulti(address,uint32,uint256[],uint256)": EventFragment;
    "StableAssetRedeemedSingle(address,uint32,uint256,uint32,uint256,uint32)": EventFragment;
    "StableAssetSwapped(address,uint32,uint32,uint32,uint256,uint256,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "StableAssetMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableAssetRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableAssetRedeemedMulti"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableAssetRedeemedSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StableAssetSwapped"): EventFragment;
}

export interface StableAssetMintedEventObject {
  sender: string;
  poolId: number;
  amounts: BigNumber[];
  minMintAmount: BigNumber;
}
export type StableAssetMintedEvent = TypedEvent<
  [string, number, BigNumber[], BigNumber],
  StableAssetMintedEventObject
>;

export type StableAssetMintedEventFilter =
  TypedEventFilter<StableAssetMintedEvent>;

export interface StableAssetRedeemedEventObject {
  sender: string;
  poolId: number;
  redeemAmount: BigNumber;
  amounts: BigNumber[];
}
export type StableAssetRedeemedEvent = TypedEvent<
  [string, number, BigNumber, BigNumber[]],
  StableAssetRedeemedEventObject
>;

export type StableAssetRedeemedEventFilter =
  TypedEventFilter<StableAssetRedeemedEvent>;

export interface StableAssetRedeemedMultiEventObject {
  sender: string;
  poolId: number;
  amounts: BigNumber[];
  maxRedeemAmount: BigNumber;
}
export type StableAssetRedeemedMultiEvent = TypedEvent<
  [string, number, BigNumber[], BigNumber],
  StableAssetRedeemedMultiEventObject
>;

export type StableAssetRedeemedMultiEventFilter =
  TypedEventFilter<StableAssetRedeemedMultiEvent>;

export interface StableAssetRedeemedSingleEventObject {
  sender: string;
  poolId: number;
  redeemAmount: BigNumber;
  i: number;
  minRedeemAmount: BigNumber;
  assetLength: number;
}
export type StableAssetRedeemedSingleEvent = TypedEvent<
  [string, number, BigNumber, number, BigNumber, number],
  StableAssetRedeemedSingleEventObject
>;

export type StableAssetRedeemedSingleEventFilter =
  TypedEventFilter<StableAssetRedeemedSingleEvent>;

export interface StableAssetSwappedEventObject {
  sender: string;
  poolId: number;
  i: number;
  j: number;
  dx: BigNumber;
  minDY: BigNumber;
  assetLength: number;
}
export type StableAssetSwappedEvent = TypedEvent<
  [string, number, number, number, BigNumber, BigNumber, number],
  StableAssetSwappedEventObject
>;

export type StableAssetSwappedEventFilter =
  TypedEventFilter<StableAssetSwappedEvent>;

export interface IStableAsset extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStableAssetInterface;

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
    getStableAssetPoolMintFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolPrecision(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolRedeemFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolSwapFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolTokens(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string[]]>;

    getStableAssetPoolTotalSupply(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    stableAssetMint(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      minMintAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stableAssetRedeem(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stableAssetRedeemMulti(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      maxRedeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stableAssetRedeemSingle(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minRedeemAmount: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stableAssetSwap(
      poolId: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDY: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getStableAssetPoolMintFee(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  getStableAssetPoolPrecision(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  getStableAssetPoolRedeemFee(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  getStableAssetPoolSwapFee(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  getStableAssetPoolTokens(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, string[]]>;

  getStableAssetPoolTotalSupply(
    poolId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  stableAssetMint(
    poolId: PromiseOrValue<BigNumberish>,
    amounts: PromiseOrValue<BigNumberish>[],
    minMintAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stableAssetRedeem(
    poolId: PromiseOrValue<BigNumberish>,
    redeemAmount: PromiseOrValue<BigNumberish>,
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stableAssetRedeemMulti(
    poolId: PromiseOrValue<BigNumberish>,
    amounts: PromiseOrValue<BigNumberish>[],
    maxRedeemAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stableAssetRedeemSingle(
    poolId: PromiseOrValue<BigNumberish>,
    redeemAmount: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    minRedeemAmount: PromiseOrValue<BigNumberish>,
    assetLength: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stableAssetSwap(
    poolId: PromiseOrValue<BigNumberish>,
    i: PromiseOrValue<BigNumberish>,
    j: PromiseOrValue<BigNumberish>,
    dx: PromiseOrValue<BigNumberish>,
    minDY: PromiseOrValue<BigNumberish>,
    assetLength: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getStableAssetPoolMintFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolPrecision(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolRedeemFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolSwapFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    getStableAssetPoolTokens(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string[]]>;

    getStableAssetPoolTotalSupply(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    stableAssetMint(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      minMintAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stableAssetRedeem(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    stableAssetRedeemMulti(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      maxRedeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stableAssetRedeemSingle(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minRedeemAmount: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    stableAssetSwap(
      poolId: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDY: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "StableAssetMinted(address,uint32,uint256[],uint256)"(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amounts?: null,
      minMintAmount?: null
    ): StableAssetMintedEventFilter;
    StableAssetMinted(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amounts?: null,
      minMintAmount?: null
    ): StableAssetMintedEventFilter;

    "StableAssetRedeemed(address,uint32,uint256,uint256[])"(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      redeemAmount?: null,
      amounts?: null
    ): StableAssetRedeemedEventFilter;
    StableAssetRedeemed(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      redeemAmount?: null,
      amounts?: null
    ): StableAssetRedeemedEventFilter;

    "StableAssetRedeemedMulti(address,uint32,uint256[],uint256)"(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amounts?: null,
      maxRedeemAmount?: null
    ): StableAssetRedeemedMultiEventFilter;
    StableAssetRedeemedMulti(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      amounts?: null,
      maxRedeemAmount?: null
    ): StableAssetRedeemedMultiEventFilter;

    "StableAssetRedeemedSingle(address,uint32,uint256,uint32,uint256,uint32)"(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      redeemAmount?: null,
      i?: null,
      minRedeemAmount?: null,
      assetLength?: null
    ): StableAssetRedeemedSingleEventFilter;
    StableAssetRedeemedSingle(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      redeemAmount?: null,
      i?: null,
      minRedeemAmount?: null,
      assetLength?: null
    ): StableAssetRedeemedSingleEventFilter;

    "StableAssetSwapped(address,uint32,uint32,uint32,uint256,uint256,uint32)"(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      i?: null,
      j?: null,
      dx?: null,
      minDY?: null,
      assetLength?: null
    ): StableAssetSwappedEventFilter;
    StableAssetSwapped(
      sender?: PromiseOrValue<string> | null,
      poolId?: PromiseOrValue<BigNumberish> | null,
      i?: null,
      j?: null,
      dx?: null,
      minDY?: null,
      assetLength?: null
    ): StableAssetSwappedEventFilter;
  };

  estimateGas: {
    getStableAssetPoolMintFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableAssetPoolPrecision(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableAssetPoolRedeemFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableAssetPoolSwapFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableAssetPoolTokens(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableAssetPoolTotalSupply(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stableAssetMint(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      minMintAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stableAssetRedeem(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stableAssetRedeemMulti(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      maxRedeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stableAssetRedeemSingle(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minRedeemAmount: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stableAssetSwap(
      poolId: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDY: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getStableAssetPoolMintFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableAssetPoolPrecision(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableAssetPoolRedeemFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableAssetPoolSwapFee(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableAssetPoolTokens(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableAssetPoolTotalSupply(
      poolId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stableAssetMint(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      minMintAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stableAssetRedeem(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stableAssetRedeemMulti(
      poolId: PromiseOrValue<BigNumberish>,
      amounts: PromiseOrValue<BigNumberish>[],
      maxRedeemAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stableAssetRedeemSingle(
      poolId: PromiseOrValue<BigNumberish>,
      redeemAmount: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      minRedeemAmount: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stableAssetSwap(
      poolId: PromiseOrValue<BigNumberish>,
      i: PromiseOrValue<BigNumberish>,
      j: PromiseOrValue<BigNumberish>,
      dx: PromiseOrValue<BigNumberish>,
      minDY: PromiseOrValue<BigNumberish>,
      assetLength: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
