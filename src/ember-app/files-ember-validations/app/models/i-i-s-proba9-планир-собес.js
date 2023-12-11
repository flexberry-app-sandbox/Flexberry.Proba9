import {
  defineNamespace,
  defineProjections,
  Model as ПланирСобесMixin
} from '../mixins/regenerated/models/i-i-s-proba9-планир-собес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПланирСобесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
