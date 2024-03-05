import { mount } from "@vue/test-utils"
import { nextTick } from "vue"
import LuxLibraryLogo from "@/components/LuxLibraryLogo.vue"
import LuxLogoLibrary from "@/components/logos/LuxLogoLibrary.vue"
import LuxLogoLibraryIcon from "@/components/logos/LuxLogoLibraryIcon.vue"

describe("LuxLibraryLogo.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(LuxLibraryLogo, {
      global: {
        components: { LuxLogoLibrary, LuxLogoLibraryIcon },
      },
    })
  })

  it("defaults to a div", () => {
    expect(wrapper.get("div").exists()).toBe(true)
  })
  it("can be a different type of html element", async () => {
    wrapper.setProps({ type: "marquee" })
    await nextTick()
    expect(wrapper.get("marquee").exists()).toBe(true)
    expect(wrapper.find("div").exists()).toBe(false)
  })
  it("can display in dark themes", async () => {
    wrapper.setProps({ theme: "dark" })
    await nextTick()
    expect(wrapper.find("path[style = 'fill: #fff']").exists()).toBe(true)
  })
})
