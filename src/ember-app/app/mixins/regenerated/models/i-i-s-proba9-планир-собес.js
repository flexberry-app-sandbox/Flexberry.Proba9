import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba9-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba9-регист-анкеты', { inverse: null, async: false }),
  тЧПланирСобес: DS.hasMany('i-i-s-proba9-т-ч-планир-собес', { inverse: 'планирСобес', async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba9-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba9-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba9-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba9-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПланирСобес: {
    descriptionKey: 'models.i-i-s-proba9-планир-собес.validations.тЧПланирСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba9-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba9-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    регистАнкеты: belongsTo('i-i-s-proba9-регист-анкеты', 'Регист анкеты', {
      датаРегистр: attr('Дата регистр', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'датаРегистр' }),
    тЧПланирСобес: hasMany('i-i-s-proba9-т-ч-планир-собес', '', {
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
    })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba9-планир-собес', {
    датаПланСобес: attr('Дата план собес', { index: 0 }),
    иметьПриСебе: attr('Иметь при себе', { index: 1 }),
    организация: belongsTo('i-i-s-proba9-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    регистАнкеты: belongsTo('i-i-s-proba9-регист-анкеты', 'Дата регистр', {
      датаРегистр: attr('Дата регистр', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
