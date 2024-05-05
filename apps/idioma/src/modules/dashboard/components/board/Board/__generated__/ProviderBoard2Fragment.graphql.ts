/**
 * @generated SignedSource<<6386fc02e79d8c7a5bfb57a865a8ef72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ProviderBoard2Fragment$data = {
  readonly board: {
    readonly created: any;
    readonly id: string;
    readonly name: string;
    readonly updated: any;
  } | null | undefined;
  readonly " $fragmentType": "ProviderBoard2Fragment";
};
export type ProviderBoard2Fragment$key = {
  readonly " $data"?: ProviderBoard2Fragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ProviderBoard2Fragment">;
};

import Provider2BoardRefetchQuery_graphql from './Provider2BoardRefetchQuery.graphql';

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
      "operation": Provider2BoardRefetchQuery_graphql
    }
  },
  "name": "ProviderBoard2Fragment",
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

(node as any).hash = "bf95c182ab52c3307b8a2bca6711d766";

export default node;
