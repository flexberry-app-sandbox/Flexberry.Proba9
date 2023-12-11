import {
  defineNamespace,
  defineProjections,
  Model as ТЧРегистАнкетыMixin
} from '../mixins/regenerated/models/i-i-s-proba9-т-ч-регист-анкеты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРегистАнкетыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
