import { library, config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

config.autoAddCss = false

import {
  faHouse,
  faXmark,
  faGripLines,
  faTicket,
} from "@fortawesome/free-solid-svg-icons"
import { faHandshake, faCircleRight } from "@fortawesome/free-regular-svg-icons"
import {} from "@fortawesome/free-brands-svg-icons"
library.add(faHouse, faXmark, faGripLines, faTicket, faHandshake, faCircleRight)

export default defineNuxtPlugin({
  name: "fontawesome",
  setup(nuxtApp) {
    nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon)
  },
})
