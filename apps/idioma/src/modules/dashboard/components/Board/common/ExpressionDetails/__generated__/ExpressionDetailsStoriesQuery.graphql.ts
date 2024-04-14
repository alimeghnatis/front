/**
 * @generated SignedSource<<82c234a2ebba81c7be48dfe06da3f385>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ExpressionDetailsStoriesQuery$variables = Record<PropertyKey, never>;
export type ExpressionDetailsStoriesQuery$data = {
  readonly expression: {
    readonly " $fragmentSpreads": FragmentRefs<"ExpressionDetailsFragment">;
  } | null | undefined;
};
export type ExpressionDetailsStoriesQuery = {
  response: ExpressionDetailsStoriesQuery$data;
  variables: ExpressionDetailsStoriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExpressionDetailsStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ExpressionNode",
        "kind": "LinkedField",
        "name": "expression",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ExpressionDetailsFragment"
          }
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ExpressionDetailsStoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ExpressionNode",
        "kind": "LinkedField",
        "name": "expression",
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
            "name": "content",
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
            "name": "grammarExplanation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "generalExplanation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "wordsExplanation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "audioUrl",
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
            "name": "changes",
            "storageKey": null
          }
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "4f5d3cb48b3dccb653fb49a465ec6df1",
    "id": null,
    "metadata": {},
    "name": "ExpressionDetailsStoriesQuery",
    "operationKind": "query",
    "text": "query ExpressionDetailsStoriesQuery {\n  expression(id: \"1\") {\n    ...ExpressionDetailsFragment\n    id\n  }\n}\n\nfragment ExpressionDetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n}\n"
  }
};
})();

(node as any).hash = "a6143c9b693619fc1e03b90d54bf07b3";

export default node;
