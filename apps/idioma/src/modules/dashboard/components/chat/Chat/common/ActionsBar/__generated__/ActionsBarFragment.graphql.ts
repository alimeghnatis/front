/**
 * @generated SignedSource<<8f3c48240c29de28e7f3ae5f2ceae002>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActionsBarFragment$data = {
  readonly id: string;
  readonly messages: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
    } | null | undefined>;
  } | null | undefined;
  readonly " $fragmentType": "ActionsBarFragment";
};
export type ActionsBarFragment$key = {
  readonly " $data"?: ActionsBarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActionsBarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionsBarFragment",
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
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 4
        }
      ],
      "concreteType": "LanguageMessageTypeConnection",
      "kind": "LinkedField",
      "name": "messages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LanguageMessageTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "messages(last:4)"
    }
  ],
  "type": "ThreadNode",
  "abstractKey": null
};

(node as any).hash = "5a938242c1c5efa4ea91166b19050bee";

export default node;
