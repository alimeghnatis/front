/**
 * @generated SignedSource<<12a6667a98cde0cd971e8236442a36a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Chat2Fragment$data = {
  readonly id: string;
  readonly openaiThreadId: string | null | undefined;
  readonly " $fragmentType": "Chat2Fragment";
};
export type Chat2Fragment$key = {
  readonly " $data"?: Chat2Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Chat2Fragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Chat2Fragment",
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
      "name": "openaiThreadId",
      "storageKey": null
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "8c4c0164902a849276577d2a18b9f26e";

export default node;
