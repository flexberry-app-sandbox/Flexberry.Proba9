import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba9-рег-результ', 'Unit | Serializer | i-i-s-proba9-рег-результ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba9-рег-результ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba9-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
