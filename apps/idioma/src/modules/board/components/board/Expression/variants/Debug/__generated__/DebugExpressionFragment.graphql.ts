/**
 * @generated SignedSource<<72eee92b89baea2d49eb65e9a52b4828>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DebugExpressionFragment$data = {
  readonly created: any;
  readonly flagComment: string | null | undefined;
  readonly flagIsProcessed: boolean | null | undefined;
  readonly id: string;
  readonly isProcessed: boolean;
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string;
  readonly rated: any | null | undefined;
  readonly rating: number | null | undefined;
  readonly ratingComment: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionFragment">;
  readonly " $fragmentType": "DebugExpressionFragment";
};
export type DebugExpressionFragment$key = {
  readonly " $data"?: DebugExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"DebugExpressionFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DebugExpressionFragment",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6391",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6392",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "iso6393",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ratingComment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "flagIsProcessed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "flagComment",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ExpressionFragment"
    }
  ],
  "type": "ExpressionNode",
  "abstractKey": null
};

(node as any).hash = "a71c14a956b20eb8bcb4ea2d6d8f7745";

export default node;
