import { AsyncComponent as VueComponent } from 'vue' 

export namespace Nav {
   type BaseInfo = {
    readonly path: string
    absolutePath?: string
    readonly name: string
    index?: string
    readonly class?: string
    children?: BaseInfo[]
    component?: VueComponent | string
  }
  interface Config {
    main: BaseInfo
    subList: BaseInfo[]
  }
} 

