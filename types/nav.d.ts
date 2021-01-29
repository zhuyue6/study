import { AsyncComponent as VueComponent } from 'vue' 

export namespace Nav {
   type BaseInfo = {
    type?: 'dir' | 'file'
    readonly path: string
    absolutePath?: string
    quotePath?: string
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

