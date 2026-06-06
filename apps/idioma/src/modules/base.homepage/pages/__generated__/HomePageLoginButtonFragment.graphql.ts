/**
 * @generated SignedSource<<7471e0168aa12909a0c0526f88e2af93>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageLoginButtonFragment$data = {
  readonly oAuth2Links: {
    readonly google: string;
  } | null | undefined;
  readonly " $fragmentType": "HomePageLoginButtonFragment";
};
export type HomePageLoginButtonFragment$key = {
  readonly " $data"?: HomePageLoginButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HomePageLoginButtonFragment">;
};

import HomeLoginButtonFragmentRefetchQuery_graphql from './HomeLoginButtonFragmentRefetchQuery.graphql';

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "resource"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": HomeLoginButtonFragmentRefetchQuery_graphql
    }
  },
  "name": "HomePageLoginButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "resource",
          "variableName": "resource"
        }
      ],
      "concreteType": "OAuth2LinksProvider",
      "kind": "LinkedField",
      "name": "oAuth2Links",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "google",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "11e0aa9e3f45d0ab83f67baf8e2ee42a";

export default node;
