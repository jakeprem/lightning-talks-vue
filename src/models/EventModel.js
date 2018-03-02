import BaseModel from '@/models/BaseModel'

export default class EventModel extends BaseModel {
  __contract__ = {
    active: 'boolean',
    start_datetime: 'datetime',
    end_datetime: 'datetime',
    submission_deadline: 'date',
    number_of_talks: 'integer',
    talk_length: 'integer',
    voting_enabled: 'boolean'
  }
}