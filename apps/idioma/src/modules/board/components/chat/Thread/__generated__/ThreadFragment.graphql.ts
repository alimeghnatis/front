/**
 * @generated SignedSource<<54b3345d322b63c02b92d361e28978ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ThreadFragment$data = {
  readonly createdAt: any | null | undefined;
  readonly id: string;
  readonly messages: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly createdAt: any | null | undefined;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"MessageFragment">;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
  readonly " $fragmentType": "ThreadFragment";
};
export type ThreadFragment$key = {
  readonly " $data"?: ThreadFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ThreadFragment">;
};

import ThreadFragmentPaginationQuery_graphql from './ThreadFragmentPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "messages"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 4,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "backward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": null,
        "backward": {
          "count": "count",
          "cursor": "cursor"
        },
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": ThreadFragmentPaginationQuery_graphql,
      "identifierInfo": {
        "identifierField": "id",
        "identifierQueryVariableName": "id"
      }
    }
  },
  "name": "ThreadFragment",
  "selections": [
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": "messages",
      "args": null,
      "concreteType": "LanguageMessageTypeConnection",
      "kind": "LinkedField",
      "name": "__ThreadFragment_messages_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LanguageMessageTypeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "LanguageMessageType",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                (v2/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MessageFragment"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "startCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ThreadNode",
  "abstractKey": null
};
})();

(node as any).hash = "05268b39f28710855831418830771764";

export default node;
