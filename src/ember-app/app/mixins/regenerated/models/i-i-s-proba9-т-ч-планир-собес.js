import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧРегистАнкеты: DS.belongsTo('i-i-s-proba9-т-ч-регист-анкеты', { inverse: null, async: false }),
  планирСобес: DS.belongsTo('i-i-s-proba9-планир-собес', { inverse: 'тЧПланирСобес', async: false })
});

export let ValidationRules = {
  тЧРегистАнкеты: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-планир-собес.validations.тЧРегистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планирСобес: {
    descriptionKey: 'models.i-i-s-proba9-т-ч-планир-собес.validations.планирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПланирСобесE', 'i-i-s-proba9-т-ч-планир-собес', {
    тЧРегистАнкеты: belongsTo('i-i-s-proba9-т-ч-регист-анкеты', '', {
      иНН: attr('', { index: 1 }),
      номерТелефона: attr('', { index: 2 }),
      серНомПаспорта: attr('', { index: 3 }),
      снилс: attr('', { index: 4 }),
      фИОКандидата: attr('', { index: 5 }),
      элПочта: attr('', { index: 6 }),
      должности: belongsTo('i-i-s-proba9-должности', '', {
        должности: attr('', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 0 })
  });

  modelClass.defineProjection('ТЧПланирСобесL', 'i-i-s-proba9-т-ч-планир-собес', {
    тЧРегистАнкеты: belongsTo('i-i-s-proba9-т-ч-регист-анкеты', '', {
      иНН: attr('', { index: 0 }),
      номерТелефона: attr('', { index: 1 }),
      серНомПаспорта: attr('', { index: 2 }),
      снилс: attr('', { index: 3 }),
      фИОКандидата: attr('', { index: 4 }),
      элПочта: attr('', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
