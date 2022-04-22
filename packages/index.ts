/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import type { App, Plugin } from 'vue'
import 'uno.css'

import { DigitalFlopPlugin } from './components/DigitalFlop'
import { FullScreenContainerPlugin } from './components/FullScreenContainer'
import { Decoration1Plugin } from './components/Decoration1'
import { Decoration2Plugin } from './components/Decoration2'
import { Decoration3Plugin } from './components/Decoration3'
import { Decoration4Plugin } from './components/Decoration4'
import { Decoration5Plugin } from './components/Decoration5'
import { Decoration6Plugin } from './components/Decoration6'
import { Decoration7Plugin } from './components/Decoration7'
import { Decoration8Plugin } from './components/Decoration8'
import { Decoration9Plugin } from './components/Decoration9'
import { Decoration10Plugin } from './components/Decoration10'
import { Decoration11Plugin } from './components/Decoration11'
import { Decoration12Plugin } from './components/Decoration12'
import { BorderBox1Plugin } from './components/BorderBox1'
import { BorderBox2Plugin } from './components/BorderBox2'
import { BorderBox3Plugin } from './components/BorderBox3'
import { BorderBox4Plugin } from './components/BorderBox4'
import { BorderBox5Plugin } from './components/BorderBox5'
import { BorderBox6Plugin } from './components/BorderBox6'
import { BorderBox7Plugin } from './components/BorderBox7'
import { BorderBox8Plugin } from './components/BorderBox8'
import { BorderBox9Plugin } from './components/BorderBox9'

const DataVVue3Plugin: Plugin = {
  install(app: App) {
        DigitalFlopPlugin.install?.(app)
        FullScreenContainerPlugin.install?.(app)
       Decoration1Plugin.install?.(app)
   Decoration2Plugin.install?.(app)
   Decoration3Plugin.install?.(app)
   Decoration4Plugin.install?.(app)
   Decoration5Plugin.install?.(app)
   Decoration6Plugin.install?.(app)
   Decoration7Plugin.install?.(app)
   Decoration8Plugin.install?.(app)
   Decoration9Plugin.install?.(app)
   Decoration10Plugin.install?.(app)
   Decoration11Plugin.install?.(app)
   Decoration12Plugin.install?.(app)
       BorderBox1Plugin.install?.(app)
   BorderBox2Plugin.install?.(app)
   BorderBox3Plugin.install?.(app)
   BorderBox4Plugin.install?.(app)
   BorderBox5Plugin.install?.(app)
   BorderBox6Plugin.install?.(app)
   BorderBox7Plugin.install?.(app)
   BorderBox8Plugin.install?.(app)
   BorderBox9Plugin.install?.(app)
  },
}

export default DataVVue3Plugin

export * from './components/DigitalFlop'
export * from './components/FullScreenContainer'
export * from './components/Decoration1'
export * from './components/Decoration2'
export * from './components/Decoration3'
export * from './components/Decoration4'
export * from './components/Decoration5'
export * from './components/Decoration6'
export * from './components/Decoration7'
export * from './components/Decoration8'
export * from './components/Decoration9'
export * from './components/Decoration10'
export * from './components/Decoration11'
export * from './components/Decoration12'
export * from './components/BorderBox1'
export * from './components/BorderBox2'
export * from './components/BorderBox3'
export * from './components/BorderBox4'
export * from './components/BorderBox5'
export * from './components/BorderBox6'
export * from './components/BorderBox7'
export * from './components/BorderBox8'
export * from './components/BorderBox9'
