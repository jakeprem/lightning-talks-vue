import BaseModel from '@/models/BaseModel'

export default new BaseModel([
  'active',
  'start_datetime',
  'end_datetime',
  'submission_deadline',
  'number_of_talks',
  'talk_length',
  'voting_enabled',
  'selected_talk_ids'
])

// __contract__ = {
//   active: 'boolean',
//   start_datetime: 'datetime',
//   end_datetime: 'datetime',
//   submission_deadline: 'date',
//   number_of_talks: 'integer',
//   talk_length: 'integer',
//   voting_enabled: 'boolean'
// }
