/**
 * @generated SignedSource<<5a1244519538c50441e7d3ddd9d987de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginPageButtonFragment$data = {
  readonly oAuth2Links: {
    readonly google: string;
  } | null | undefined;
  readonly " $fragmentType": "LoginPageButtonFragment";
};
export type LoginPageButtonFragment$key = {
  readonly " $data"?: LoginPageButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"LoginPageButtonFragment">;
};

import LoginButtonFragmentRefetchQuery_graphql from './LoginButtonFragmentRefetchQuery.graphql';

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
      "operation": LoginButtonFragmentRefetchQuery_graphql
    }
  },
  "name": "LoginPageButtonFragment",
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

(node as any).hash = "7d110401c74c34e56799931e7b09fc1f";

export default node;
