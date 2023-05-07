/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKIP13,
  IKIP13Interface,
} from "../../../klaytn-contracts/introspection/IKIP13";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IKIP13__factory {
  static readonly abi = _abi;
  static createInterface(): IKIP13Interface {
    return new utils.Interface(_abi) as IKIP13Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IKIP13 {
    return new Contract(address, _abi, signerOrProvider) as IKIP13;
  }
}
