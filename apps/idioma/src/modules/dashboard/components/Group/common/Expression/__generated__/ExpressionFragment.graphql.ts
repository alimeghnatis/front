/**
 * @generated SignedSource<<7565a1a443d785e57deb887214eb6d2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionFragment$data = {
  readonly content: string;
  readonly id: string;
  readonly language: string;
  readonly " $fragmentType": "ExpressionFragment";
};
export type ExpressionFragment$key = {
  readonly " $data"?: ExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ExpressionFragment",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "language",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "936e96b35322d0e41bad7384a21e14cd";

export default node;
