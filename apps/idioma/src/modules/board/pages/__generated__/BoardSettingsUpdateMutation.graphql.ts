/**
 * @generated SignedSource<<ff71976a3c0c532db9998cf6742fcc5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateBoardMutationInput = {
  clientMutationId?: string | null | undefined;
  defaultForUser?: string | null | undefined;
  enabledLanguages?: any | null | undefined;
  explanationsLanguage?: string | null | undefined;
  id?: string | null | undefined;
  isPublic?: boolean | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  name: string;
};
export type BoardSettingsUpdateMutation$variables = {
  input: UpdateBoardMutationInput;
};
export type BoardSettingsUpdateMutation$data = {
  readonly updateBoard: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly enabledLanguages: any;
      readonly explanationsLanguage: string;
      readonly id: string;
      readonly isPublic: boolean;
      readonly name: string;
    } | null | undefined;
  } | null | undefined;
};
export type BoardSettingsUpdateMutation = {
  response: BoardSettingsUpdateMutation$data;
  variables: BoardSettingsUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateBoardMutationPayload",
    "kind": "LinkedField",
    "name": "updateBoard",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "BoardNode",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPublic",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "explanationsLanguage",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "enabledLanguages",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardSettingsUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardSettingsUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eb682f680862c43dea3d66f5e9ddf884",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation BoardSettingsUpdateMutation(\n  $input: UpdateBoardMutationInput!\n) {\n  updateBoard(input: $input) {\n    instance {\n      id\n      name\n      isPublic\n      explanationsLanguage\n      enabledLanguages\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "612bf8c590031c2757a9288d573a3c0c";

export default node;
