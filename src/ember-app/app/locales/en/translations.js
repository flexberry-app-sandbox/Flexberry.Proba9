import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba9ДолжностиLForm from './forms/i-i-s-proba9-должности-l';
import IISProba9ОрганизацияLForm from './forms/i-i-s-proba9-организация-l';
import IISProba9ПланирСобесLForm from './forms/i-i-s-proba9-планир-собес-l';
import IISProba9РегРезультLForm from './forms/i-i-s-proba9-рег-результ-l';
import IISProba9РегистАнкетыLForm from './forms/i-i-s-proba9-регист-анкеты-l';
import IISProba9СотрудникиLForm from './forms/i-i-s-proba9-сотрудники-l';
import IISProba9ДолжностиEForm from './forms/i-i-s-proba9-должности-e';
import IISProba9ОрганизацияEForm from './forms/i-i-s-proba9-организация-e';
import IISProba9ПланирСобесEForm from './forms/i-i-s-proba9-планир-собес-e';
import IISProba9РегРезультEForm from './forms/i-i-s-proba9-рег-результ-e';
import IISProba9РегистАнкетыEForm from './forms/i-i-s-proba9-регист-анкеты-e';
import IISProba9СотрудникиEForm from './forms/i-i-s-proba9-сотрудники-e';
import IISProba9ДолжностиModel from './models/i-i-s-proba9-должности';
import IISProba9ОрганизацияModel from './models/i-i-s-proba9-организация';
import IISProba9ПланирСобесModel from './models/i-i-s-proba9-планир-собес';
import IISProba9РегРезультModel from './models/i-i-s-proba9-рег-результ';
import IISProba9РегистАнкетыModel from './models/i-i-s-proba9-регист-анкеты';
import IISProba9СотрудникиModel from './models/i-i-s-proba9-сотрудники';
import IISProba9ТЧПланирСобесModel from './models/i-i-s-proba9-т-ч-планир-собес';
import IISProba9ТЧРегистАнкетыModel from './models/i-i-s-proba9-т-ч-регист-анкеты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba9-должности': IISProba9ДолжностиModel,
    'i-i-s-proba9-организация': IISProba9ОрганизацияModel,
    'i-i-s-proba9-планир-собес': IISProba9ПланирСобесModel,
    'i-i-s-proba9-рег-результ': IISProba9РегРезультModel,
    'i-i-s-proba9-регист-анкеты': IISProba9РегистАнкетыModel,
    'i-i-s-proba9-сотрудники': IISProba9СотрудникиModel,
    'i-i-s-proba9-т-ч-планир-собес': IISProba9ТЧПланирСобесModel,
    'i-i-s-proba9-т-ч-регист-анкеты': IISProba9ТЧРегистАнкетыModel
  },

  'application-name': 'Proba9',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba9',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba9',
          title: 'Proba9'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba9: {
          caption: 'Proba9',
          title: 'Proba9',
          'i-i-s-proba9-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba9-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-proba9-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba9-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba9-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba9-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba9-должности-l': IISProba9ДолжностиLForm,
    'i-i-s-proba9-организация-l': IISProba9ОрганизацияLForm,
    'i-i-s-proba9-планир-собес-l': IISProba9ПланирСобесLForm,
    'i-i-s-proba9-рег-результ-l': IISProba9РегРезультLForm,
    'i-i-s-proba9-регист-анкеты-l': IISProba9РегистАнкетыLForm,
    'i-i-s-proba9-сотрудники-l': IISProba9СотрудникиLForm,
    'i-i-s-proba9-должности-e': IISProba9ДолжностиEForm,
    'i-i-s-proba9-организация-e': IISProba9ОрганизацияEForm,
    'i-i-s-proba9-планир-собес-e': IISProba9ПланирСобесEForm,
    'i-i-s-proba9-рег-результ-e': IISProba9РегРезультEForm,
    'i-i-s-proba9-регист-анкеты-e': IISProba9РегистАнкетыEForm,
    'i-i-s-proba9-сотрудники-e': IISProba9СотрудникиEForm
  },

});

export default translations;
