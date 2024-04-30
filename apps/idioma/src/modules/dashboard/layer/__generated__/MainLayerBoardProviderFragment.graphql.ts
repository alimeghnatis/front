/**
 * @generated SignedSource<<96abfe0358637effbf4c4d4c9ef18963>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainLayerBoardProviderFragment$data = {
  readonly board: {
    readonly created: any;
    readonly id: string;
    readonly name: string;
    readonly updated: any;
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ChatFragment" | "ExpressionVariantBoardFragment">;
  } | null | undefined;
  readonly " $fragmentType": "MainLayerBoardProviderFragment";
};
export type MainLayerBoardProviderFragment$key = {
  readonly " $data"?: MainLayerBoardProviderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainLayerBoardProviderFragment">;
};

import MainLayerBoardProviderRefetchQuery_graphql from './MainLayerBoardProviderRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": MainLayerBoardProviderRefetchQuery_graphql
    }
  },
  "name": "MainLayerBoardProviderFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id"
        }
      ],
      "concreteType": "BoardNode",
      "kind": "LinkedField",
      "name": "board",
      "plural": false,
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
          "name": "name",
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
          "name": "updated",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BoardFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BoardUpdateFormFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExpressionVariantBoardFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ChatFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "bc3128c116cb620076fbaa9cc164d172";

export default node;
