import { AsyncComponent as VueComponent } from 'vue' 

export namespace Nav {
  type BaseInfo = {
    path: string
    absolutePath?: string
    readonly name: string
    index?: number
    component: VueComponent
  }
  interface MenuItem extends BaseInfo {
    readonly class?: string
  }
  
  interface NavBaseInfo extends BaseInfo {
    component: VueComponent
    children?: MenuItem[]
  }
  
  interface Config {
    main: NavBaseInfo
    subList: NavBaseInfo[]
  }
} 

