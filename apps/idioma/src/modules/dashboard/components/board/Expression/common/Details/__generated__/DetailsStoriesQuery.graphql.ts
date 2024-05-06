/**
 * @generated SignedSource<<c54710c49dfe049fe6a6300ed8237c37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DetailsStoriesQuery$variables = Record<PropertyKey, never>;
export type DetailsStoriesQuery$data = {
  readonly expression: {
    readonly " $fragmentSpreads": FragmentRefs<"DetailsFragment">;
  } | null | undefined;
};
export type DetailsStoriesQuery = {
  response: DetailsStoriesQuery$data;
  variables: DetailsStoriesQuery$variables;
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
    "name": "DetailsStoriesQuery",
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
            "name": "DetailsFragment"
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
    "name": "DetailsStoriesQuery",
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
            "name": "translation",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rating",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "ratingComment",
            "storageKey": null
          }
        ],
        "storageKey": "expression(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "9abe781968eee49ad8db1abaa450e992",
    "id": null,
    "metadata": {},
    "name": "DetailsStoriesQuery",
    "operationKind": "query",
    "text": "query DetailsStoriesQuery {\n  expression(id: \"1\") {\n    ...DetailsFragment\n    id\n  }\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n"
  }
};
})();

(node as any).hash = "beabc7bcf2c0558ea3a461c1c49b5b97";

export default node;
