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

export interface DEXInterface extends utils.Interface {
  functions: {
    "addLiquidity(address,address,uint256,uint256,uint256)": FunctionFragment;
    "getLiquidityPool(address,address)": FunctionFragment;
    "getLiquidityTokenAddress(address,address)": FunctionFragment;
    "getSwapSupplyAmount(address[],uint256)": FunctionFragment;
    "getSwapTargetAmount(address[],uint256)": FunctionFragment;
    "removeLiquidity(address,address,uint256,uint256,uint256)": FunctionFragment;
    "swapWithExactSupply(address[],uint256,uint256)": FunctionFragment;
    "swapWithExactTarget(address[],uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "getLiquidityPool"
      | "getLiquidityTokenAddress"
      | "getSwapSupplyAmount"
      | "getSwapTargetAmount"
      | "removeLiquidity"
      | "swapWithExactSupply"
      | "swapWithExactTarget"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityPool",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidityTokenAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapSupplyAmount",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapTargetAmount",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapWithExactSupply",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapWithExactTarget",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidityTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapSupplyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapTargetAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapWithExactSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapWithExactTarget",
    data: BytesLike
  ): Result;

  events: {
    "AddedLiquidity(address,address,address,uint256,uint256)": EventFragment;
    "RemovedLiquidity(address,address,address,uint256)": EventFragment;
    "Swaped(address,address[],uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swaped"): EventFragment;
}

export interface AddedLiquidityEventObject {
  sender: string;
  tokenA: string;
  tokenB: string;
  maxAmountA: BigNumber;
  maxAmountB: BigNumber;
}
export type AddedLiquidityEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  AddedLiquidityEventObject
>;

export type AddedLiquidityEventFilter = TypedEventFilter<AddedLiquidityEvent>;

export interface RemovedLiquidityEventObject {
  sender: string;
  tokenA: string;
  tokenB: string;
  removeShare: BigNumber;
}
export type RemovedLiquidityEvent = TypedEvent<
  [string, string, string, BigNumber],
  RemovedLiquidityEventObject
>;

export type RemovedLiquidityEventFilter =
  TypedEventFilter<RemovedLiquidityEvent>;

export interface SwapedEventObject {
  sender: string;
  path: string[];
  supplyAmount: BigNumber;
  targetAmount: BigNumber;
}
export type SwapedEvent = TypedEvent<
  [string, string[], BigNumber, BigNumber],
  SwapedEventObject
>;

export type SwapedEventFilter = TypedEventFilter<SwapedEvent>;

export interface DEX extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DEXInterface;

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
    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      maxAmountA: PromiseOrValue<BigNumberish>,
      maxAmountB: PromiseOrValue<BigNumberish>,
      minShareIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLiquidityPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidityTokenAddress(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSwapSupplyAmount(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSwapTargetAmount(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      removeShare: PromiseOrValue<BigNumberish>,
      minWithdrawnA: PromiseOrValue<BigNumberish>,
      minWithdrawnB: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapWithExactSupply(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      minTargetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapWithExactTarget(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      maxSupplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addLiquidity(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    maxAmountA: PromiseOrValue<BigNumberish>,
    maxAmountB: PromiseOrValue<BigNumberish>,
    minShareIncrement: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLiquidityPool(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getLiquidityTokenAddress(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getSwapSupplyAmount(
    path: PromiseOrValue<string>[],
    targetAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSwapTargetAmount(
    path: PromiseOrValue<string>[],
    supplyAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeLiquidity(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    removeShare: PromiseOrValue<BigNumberish>,
    minWithdrawnA: PromiseOrValue<BigNumberish>,
    minWithdrawnB: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapWithExactSupply(
    path: PromiseOrValue<string>[],
    supplyAmount: PromiseOrValue<BigNumberish>,
    minTargetAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapWithExactTarget(
    path: PromiseOrValue<string>[],
    targetAmount: PromiseOrValue<BigNumberish>,
    maxSupplyAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      maxAmountA: PromiseOrValue<BigNumberish>,
      maxAmountB: PromiseOrValue<BigNumberish>,
      minShareIncrement: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getLiquidityPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidityTokenAddress(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getSwapSupplyAmount(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapTargetAmount(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      removeShare: PromiseOrValue<BigNumberish>,
      minWithdrawnA: PromiseOrValue<BigNumberish>,
      minWithdrawnB: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapWithExactSupply(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      minTargetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapWithExactTarget(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      maxSupplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AddedLiquidity(address,address,address,uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
      maxAmountA?: null,
      maxAmountB?: null
    ): AddedLiquidityEventFilter;
    AddedLiquidity(
      sender?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
      maxAmountA?: null,
      maxAmountB?: null
    ): AddedLiquidityEventFilter;

    "RemovedLiquidity(address,address,address,uint256)"(
      sender?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
      removeShare?: null
    ): RemovedLiquidityEventFilter;
    RemovedLiquidity(
      sender?: PromiseOrValue<string> | null,
      tokenA?: PromiseOrValue<string> | null,
      tokenB?: PromiseOrValue<string> | null,
      removeShare?: null
    ): RemovedLiquidityEventFilter;

    "Swaped(address,address[],uint256,uint256)"(
      sender?: PromiseOrValue<string> | null,
      path?: null,
      supplyAmount?: null,
      targetAmount?: null
    ): SwapedEventFilter;
    Swaped(
      sender?: PromiseOrValue<string> | null,
      path?: null,
      supplyAmount?: null,
      targetAmount?: null
    ): SwapedEventFilter;
  };

  estimateGas: {
    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      maxAmountA: PromiseOrValue<BigNumberish>,
      maxAmountB: PromiseOrValue<BigNumberish>,
      minShareIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLiquidityPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidityTokenAddress(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapSupplyAmount(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSwapTargetAmount(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      removeShare: PromiseOrValue<BigNumberish>,
      minWithdrawnA: PromiseOrValue<BigNumberish>,
      minWithdrawnB: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapWithExactSupply(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      minTargetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapWithExactTarget(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      maxSupplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      maxAmountA: PromiseOrValue<BigNumberish>,
      maxAmountB: PromiseOrValue<BigNumberish>,
      minShareIncrement: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLiquidityPool(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidityTokenAddress(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapSupplyAmount(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapTargetAmount(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      removeShare: PromiseOrValue<BigNumberish>,
      minWithdrawnA: PromiseOrValue<BigNumberish>,
      minWithdrawnB: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapWithExactSupply(
      path: PromiseOrValue<string>[],
      supplyAmount: PromiseOrValue<BigNumberish>,
      minTargetAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapWithExactTarget(
      path: PromiseOrValue<string>[],
      targetAmount: PromiseOrValue<BigNumberish>,
      maxSupplyAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
