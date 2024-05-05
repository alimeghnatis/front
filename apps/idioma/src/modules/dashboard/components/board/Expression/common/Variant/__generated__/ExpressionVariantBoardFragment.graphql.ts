/**
 * @generated SignedSource<<e08927b4597c95e7a0e06e155cb907e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionVariantBoardFragment$data = {
  readonly enabledLanguages: any;
  readonly id: string;
  readonly " $fragmentType": "ExpressionVariantBoardFragment";
};
export type ExpressionVariantBoardFragment$key = {
  readonly " $data"?: ExpressionVariantBoardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionVariantBoardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExpressionVariantBoardFragment",
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

(node as any).hash = "1c0c0d993a6b4f4c7875c456d9a59a72";

export default node;
