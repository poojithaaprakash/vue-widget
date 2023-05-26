import { App } from 'vue'
import { Plugin } from 'vue';
import './tailwind.css'

import SkeletonCard from './components/SkeletonCard/SkeletonCard.vue';

const SkeletonCardLibrary = {
  install(app: App) {
    app.component(SkeletonCard.name, SkeletonCard)
  }
};

export default SkeletonCardLibrary as Plugin;
export {default as SkeletonCard} from './components/SkeletonCard/SkeletonCard.vue';

