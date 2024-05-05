import * as React from 'react'
// import { InferProps } from 'prop-types'
import { RoutesConfig } from '../../common/index.js'

export type TriptychMatch = {
  focus:number;
  match:any;
}

export type TriptychState = TriptychMatch & {
  primaryRoutes  :RoutesConfig;
  secondaryRoutes:RoutesConfig;
}

export type TriptychContextType = {
  state           :TriptychState;
  setState        :(payload: TriptychMatch) => void;
  toggleNavigation:() => void;
}

export default React.createContext<TriptychContextType>({} as TriptychContextType)
