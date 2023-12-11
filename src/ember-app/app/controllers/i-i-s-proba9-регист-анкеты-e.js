import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proba9-регист-анкеты-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proba9-т-ч-регист-анкеты+должности':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'должности',
            required: true,
            relationName: 'должности',
            projection: 'ДолжностиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
