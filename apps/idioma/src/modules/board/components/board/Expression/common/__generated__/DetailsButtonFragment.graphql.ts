/**
 * @generated SignedSource<<57be45958ce03e7f23b1e01d104886dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailsButtonFragment$data = {
  readonly id: string;
  readonly isNew: boolean | null | undefined;
  readonly isProcessed: boolean;
  readonly " $fragmentType": "DetailsButtonFragment";
};
export type DetailsButtonFragment$key = {
  readonly " $data"?: DetailsButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DetailsButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailsButtonFragment",
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

(node as any).hash = "048671c53b4522582a0ec6e27a717b45";

export default node;
