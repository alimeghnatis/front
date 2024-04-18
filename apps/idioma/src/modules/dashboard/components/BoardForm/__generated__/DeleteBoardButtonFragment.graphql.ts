/**
 * @generated SignedSource<<4d8b764527f33ac977f9d324ac5d2d3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteBoardButtonFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "DeleteBoardButtonFragment";
};
export type DeleteBoardButtonFragment$key = {
  readonly " $data"?: DeleteBoardButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteBoardButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DeleteBoardButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "01ed5c1b972abbc9fafa986a9ff48db3";

export default node;
