import {
  defineNamespace,
  defineProjections,
  Model as ТЧПланирСобесMixin
} from '../mixins/regenerated/models/i-i-s-proba9-т-ч-планир-собес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧПланирСобесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
