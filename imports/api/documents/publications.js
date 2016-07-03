import { Meteor } from 'meteor/meteor';
import { Documents } from '../';

Meteor.publish('documents', () => Documents.find());
