import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  должности: DS.attr('string')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-proba9-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-proba9-должности.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-proba9-должности', {
    iDДолжности: attr('I d должности', { index: 0 }),
    должности: attr('Должности', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-proba9-должности', {
    iDДолжности: attr('I d должности', { index: 0 }),
    должности: attr('Должности', { index: 1 })
  });
};
