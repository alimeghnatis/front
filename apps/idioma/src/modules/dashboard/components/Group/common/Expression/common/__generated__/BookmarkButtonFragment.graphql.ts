/**
 * @generated SignedSource<<a9b5ad2cc1f3b13a17f9d7144e70c12e>>
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
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "fbd368284058d8773d8d0d5d4712c929";

export default node;
