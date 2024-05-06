/**
 * @generated SignedSource<<a5bef74d632d73fc6e3eccfc115e9ccb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariantBoardFragment$data = {
  readonly enabledLanguages: any;
  readonly id: string;
  readonly " $fragmentType": "VariantBoardFragment";
};
export type VariantBoardFragment$key = {
  readonly " $data"?: VariantBoardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariantBoardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VariantBoardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabledLanguages",
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "1b50a00a89f8815f92704f9b869d5206";

export default node;
