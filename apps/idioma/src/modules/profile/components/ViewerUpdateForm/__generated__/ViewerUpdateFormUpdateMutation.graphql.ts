/**
 * @generated SignedSource<<b1039e1f0f46437e2d13b8b2eeb4909f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateUserMutationInput = {
  clientMutationId?: string | null | undefined;
  email?: string | null | undefined;
  firstName?: string | null | undefined;
  id?: string | null | undefined;
  isActive?: boolean | null | undefined;
  isStaff?: boolean | null | undefined;
  isSuperuser?: boolean | null | undefined;
  lastName?: string | null | undefined;
  preferences?: UserPreferencesSerializerInput | null | undefined;
  profilePicture?: string | null | undefined;
  username?: string | null | undefined;
};
export type UserPreferencesSerializerInput = {
  actionOnExpressionClick?: string | null | undefined;
  id?: string | null | undefined;
  user?: string | null | undefined;
};
export type ViewerUpdateFormUpdateMutation$variables = {
  input: UpdateUserMutationInput;
};
export type ViewerUpdateFormUpdateMutation$data = {
  readonly updateUser: {
    readonly errors: ReadonlyArray<{
      readonly field: string;
      readonly messages: ReadonlyArray<string>;
    } | null | undefined> | null | undefined;
    readonly instance: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"ViewerUpdateFormFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type ViewerUpdateFormUpdateMutation = {
  response: ViewerUpdateFormUpdateMutation$data;
  variables: ViewerUpdateFormUpdateMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerUpdateFormUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserMutationPayload",
        "kind": "LinkedField",
        "name": "updateUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ViewerUpdateFormFragment"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ViewerUpdateFormUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserMutationPayload",
        "kind": "LinkedField",
        "name": "updateUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "kind": "LinkedField",
            "name": "instance",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
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
                "name": "updated",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "profilePicture",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isSuperuser",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "UserPreferencesNode",
                "kind": "LinkedField",
                "name": "preferences",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "actionOnExpressionClick",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4f3bb9d60a58d14cdfc152f6b19e93ff",
    "id": null,
    "metadata": {},
    "name": "ViewerUpdateFormUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ViewerUpdateFormUpdateMutation(\n  $input: UpdateUserMutationInput!\n) {\n  updateUser(input: $input) {\n    instance {\n      id\n      ...ViewerUpdateFormFragment\n    }\n    errors {\n      field\n      messages\n    }\n  }\n}\n\nfragment ViewerUpdateFormFragment on UserNode {\n  id\n  firstName\n  lastName\n  created\n  updated\n  email\n  profilePicture\n  isSuperuser\n  preferences {\n    id\n    actionOnExpressionClick\n  }\n}\n"
  }
};
})();

(node as any).hash = "73aadc62c066aabd783f414dfafed165";

export default node;
