import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРегистр: DS.attr('date', { defaultValue() { return new Date(); } }),
  организация: DS.belongsTo('i-i-s-proba9-организация', { inverse: null, async: false }),
  тЧРегистАнкеты: DS.hasMany('i-i-s-proba9-т-ч-регист-анкеты', { inverse: 'регистАнкеты', async: false })
});

export let ValidationRules = {
  датаРегистр: {
    descriptionKey: 'models.i-i-s-proba9-регист-анкеты.validations.датаРегистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba9-регист-анкеты.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегистАнкеты: {
    descriptionKey: 'models.i-i-s-proba9-регист-анкеты.validations.тЧРегистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистАнкетыE', 'i-i-s-proba9-регист-анкеты', {
    датаРегистр: attr('Дата регистр', { index: 0 }),
    организация: belongsTo('i-i-s-proba9-организация', 'Организация', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' }),
    тЧРегистАнкеты: hasMany('i-i-s-proba9-т-ч-регист-анкеты', 'Т ч регист анкеты', {
      фИОКандидата: attr('Ф и о кандидата', { index: 0 }),
      серНомПаспорта: attr('Сер ном паспорта', { index: 1 }),
      иНН: attr('ИНН', { index: 2 }),
      снилс: attr('Снилс', { index: 3 }),
      номерТелефона: attr('Номер телефона', { index: 4 }),
      элПочта: attr('Эл почта', { index: 5 }),
      должности: belongsTo('i-i-s-proba9-должности', 'Должности', {
        должности: attr('Должности', { index: 7, hidden: true })
      }, { index: 6, displayMemberPath: 'должности' })
    })
  });

  modelClass.defineProjection('РегистАнкетыL', 'i-i-s-proba9-регист-анкеты', {
    датаРегистр: attr('Дата регистр', { index: 0 }),
    организация: belongsTo('i-i-s-proba9-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
