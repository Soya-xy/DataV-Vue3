import { defineComponent, renderSlot } from 'vue'
import type { BorderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import { borderBoxProps } from 'packages/datav-vue3/types/BorderProps'
import autoResize from 'packages/datav-vue3/utils/autoResize'
import { deepClone, deepMerge } from 'packages/datav-vue3/utils'
import './index.less'

export default defineComponent({
  props: borderBoxProps,
  setup(props: BorderBoxProps) {
    const borderBox10 = ref<HTMLElement | null>(null)

    const { width, height, initWH } = autoResize(borderBox10)

    const state = reactive({
      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],

      defaultColor: ['#1d48c4', '#d3e1f8'],

      mergedColor: [],
    })

    watch(() => props.color, () => {
      mergeColor()
    })

    onMounted(() => {
      mergeColor()
    })

    function mergeColor() {
      state.mergedColor = deepMerge(deepClone(state.defaultColor, true), props.color || [])
    }

    return {
      width,
      height,
      initWH,
      state,
      borderBox10,
    }
  },
  render() {
    const { $slots, width, height, state, backgroundColor } = this
    return (
      <div ref="borderBox10" class="dv-border-box-10" style={`box-shadow: inset 0 0 25px 3px ${state.mergedColor[0]}`}>
        <svg class="dv-border-svg-container" width={width} height={height}>
          <polygon
            fill={backgroundColor} points={`
              4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
              4, ${height} 0, ${height - 4} 0, 4
            `}
          />
        </svg>
        {
          state.border.map((item) => {
            return (
              <svg
                width="150px"
                height="150px"
                class={`${item} dv-border-svg-container`}
              >
                <polygon
                  fill={state.mergedColor[1]}
                  points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
                />
              </svg>
            )
          })
        }

        <div class="border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div>
    )
  },
})
