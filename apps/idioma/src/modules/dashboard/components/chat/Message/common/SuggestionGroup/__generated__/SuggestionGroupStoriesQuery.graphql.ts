/**
 * @generated SignedSource<<76e8cf114dfefc65e0c8788643aedb09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SuggestionGroupStoriesQuery$variables = Record<PropertyKey, never>;
export type SuggestionGroupStoriesQuery$data = {
  readonly thread: {
    readonly messages: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly content: {
            readonly " $fragmentSpreads": FragmentRefs<"SuggestionGroupFragment">;
          } | null | undefined;
        } | null | undefined;
      } | null | undefined>;
    } | null | undefined;
  } | null | undefined;
};
export type SuggestionGroupStoriesQuery = {
  response: SuggestionGroupStoriesQuery$data;
  variables: SuggestionGroupStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SuggestionGroupStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ThreadNode",
        "kind": "LinkedField",
        "name": "thread",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTypeConnection",
            "kind": "LinkedField",
            "name": "messages",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTypeEdge",
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "content",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "SuggestionGroupFragment"
                              }
                            ],
                            "type": "AssistantMessageType",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "thread(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SuggestionGroupStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ThreadNode",
        "kind": "LinkedField",
        "name": "thread",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTypeConnection",
            "kind": "LinkedField",
            "name": "messages",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTypeEdge",
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "content",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__typename",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "suggestions",
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
                              }
                            ],
                            "type": "AssistantMessageType",
                            "abstractKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": "thread(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "6478c06b41ddb7e70035956a42ffba1e",
    "id": null,
    "metadata": {},
    "name": "SuggestionGroupStoriesQuery",
    "operationKind": "query",
    "text": "query SuggestionGroupStoriesQuery {\n  thread(id: \"1\") {\n    messages {\n      edges {\n        node {\n          content {\n            __typename\n            ... on AssistantMessageType {\n              ...SuggestionGroupFragment\n            }\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment SuggestionGroupFragment on AssistantMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n"
  }
};
})();

(node as any).hash = "2e5f1fba086cea3e37c4e796f45d9dd8";

export default node;
