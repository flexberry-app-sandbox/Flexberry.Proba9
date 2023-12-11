import { Serializer as РегистАнкетыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba9-регист-анкеты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистАнкетыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
