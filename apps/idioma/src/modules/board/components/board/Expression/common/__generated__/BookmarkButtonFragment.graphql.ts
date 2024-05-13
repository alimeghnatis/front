/**
 * @generated SignedSource<<d47a3be749d57d4b69434d0e98c4d968>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookmarkButtonFragment$data = {
  readonly id: string;
  readonly isBookmarked: boolean;
  readonly isNew: boolean | null | undefined;
  readonly isProcessed: boolean;
  readonly " $fragmentType": "BookmarkButtonFragment";
};
export type BookmarkButtonFragment$key = {
  readonly " $data"?: BookmarkButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BookmarkButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookmarkButtonFragment",
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
      "name": "isBookmarked",
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

(node as any).hash = "7c7c1765159a0baaaa8d8b67d3c8bcd0";

export default node;
