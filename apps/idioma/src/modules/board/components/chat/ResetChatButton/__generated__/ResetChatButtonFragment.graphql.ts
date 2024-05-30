/**
 * @generated SignedSource<<46a34de764d3f2b2ed24888d898405b5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ResetChatButtonFragment$data = {
  readonly id: string;
  readonly messages: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string;
    } | null | undefined>;
  } | null | undefined;
  readonly " $fragmentType": "ResetChatButtonFragment";
};
export type ResetChatButtonFragment$key = {
  readonly " $data"?: ResetChatButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ResetChatButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResetChatButtonFragment",
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

(node as any).hash = "3af4914b909741f4a454d18a41244fd6";

export default node;
