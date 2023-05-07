/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKIP7Receiver,
  IKIP7ReceiverInterface,
} from "../../../../klaytn-contracts/token/KIP7/IKIP7Receiver";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_operator",
        type: "address",
      },
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_amount",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onKIP7Received",
    outputs: [
      {
        name: "",
        type: "bytes4",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IKIP7Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): IKIP7ReceiverInterface {
    return new utils.Interface(_abi) as IKIP7ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKIP7Receiver {
    return new Contract(address, _abi, signerOrProvider) as IKIP7Receiver;
  }
}
