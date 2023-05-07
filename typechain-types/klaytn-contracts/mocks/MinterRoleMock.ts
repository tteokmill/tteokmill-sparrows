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

export interface MinterRoleMockInterface extends utils.Interface {
  functions: {
    "removeMinter(address)": FunctionFragment;
    "addMinter(address)": FunctionFragment;
    "renounceMinter()": FunctionFragment;
    "isMinter(address)": FunctionFragment;
    "onlyMinterMock()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "removeMinter"
      | "addMinter"
      | "renounceMinter"
      | "isMinter"
      | "onlyMinterMock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "removeMinter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMinter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceMinter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isMinter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "onlyMinterMock",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "removeMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onlyMinterMock",
    data: BytesLike
  ): Result;

  events: {
    "MinterAdded(address)": EventFragment;
    "MinterRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MinterAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterRemoved"): EventFragment;
}

export interface MinterAddedEventObject {
  account: string;
}
export type MinterAddedEvent = TypedEvent<[string], MinterAddedEventObject>;

export type MinterAddedEventFilter = TypedEventFilter<MinterAddedEvent>;

export interface MinterRemovedEventObject {
  account: string;
}
export type MinterRemovedEvent = TypedEvent<[string], MinterRemovedEventObject>;

export type MinterRemovedEventFilter = TypedEventFilter<MinterRemovedEvent>;

export interface MinterRoleMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MinterRoleMockInterface;

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
    removeMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onlyMinterMock(overrides?: CallOverrides): Promise<[void]>;
  };

  removeMinter(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMinter(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceMinter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isMinter(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onlyMinterMock(overrides?: CallOverrides): Promise<void>;

  callStatic: {
    removeMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceMinter(overrides?: CallOverrides): Promise<void>;

    isMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onlyMinterMock(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "MinterAdded(address)"(
      account?: PromiseOrValue<string> | null
    ): MinterAddedEventFilter;
    MinterAdded(
      account?: PromiseOrValue<string> | null
    ): MinterAddedEventFilter;

    "MinterRemoved(address)"(
      account?: PromiseOrValue<string> | null
    ): MinterRemovedEventFilter;
    MinterRemoved(
      account?: PromiseOrValue<string> | null
    ): MinterRemovedEventFilter;
  };

  estimateGas: {
    removeMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onlyMinterMock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    removeMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMinter(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceMinter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isMinter(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onlyMinterMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
