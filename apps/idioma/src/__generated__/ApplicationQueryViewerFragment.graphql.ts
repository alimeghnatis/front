/**
 * @generated SignedSource<<b560f93bd093a35a902e193163e51290>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ApplicationQueryViewerFragment$data = {
  readonly boardMemberships: {
    readonly " $fragmentSpreads": FragmentRefs<"HomeBoardMembershipsFragment" | "NavigationBoardMembershipsFragment" | "SelectHeaderFragment">;
  };
  readonly created: any;
  readonly email: string;
  readonly firstName: string;
  readonly id: string;
  readonly isActive: boolean;
  readonly isSuperuser: boolean;
  readonly lastName: string;
  readonly profilePicture: string | null | undefined;
  readonly updated: any;
  readonly " $fragmentSpreads": FragmentRefs<"ApplicationQueryAuthenticationDebugFragment" | "ProfileDashboardFragment" | "ProfileFragment">;
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
      "name": "ProfileFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProfileDashboardFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ApplicationQueryAuthenticationDebugFragment"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
      "concreteType": "BoardMembershipNodeConnection",
      "kind": "LinkedField",
      "name": "boardMemberships",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SelectHeaderFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HomeBoardMembershipsFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NavigationBoardMembershipsFragment"
        }
      ],
      "storageKey": "boardMemberships(first:50)"
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "069a95bf49b0207bb29fffd41e3b5ab1";

export default node;
