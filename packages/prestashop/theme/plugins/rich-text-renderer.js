import Vue from 'vue'
import RichTextRenderer from '@marvinrudolph/vue-storyblok-rich-text-renderer';
import { components } from '../components/storyblok'
Vue.use(RichTextRenderer, {
    global: true,
    resolvers: {
        components: {
          _default: (h, body, node) => h(components[body.component]|| components.debug,{ 
            props: {
                item: body
            }
          })
        }
    }
});
