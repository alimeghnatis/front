/**
 * @generated SignedSource<<a6146e4a237cecffc8d70110c71e26d6>>
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
            "concreteType": "LanguageMessageTypeConnection",
            "kind": "LinkedField",
            "name": "messages",
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
                            "type": "AssistantLanguageMessageType",
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
            "concreteType": "LanguageMessageTypeConnection",
            "kind": "LinkedField",
            "name": "messages",
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
                            "type": "AssistantLanguageMessageType",
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
    "cacheID": "8883ed63e1d9196b98ab245e5cc97bca",
    "id": null,
    "metadata": {},
    "name": "SuggestionGroupStoriesQuery",
    "operationKind": "query",
    "text": "query SuggestionGroupStoriesQuery {\n  thread(id: \"1\") {\n    messages {\n      edges {\n        node {\n          content {\n            __typename\n            ... on AssistantLanguageMessageType {\n              ...SuggestionGroupFragment\n            }\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment SuggestionGroupFragment on AssistantLanguageMessageType {\n  suggestions\n  iso6391\n  iso6392\n  iso6393\n}\n"
  }
};
})();

(node as any).hash = "7d21a0ca4d997988cab3729609833660";

export default node;
