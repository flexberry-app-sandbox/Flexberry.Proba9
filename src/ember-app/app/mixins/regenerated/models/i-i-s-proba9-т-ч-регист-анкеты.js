import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  серНомПаспорта: DS.attr('number'),
  снилс: DS.attr('number'),
  фИОКандидата: DS.attr('string'),
  элПочта: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-proba9-должности', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba9-регист-анкеты', { inverse: 'тЧРегистАнкеты', async: false })
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  снилс: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.снилс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИОКандидата: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.фИОКандидата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  элПочта: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.элПочта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-регист-анкеты.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегистАнкетыE', 'i-i-s-proba9-т-ч-регист-анкеты', {
    фИОКандидата: attr('Ф и о кандидата', { index: 0 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 1 }),
    иНН: attr('ИНН', { index: 2 }),
    снилс: attr('Снилс', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    элПочта: attr('Эл почта', { index: 5 }),
    должности: belongsTo('i-i-s-proba9-должности', 'Должности', {
      должности: attr('Должности', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'должности' })
  });
};
