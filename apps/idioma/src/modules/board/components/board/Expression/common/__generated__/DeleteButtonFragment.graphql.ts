/**
 * @generated SignedSource<<5adbcf5f24502e29e3e5c03af4f5b488>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteButtonFragment$data = {
  readonly id: string;
  readonly isNew: boolean | null | undefined;
  readonly isProcessed: boolean;
  readonly " $fragmentType": "DeleteButtonFragment";
};
export type DeleteButtonFragment$key = {
  readonly " $data"?: DeleteButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DeleteButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DeleteButtonFragment",
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

(node as any).hash = "9adc1e21c68df9a13a183de0a2a9df7c";

export default node;
