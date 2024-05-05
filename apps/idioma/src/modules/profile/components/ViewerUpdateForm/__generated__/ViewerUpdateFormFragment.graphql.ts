/**
 * @generated SignedSource<<59c7a3a24eacd7d34c8454f575ced0e4>>
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
  readonly profilePicture: string | null | undefined;
  readonly updated: any;
  readonly " $fragmentType": "ViewerUpdateFormFragment";
};
export type ViewerUpdateFormFragment$key = {
  readonly " $data"?: ViewerUpdateFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewerUpdateFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewerUpdateFormFragment",
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
      "name": "isSuperuser",
      "storageKey": null
    }
  ],
  "type": "UserNode",
  "abstractKey": null
};

(node as any).hash = "c17b9df5b3fc7d79dbaa1555baae5a1f";

export default node;
