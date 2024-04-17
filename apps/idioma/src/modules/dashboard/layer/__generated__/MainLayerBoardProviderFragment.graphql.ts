/**
 * @generated SignedSource<<6ce0ed71438d2ce24e97fa08516d1117>>
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
    readonly " $fragmentSpreads": FragmentRefs<"BoardFragment" | "BoardUpdateFormFragment" | "ExpressionVariantBoardFragment">;
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f36eaa2376ee46fe8c8eb2b0d1d782f6";

export default node;
