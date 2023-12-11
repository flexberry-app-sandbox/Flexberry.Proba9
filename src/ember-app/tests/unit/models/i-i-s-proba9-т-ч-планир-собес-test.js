import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba9-т-ч-планир-собес', 'Unit | Model | i-i-s-proba9-т-ч-планир-собес', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba9-должности',
    'model:i-i-s-proba9-организация',
    'model:i-i-s-proba9-планир-собес',
    'model:i-i-s-proba9-рег-результ',
    'model:i-i-s-proba9-регист-анкеты',
    'model:i-i-s-proba9-сотрудники',
    'model:i-i-s-proba9-т-ч-планир-собес',
    'model:i-i-s-proba9-т-ч-регист-анкеты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
