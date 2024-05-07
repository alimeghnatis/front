import * as React from 'react'
// import { InferProps } from 'prop-types'
import {
  RoutesConfig, RouteConfig,
} from '../../common/index.js'

export type TriptychMatch = {
  focus:number;
  match:any;
}

export type TriptychState = TriptychMatch & {
  primaryRoutes    :RoutesConfig;
  secondaryRoutes  :RoutesConfig;
  selectedSecondary:RouteConfig;
}

export type TriptychContextType = {
  state           :TriptychState;
  setState        :(payload: TriptychMatch) => void;
  setFocus        :(focus: number) => void;
  toggleNavigation:() => void;
  selectSecondary :(id: string) => void;
}

export default React.createContext<TriptychContextType>({} as TriptychContextType)
