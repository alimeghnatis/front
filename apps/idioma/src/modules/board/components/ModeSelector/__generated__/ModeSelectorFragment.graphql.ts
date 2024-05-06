/**
 * @generated SignedSource<<e2097a0de4727d6193841e46444a608a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModeSelectorFragment$data = {
  readonly id: string;
  readonly newExpressionsCount: number | null | undefined;
  readonly " $fragmentType": "ModeSelectorFragment";
};
export type ModeSelectorFragment$key = {
  readonly " $data"?: ModeSelectorFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ModeSelectorFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ModeSelectorFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "newExpressionsCount",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "BoardNode",
  "abstractKey": null
};

(node as any).hash = "23afc4ef8aa4a4f668913d6ff32f269c";

export default node;
