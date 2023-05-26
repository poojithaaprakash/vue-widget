import { App } from 'vue'
import { Plugin } from 'vue';
import './tailwind.css'

import ReputeXWidget from './components/ReputeXWidget/ReputeXWidget.vue';

const RepxWidgetLibrary = {
  install(app: App) {
    app.component(ReputeXWidget.name, ReputeXWidget)
  }
};

export default RepxWidgetLibrary as Plugin;
export {default as ReputeXWidget} from './components/ReputeXWidget/ReputeXWidget.vue'

