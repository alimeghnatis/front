/**
 * @generated SignedSource<<8977a8fa646c10044e3a4b5de9a7b15c>>
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
  isDefault?: boolean | null | undefined;
  isPublic?: boolean | null | undefined;
  iso6391?: string | null | undefined;
  iso6392?: string | null | undefined;
  iso6393?: string | null | undefined;
  name: string;
};
export type BoardSettingsFormUpdateMutation$variables = {
  input: UpdateBoardMutationInput;
};
export type BoardSettingsFormUpdateMutation$data = {
  readonly updateBoard: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly enabledLanguages: any;
      readonly explanationsLanguage: string;
      readonly id: string;
      readonly isDefault: boolean;
      readonly isPublic: boolean;
      readonly name: string;
    } | null | undefined;
  } | null | undefined;
};
export type BoardSettingsFormUpdateMutation = {
  response: BoardSettingsFormUpdateMutation$data;
  variables: BoardSettingsFormUpdateMutation$variables;
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
            "name": "isDefault",
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
    "name": "BoardSettingsFormUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BoardSettingsFormUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "13ee72b89a3ec228fd94ffd7283cd139",
    "id": null,
    "metadata": {},
    "name": "BoardSettingsFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation BoardSettingsFormUpdateMutation(\n  $input: UpdateBoardMutationInput!\n) {\n  updateBoard(input: $input) {\n    instance {\n      id\n      name\n      isPublic\n      isDefault\n      explanationsLanguage\n      enabledLanguages\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "aa5a1d4d7403dde501d02804ca1a4f43";

export default node;
