import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba9.caption'),
          title: i18n.t('forms.application.sitemap.proba9.title'),
          children: [{
            link: 'i-i-s-proba9-организация-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-организация-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proba9-должности-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-должности-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proba9-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-регист-анкеты-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-proba9-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-планир-собес-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-proba9-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-сотрудники-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-proba9-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba9.i-i-s-proba9-рег-результ-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})