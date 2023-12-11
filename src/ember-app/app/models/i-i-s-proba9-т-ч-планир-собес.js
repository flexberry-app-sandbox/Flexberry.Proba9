import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧПланирСобесMixin
} from '../mixins/regenerated/models/i-i-s-proba9-т-ч-планир-собес';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПланирСобесMixin, Validations, {
});

defineProjections(Model);

export default Model;
