import { Func0 } from 'redux'

export type Nullable<T> = T | null
export type Action<AC> = Func0<AC> | Func0<{}>
export type Void = () => void
