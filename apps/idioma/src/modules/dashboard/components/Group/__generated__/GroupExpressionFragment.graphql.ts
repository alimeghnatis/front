/**
 * @generated SignedSource<<db5b06d98d2949cef49c0cd4860b3bea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupExpressionFragment$data = {
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly grammarExplanation: string | null | undefined;
  readonly id: string;
  readonly language: string;
  readonly wordsExplanation: string | null | undefined;
  readonly " $fragmentType": "GroupExpressionFragment";
};
export type GroupExpressionFragment$key = {
  readonly " $data"?: GroupExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GroupExpressionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GroupExpressionFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "correctedContent",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "grammarExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "wordsExplanation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "71d93cf22b29774fec767783ec390e1a";

export default node;
