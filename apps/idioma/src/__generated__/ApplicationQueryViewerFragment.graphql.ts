/**
 * @generated SignedSource<<8c72a5884ddb68ad33502db22e0f5889>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQueryViewerFragment$data = {
  readonly created: any;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly isActive: boolean;
  readonly isSuperuser: boolean;
  readonly lastName: string;
  readonly profilePicture: string | null | undefined;
  readonly updated: any;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryAuthenticationDebugFragment" | "ViewerUpdateFormFragment" | "useBoardMembershipsFragment">;
  readonly " $fragmentType": "ApplicationQueryViewerFragment";
};
export type ApplicationQueryViewerFragment$key = {
  readonly " $data"?: ApplicationQueryViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ApplicationQueryViewerFragment",
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
      "name": "isActive",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ViewerUpdateFormFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ApplicationQueryAuthenticationDebugFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useBoardMembershipsFragment"
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "efba39d18906049e305b9842aadcd401";

export default node;
