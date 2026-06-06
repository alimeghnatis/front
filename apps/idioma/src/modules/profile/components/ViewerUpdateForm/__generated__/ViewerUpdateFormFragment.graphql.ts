/**
 * @generated SignedSource<<843029972ae10b401ca48fae938638e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewerUpdateFormFragment$data = {
  readonly created: any;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly isSuperuser: boolean;
  readonly lastName: string;
  readonly preferences: {
    readonly actionOnExpressionClick: string;
    readonly id: string;
  } | null | undefined;
  readonly profilePicture: string | null | undefined;
  readonly updated: any;
  readonly " $fragmentType": "ViewerUpdateFormFragment";
};
export type ViewerUpdateFormFragment$key = {
  readonly " $data"?: ViewerUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewerUpdateFormFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewerUpdateFormFragment",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
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
  "type": "UserNode",
  "abstractKey": null
};
})();

(node as any).hash = "c854372d5a13a3d20001d2b7d59fb24e";

export default node;
