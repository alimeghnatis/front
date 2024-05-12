/**
 * @generated SignedSource<<2cebd5145a5a60a929767aafc4bbd075>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateExpressionMutationInput = {
  appendAfter?: string | null | undefined;
  audioKey?: string | null | undefined;
  audioUrl?: string | null | undefined;
  board?: string | null | undefined;
  category?: string | null | undefined;
  changes?: string | null | undefined;
  charactersUsed?: number | null | undefined;
  clientMutationId?: string | null | undefined;
  content?: string | null | undefined;
  correctedContent?: string | null | undefined;
  createdBy?: string | null | undefined;
  flagComment?: string | null | undefined;
  flagIsProcessed?: boolean | null | undefined;
  generalExplanation?: string | null | undefined;
  grammarExplanation?: string | null | undefined;
  group?: string | null | undefined;
  id?: string | null | undefined;
  isBookmarked?: boolean | null | undefined;
  isProcessed?: boolean | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  rated?: any | null | undefined;
  rating?: number | null | undefined;
  ratingComment?: string | null | undefined;
  retriesGeneration?: number | null | undefined;
  tokensUsedCompletion?: number | null | undefined;
  tokensUsedPrompt?: number | null | undefined;
  tokensUsedTotal?: number | null | undefined;
  translation?: string | null | undefined;
  variant?: string | null | undefined;
  variantFrom?: string | null | undefined;
  variantName?: string | null | undefined;
  variantWord?: string | null | undefined;
  voiceId?: string | null | undefined;
  wordsExplanation?: string | null | undefined;
};
export type ExpressionCreateFormAppendExpressionMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateExpressionMutationInput;
};
export type ExpressionCreateFormAppendExpressionMutation$data = {
  readonly createExpression: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly " $fragmentSpreads": FragmentRefs<"DefaultExpressionFragment" | "DetailsFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type ExpressionCreateFormAppendExpressionMutation = {
  response: ExpressionCreateFormAppendExpressionMutation$data;
  variables: ExpressionCreateFormAppendExpressionMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ErrorType",
  "kind": "LinkedField",
  "name": "errors",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "field",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "messages",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExpressionCreateFormAppendExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DefaultExpressionFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailsFragment"
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ExpressionCreateFormAppendExpressionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateExpressionMutationPayload",
        "kind": "LinkedField",
        "name": "createExpression",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExpressionNode",
            "kind": "LinkedField",
            "name": "instance",
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
                "name": "isProcessed",
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
                "name": "isBookmarked",
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
                "name": "translation",
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
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isNew",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "instance",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "ExpressionNodeEdge"
              }
            ]
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d92dc8e78152ce823dfac5a0d6527912",
    "id": null,
    "metadata": {},
    "name": "ExpressionCreateFormAppendExpressionMutation",
    "operationKind": "mutation",
    "text": "mutation ExpressionCreateFormAppendExpressionMutation(\n  $input: CreateExpressionMutationInput!\n) {\n  createExpression(input: $input) {\n    instance {\n      ...DefaultExpressionFragment\n      ...DetailsFragment\n      id\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment AudioButtonFragment on ExpressionNode {\n  id\n  audioUrl\n  iso6391\n  iso6392\n  iso6393\n}\n\nfragment BookmarkButtonFragment on ExpressionNode {\n  id\n  isBookmarked\n}\n\nfragment DefaultExpressionFragment on ExpressionNode {\n  id\n  isProcessed\n  created\n  iso6391\n  iso6392\n  iso6393\n  ...ExpressionFragment\n}\n\nfragment DeleteButtonFragment on ExpressionNode {\n  id\n}\n\nfragment DetailsFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  translation\n  correctedContent\n  grammarExplanation\n  generalExplanation\n  wordsExplanation\n  audioUrl\n  created\n  changes\n  ...RatingFormFragment\n}\n\nfragment ExpressionFragment on ExpressionNode {\n  id\n  content\n  iso6391\n  iso6392\n  iso6393\n  correctedContent\n  created\n  isProcessed\n  isBookmarked\n  ...AudioButtonFragment\n  ...DeleteButtonFragment\n  ...BookmarkButtonFragment\n  ...DetailsFragment\n  ...VariantFragment\n}\n\nfragment RatingFormFragment on ExpressionNode {\n  id\n  rating\n  ratingComment\n}\n\nfragment VariantFragment on ExpressionNode {\n  id\n  iso6391\n  iso6392\n  iso6393\n  content\n  created\n}\n"
  }
};
})();

(node as any).hash = "03cea6f1e1aa7e65e3925aea5d1e5841";

export default node;
