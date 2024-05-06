/**
 * @generated SignedSource<<88da71e6b05675ee377971519965d150>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoardStoriesFragment$data = {
  readonly board: {
    readonly created: any;
    readonly id: string;
    readonly name: string;
    readonly updated: any;
  } | null | undefined;
  readonly " $fragmentType": "ProviderBoardStoriesFragment";
};
export type ProviderBoardStoriesFragment$key = {
  readonly " $data"?: ProviderBoardStoriesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoardStoriesFragment">;
};

import ProviderBoardStoriesRefetchQuery_graphql from './ProviderBoardStoriesRefetchQuery.graphql';

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
      "operation": ProviderBoardStoriesRefetchQuery_graphql
    }
  },
  "name": "ProviderBoardStoriesFragment",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "84aaec93829760a8c4edae916f4594ea";

export default node;
