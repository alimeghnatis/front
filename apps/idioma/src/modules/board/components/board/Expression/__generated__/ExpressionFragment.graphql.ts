/**
 * @generated SignedSource<<cbe212ef3d2c9d31cf5f5ddf5b5bf9f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionFragment$data = {
  readonly content: string;
  readonly correctedContent: string | null | undefined;
  readonly created: any;
  readonly id: string;
  readonly isBookmarked: boolean;
  readonly isNew: boolean | null | undefined;
  readonly isProcessed: boolean;
  readonly iso6391: string | null | undefined;
  readonly iso6392: string | null | undefined;
  readonly iso6393: string;
  readonly " $fragmentSpreads": FragmentRefs<"AudioButtonFragment" | "BookmarkButtonFragment" | "DeleteButtonFragment" | "DetailsButtonFragment" | "DetailsFragment" | "VariantButtonFragment" | "VariantFragment">;
  readonly " $fragmentType": "ExpressionFragment";
};
export type ExpressionFragment$key = {
  readonly " $data"?: ExpressionFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ExpressionFragment">;
};

import ExpressionRefetchQuery_graphql from './ExpressionRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ExpressionRefetchQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ExpressionFragment",
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
      "name": "correctedContent",
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
      "name": "isProcessed",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "AudioButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DeleteButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BookmarkButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailsButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VariantButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DetailsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VariantFragment"
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

(node as any).hash = "b1b311475b7c011314150c85d47c3ac2";

export default node;
