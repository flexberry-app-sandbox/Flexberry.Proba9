import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.attr('string'),
  фИОСотруд: DS.attr('string')
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-proba9-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИОСотруд: {
    descriptionKey: 'models.i-i-s-proba9-сотрудники.validations.фИОСотруд.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-proba9-сотрудники', {
    фИОСотруд: attr('Ф и о сотруд', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-proba9-сотрудники', {
    фИОСотруд: attr('Ф и о сотруд', { index: 0 }),
    должность: attr('Должность', { index: 1 })
  });
};
