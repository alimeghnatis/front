/**
 * @generated SignedSource<<ecbe57bf4fd13ea973e7347e14117319>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariantButtonFragment$data = {
  readonly id: string;
  readonly isNew: boolean | null | undefined;
  readonly isProcessed: boolean;
  readonly " $fragmentType": "VariantButtonFragment";
};
export type VariantButtonFragment$key = {
  readonly " $data"?: VariantButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariantButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VariantButtonFragment",
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
      "name": "isProcessed",
      "storageKey": null
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isNew",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "9b1c158fb785a890705f94cb0ddfdb67";

export default node;
