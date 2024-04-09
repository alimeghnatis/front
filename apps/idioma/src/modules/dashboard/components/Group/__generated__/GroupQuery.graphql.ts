/**
 * @generated SignedSource<<e4403a23bf9e0027bdb657cca4eb1d20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GroupQuery$variables = Record<PropertyKey, never>;
export type GroupQuery$data = {
  readonly group: {
    readonly " $fragmentSpreads": FragmentRefs<"GroupFragment">;
  } | null | undefined;
};
export type GroupQuery = {
  response: GroupQuery$data;
  variables: GroupQuery$variables;
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GroupQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "GroupNode",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GroupFragment"
          }
        ],
        "storageKey": "group(id:\"1\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GroupQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "GroupNode",
        "kind": "LinkedField",
        "name": "group",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNodeConnection",
            "kind": "LinkedField",
            "name": "expressions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ExpressionNodeEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ExpressionNode",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
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
                        "name": "wordsExplanation",
                        "storageKey": null
                      },
                      (v2/*: any*/)
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
        "storageKey": "group(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "0573359ca2e12be311a883d78d4e1ed6",
    "id": null,
    "metadata": {},
    "name": "GroupQuery",
    "operationKind": "query",
    "text": "query GroupQuery {\n  group(id: \"1\") {\n    ...GroupFragment\n    id\n  }\n}\n\nfragment GroupExpressionFragment on ExpressionNode {\n  id\n  content\n  correctedContent\n  grammarExplanation\n  wordsExplanation\n  created\n}\n\nfragment GroupFragment on GroupNode {\n  id\n  created\n  expressions {\n    edges {\n      node {\n        ...GroupExpressionFragment\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "af964161f376d0273db1918604076c7a";

export default node;
