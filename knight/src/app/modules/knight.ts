//Schema Knight

export interface Knight {

  name: string
  nickname: string
  birthday: Date
  weapons: Array<[{
    name: String
    attr: String
    equipped: Boolean
    amount: Number
  }]>
  attributes: Array <[{
    strength: Number
   dexterity: Number
   constitution: Number
   inteligence: Number
   wisdom: Number
   charisma: Number
  }]>
  keyAttribute: String
  status: Boolean
}
